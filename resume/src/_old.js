import './style.scss'
import Me from './me.class'
// import * as THREE from 'three'

const App = {
}

const DPR = window.devicePixelRatio || 1

function createContext2D() {
    const c = document.createElement('canvas')

    c.width = page.W * DPR
    c.height = page.H * DPR

    const x = c.getContext('2d')
    x.scale(DPR, DPR)

    page.el.appendChild(c)

    return { x, c }
}

function draw() {
    const { x, c } = createContext2D()
    let h = 380, x0 = (page.W - 30) / 2, x1 = (page.W - 150) / 2
    // x.fillStyle = 'green'
    // x.fillRect(0, h, page.W, page.H)
    const source = document.getElementById('source')
    x.drawImage(source, 0, 0, page.W, page.H)
    const g = x.createLinearGradient(0, 0, 0, h)
    g.addColorStop(0, '#01A9DB')
    g.addColorStop(.5, '#58D3F7')
    g.addColorStop(1, '#D97549')
    x.fillStyle = g
    x.fillRect(0, 0, page.W, h)
    x.fillStyle = '#872D06'
    x.lineWidth = '4px'
    x.strokeStyle = '#000'
    x.moveTo(x0, h)
    x.lineTo(x1, page.H)
    x.lineTo(x1 + 150, page.H)
    x.lineTo(x0 + 30, h)
    x.closePath()
    // x.stroke()
    x.fill()
}

let N = 0, P

function nextPage() {
    let p = P.nextElementSibling
    if (p && p.hasAttribute('data-page')) {
        P.setAttribute('hidden', true)
        P = p
        P.removeAttribute('hidden')
    }
}

function prevPage() {
    let p = P.previousElementSibling
    if (p && p.hasAttribute('data-page')) {
        P.setAttribute('hidden', true)
        P = p
        P.removeAttribute('hidden')
    }
}

document.onreadystatechange = function(e) {
    console.log(document.readyState)
    if (document.readyState === 'complete') {
        const pager = document.querySelector('.pager')
        P = document.querySelector('.page')
        pager.addEventListener('click', function(e) {
            let t = e.target
            let n = t.className
            if (n === 'pager__prev') {
                console.log('prev')
                prevPage()
            } else if (n === 'pager__next') {
                console.log('next')
                nextPage()
            } else {
            }
        })
    }
}