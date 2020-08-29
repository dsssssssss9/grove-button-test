basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, pins.digitalReadPin(DigitalPin.P2))
})
