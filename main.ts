//% color=190 weight=100 icon="\uf1ec" block="Hanshin STEM JoyStick"
namespace JoyStick 
{
    // color=190 weight=100 icon="\uf1ec" block="HANSHIN: joystick"
    let kPin: DigitalPin = null
    let xPin: AnalogPin = null
    let yPin: AnalogPin = null
    let onKPressedEventHandlerTrue: () => void;
    let onKPressedEventHandlerFalse: () => void;
    
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
        if( 0 === pins.digitalReadPin(kPin) ) {
            return true
        }
        return false;
    }
    
    /**
     * Registers code to run when k buton pressed.
     */
    //% blockId=onShakeEvent block="On K button at pin=%k pressed=%pressed event" 
    export function onShakeEvent(k: DigitalPin,pressed: boolean, cb: () => void) {
        kPin = k
        if( pressed )
            onKPressedEventHandlerTrue = cb
        else
            onKPressedEventHandlerFalse = cb
        
        pins.setPull(kPin, PinPullMode.PullNone)
        
        pins.onPulsed(kPin, PulseValue.High, function () {
            if( onKPressedEventHandler )
                onKPressedEventHandler(false)
        })
        pins.onPulsed(kPin, PulseValue.Low, function () {
            if( onKPressedEventHandler )
                onKPressedEventHandler(true)
        })
    }

    //% blockId=connectJoyStick block="Connect JoyStick at K=%k|X=%x|y=%y"
    export function connectJoyStick(k: DigitalPin, x: AnalogPin, y: AnalogPin): void {
        kPin = k
        xPin = x
        yPin = y
        
    }
}
