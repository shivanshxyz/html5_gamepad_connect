console.log('Hello World')
window.addEventListener('gamepadconnected', event => {
    console.log('Gamepad connected: ')
    console.log(event.gamepad)
})