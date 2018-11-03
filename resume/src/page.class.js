import animationNames from './anim-names'

class Page {
    constructor(el) {
        this.el = document.querySelector(el)
        this.W = this.el.clientWidth
        this.H = this.el.clientHeight
        this.p = null
    }

    nextParagraph() {
        let p = this.p //.nextSibling
        p.classList.add(animationNames.bounceInLeft)
        p.style.display = 'block'
        this.p = p.nextElementSibling
        if (this.p) {
            setTimeout(() => {
                this.nextParagraph()
            }, 3 * 1000)
        }
    }

    nextBg() {
        let p = this.p
        p.classList.add(animationNames.zoomInDown)
        p.style.display = 'block'
        this.p = p.nextElementSibling
        if (this.p) {
            setTimeout(() => {
                this.nextBg()
            }, 3 * 1000)
        }
    }

    play(type) {
        this.p = this.el.querySelector(`.page__${type}`)
        switch (type) {
            case 'bg':
                this.nextBg()
                break
            case 'paragraph':
            default:
                this.nextParagraph()
                break
        }
    }
}