const EventEmitter = require('events').EventEmitter;

class GeekBang extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('lessons', {price: Math.ceil(Math.random() * 100)});
        }, 400);
    }
}

module.exports = GeekBang;
