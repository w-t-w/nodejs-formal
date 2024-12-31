const net = require('net');

class RPC {
    constructor({encode, decode, isReceiveComplete}) {
        this.encode = encode;
        this.decode = decode;
        this.isReceiveComplete = isReceiveComplete;
    }

    createServer(callback) {
        const tcpServer = net.createServer(socket => {
            let buffer = null,
                packageLength = 0,
                packageBuffer = null;
            socket.on('data', data => {
                buffer = buffer && buffer.length ? Buffer.concat([buffer, data]) : data;
                while (buffer && (packageLength = this.isReceiveComplete(buffer))) {
                    if (packageLength === buffer.length) {
                        packageBuffer = buffer;
                        buffer = null;
                    } else {
                        packageBuffer = buffer.slice(0, packageLength);
                        buffer = buffer.slice(packageLength);
                    }
                    const {result, seq} = this.decode(packageBuffer);

                    callback({
                        body: result,
                        socket
                    }, {
                        end: (data) => {
                            const buffer_result = this.encode(data, seq);
                            socket.write(buffer_result);
                        }
                    });
                }
            });
        });

        return {
            listen() {
                tcpServer.listen.apply(tcpServer, arguments);
            }
        };
    }
}

module.exports = RPC;
