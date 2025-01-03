let heartbeat_count = 0,
    interval_heartbeat = null;

function heartbeat(worker) {
    interval_heartbeat = setInterval(() => {
        console.log('ping!');
        worker.on('exit', () => {
            heartbeat_count = 0;
            clearInterval(interval_heartbeat);
        });
        worker.send('ping!');
        heartbeat_count++;
        if (heartbeat_count >= 3) {
            process.kill(worker.process.pid);
            heartbeat_count = 0;
            clearInterval(interval_heartbeat);
        }
    }, 500);

    worker.on('message', (message) => {
        if (message === 'pong!') {
            console.log('pong!');
            heartbeat_count--;
        }
    });
}

module.exports = {heartbeat};
