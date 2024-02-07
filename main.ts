input.onButtonPressed(Button.AB, function () {
    makerbit.runMp3Command(Mp3Command.STOP);
})
input.onButtonPressed(Button.A, function () {
    makerbit.runMp3Command(Mp3Command.PLAY_PREVIOUS_TRACK);
})
input.onButtonPressed(Button.B, function () {
    makerbit.runMp3Command(Mp3Command.PLAY_NEXT_TRACK);
})
makerbit.connectSerialMp3(DigitalPin.P8, DigitalPin.P2);
makerbit.setMp3Volume(15);
makerbit.playMp3TrackSimple(1);

basic.forever(function () {

})
