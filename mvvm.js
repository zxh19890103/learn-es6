const Mustache = require('mustache')

class View {
    constructor(tpl) {
        this.ee = new ViewEventEmitter()
        this.tpl = tpl
        this.dp = null
    }
    render() {
        const output = Mustache.render(this.tpl, this.dp)
        console.log(output)
    }
    change(value) {
        this.ee.emit({ value, __view__: this })
    }
}

class ViewEventEmitter {
    constructor() {
        this.listeners = []
    }
    emit(payload) {
        setTimeout(() => {
            for (let  listener of this.listeners) {
                listener.call(payload.__view__, payload)
            }
        }, 0)
    }
    on(handler) {
        this.listeners.push(handler)
    }
}

class ViewModel {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    connect() {
        let dp = new Proxy(this.model, {
            view: this.view,
            set(target, name, value) {
                target[name] = value
                this.view.render()
                return true
            },
            get(target, name) {
                return name in target ? target[name] : '<novalue>'
            }
        })
        this.view.dp = dp // bind data
        this.view.ee.on(function(payload) {
            this.dp.value = payload.value
        })
        this.dp = dp
    }

    change(value) {
        this.dp.value = value
    }
}

// bootstrap
const view = new View(`
the value is {{value}}
`)
const model = { value: 'Singhi' }
const viewModel = new ViewModel(model, view)
viewModel.connect()

view.render()

setTimeout(() => {
    console.log('we update the value on the view.')
    view.change('Ronnie')
}, 5000)

setTimeout(() => {
    console.log('we update the value on the model.')
    viewModel.change('Selby')
}, 10000)