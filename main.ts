//% color=190 weight=100 icon="\uf1ec" block="Hanshin STEM JoyStick"
namespace JoyStick 
{
    // color=190 weight=100 icon="\uf1ec" block="Hanshin STEM JoyStick"
    let kPin: DigitalPin = null
    let xPin: AnalogPin = null
    let yPin: AnalogPin = null
    
    //% blockId=readYValue block="Read JoyStick Y Value"
    export function readYValue(): number {
        return pins.analogReadPin(yPin)
    }
    
    //% blockId=readXValue block="Read JoyStick X Value"
    export function readXValue(): number {
        return pins.analogReadPin(xPin)
    }

    //% blockId=isKPressed block="Is JoyStick K pressed"
    export function isKPressed(): boolean {
        if( 1 === pins.digitalReadPin(kPin) ) {
            return true
        }
        return false;
    }

    //% blockId=connectJoyStick block="Connect JoyStick at K=%k|X=%x|y=%y"
    export function connectJoyStick(k: DigitalPin, x: AnalogPin, y: AnalogPin): void {
        kPin = k
        xPin = x
        yPin = y
        pins.setPull(kPin, PinPullMode.PullNone)
    }
}