radio.onReceivedNumber(function (receivedNumber) {
    callibot.motor(KMotor.beide, KDir.vorwärts, 100)
})
radio.onReceivedString(function (receivedString) {
    callibot.motor(KMotor.links, KDir.vorwärts, 100)
})
radio.onReceivedValue(function (name, value) {
    callibot.motor(KMotor.rechts, KDir.vorwärts, 100)
})
basic.forever(function () {
	
})
