input.onPinPressed(TouchPin.P2, function () {
    sstate = !(sstate)
})
let sstate = false
sstate = false
basic.forever(function () {
    if (sstate == true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
