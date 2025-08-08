let _func = setInterval(_print, 400)

let _prompt = prompt('enter your name : ')
let i = 1
let date = new Date()

function _print() {
    if (i <= _prompt.length) {
        document.getElementById('_h1').innerHTML = 'Hello Dear ' + _prompt.substring(0, i)
        i++
    } else (
        clearInterval(_func)
    )
}

document.getElementById('Date').innerHTML = 'Today is ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

