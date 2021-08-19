const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (num1, num2) => {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
})

eventEmitter.emit('sum',7,2)


class Person extends EventEmitter {
    constructor (name) {
        super();
        this._name = name;
    }

    get name () {
        return this._name;
    }
}

let pedro = new Person('Pedro');
let cristina = new Person('Cristina')

pedro.on('name', () => {
    console.log('mi nombre es ' + pedro.name)
})

cristina.on('name', () => {
    console.log('mi nombre es ' + cristina.name)
})

pedro.emit('name')
cristina.emit('name')