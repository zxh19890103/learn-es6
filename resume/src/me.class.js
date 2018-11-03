class Me {
    /**
     * 
     * @param {*} param0 { x: Context2D, c: Canvas }
     */
    constructor({ x, c, w, h }) {
        this.x = x
        this.c = c
        this.w = w
        this.h = h

        console.log(this.name)

        this.pos = { x: 100, y: 100 }
        this.data = [
            0, 0, 20, // head 0
            -10, 40, -30, 80, // left hand 3
            10, 40, 30, 80, // right hand 7
            0, 50, 0, 70, // body 11
            -10, 100, -20, 130, // left leg 15
            10, 100, 20, 130 // right leg 19
        ]

        Me.say()
    }

    static say() {
        console.log('Hello, World.')
    }

    initState() {
        const x = this.x
        x.strokeStyle = '#000'
        x.fillStyle = '#000'
        x.lineWidth = '5'
    }

    walk() {
        this.data[15] += 1
    }

    draw() {
        const x = this.x, d = this.data
        x.translate(this.pos.x, this.pos.y)
        x.beginPath()
        // draw head
        x.arc(d[0], d[1], d[2], 0, 2 * Math.PI, false)
        // left hand
        x.moveTo(d[0], d[2])
        x.lineTo(d[3], d[4])
        x.lineTo(d[5], d[6])
        // right hand
        x.moveTo(d[0], d[2])
        x.lineTo(d[7], d[8])
        x.lineTo(d[9], d[10])
        // body
        x.moveTo(d[0], d[2])
        x.lineTo(d[11], d[12])
        x.lineTo(d[13], d[14])
        // left leg
        x.moveTo(d[13], d[14])
        x.lineTo(d[15], d[16])
        x.lineTo(d[17], d[18])
        // right leg
        x.moveTo(d[13], d[14])
        x.lineTo(d[19], d[20])
        x.lineTo(d[21], d[22])
        // stroke
        x.stroke()
        x.translate(-100, -100)
    }
}

export {
    Me
}