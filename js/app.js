console.log('Hello World')
window.addEventListener('gamepadconnected', event => {
    console.log('Gamepad connected: ')
    console.log(event.gamepad)
})

window.addEventListener('gamepaddisconnected', event => {
    console.log('Gamepad disconnected: ')
    console.log(event.gamepad)
})

function update() {
    const gamepads = navigator.getGamepads()
    console.log(gamepads)
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)