let IR_waarde = 0
IR.IR_init()
let EXTRA = 0
let vooruit = 157
let achteruit = 21
let links = 221
let rechts = 61
let _ = 189
let _10 = 173
let _0 = 181
let _1 = 22
let _2 = 25
let _3 = 13
let _4 = 12
let _5 = 24
let _6 = 133
let _7 = 8
let _8 = 199
let _9 = 165
basic.forever(function () {
    if (IR_waarde == _1) {
        EXTRA = 1
    }
})
basic.forever(function () {
    IR_waarde = IR.IR_read()
    basic.showNumber(IR_waarde)
})
basic.forever(function () {
    if (EXTRA == 1) {
        let ok = 0
        if (IR_waarde == vooruit) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
        }
        if (IR_waarde == achteruit) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
        }
        if (IR_waarde == links) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
        }
        if (IR_waarde == rechts) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        }
        if (IR_waarde == ok) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
