import './style.scss'
import { Me } from './me.class'

const page = {
    el: null,
    x: null,
    c: null,
    W: 0,
    H: 0,
    PR: 1,
    init() {
        this.el = document.querySelector('.page')
        this.PR = window.devicePixelRatio || 1
        this.W = this.el.clientWidth
        this.H = this.el.clientHeight
    },
    createConext2D() {
        const c = document.createElement('canvas')

        c.width = this.W * this.PR
        c.height = this.H * this.PR
    
        const x = c.getContext('2d')
        x.scale(this.PR, this.PR)
    
        this.el.appendChild(c)

        this.c = c
        this.x = x
    },
    withGrid() {
        const x = this.x
        x.strokeStyle = 'rgba(0 ,0, 0, .1)'
        x.lineWidth = '1'
        let x0 = 0, y0 = 0, x1 = 0, y1 = 0, dx = 10, dy = 10
        x.beginPath()
        // x line
        x1 = this.W
        while (true) {
            y1 += dy
            if (y1 > this.H) break
            x.moveTo(x0, y1)
            x.lineTo(x1, y1)
        }
        // y line
        y1 = this.H
        x1 = 0
        while(true) {
            x1 += dx
            if (x1 > this.W) break
            x.moveTo(x1, y0)
            x.lineTo(x1, y1)
        }
        x.stroke()
    }
}

function appRun() {
    let raf
    page.init()
    page.createConext2D()
    page.withGrid()

    const me  = new Me({ x: page.x, c: page.c, w: page.W, h: page.H })
    me.initState()

    function draw() {
        // page.x.clearRect(0, 0, page.W, page.H)
        me.draw()
        // change data
        me.walk()
        // raf = window.requestAnimationFrame(draw)
    }

    draw()
}

document.onreadystatechange = function(e) {
    console.log(document.readyState)
    if (document.readyState === 'complete') {
        appRun()
    }
}
