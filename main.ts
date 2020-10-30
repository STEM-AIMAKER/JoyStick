//% color=190 weight=100 icon="\uf1ec" block="Hanshin STEM JoyStick"
namespace JoyStick 
{
    // color=190 weight=100 icon="\uf1ec" block="Hanshin STEM JoyStick"
    let kPin: DigitalPin = null
    let xPin: AnalogPin = null
    let yPin: AnalogPin = null
    let onKPressedEventHandler: (pressed: boolean) => void;
    
    //% blockId=readYValue block="Read JoyStick Y Value"
    export function readYValue(): number {
        return pins.analogReadPin(yPin)
    }
    
    //% blockId=readXValue block="Read JoyStick X Value"
    export function readXValue(): number {
        return pins.analogReadPin(xPin)
    }

    /**
     * Registers code to run when k buton pressed.
     */
    //% blockId=onShakeEvent block="On K button pressed event" 
    export function onShakeEvent(cb: (pressed: boolean) => void) {
        onKPressedEventHandler = cb;
    }

    pins.onPulsed(kPin, PulseValue.High, function () {
            if( onKPressedEventHandler )
                onKPressedEventHandler(true)
        })
    pins.onPulsed(kPin, PulseValue.Low, function () {
        if( onKPressedEventHandler )
            onKPressedEventHandler(false)
    })

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