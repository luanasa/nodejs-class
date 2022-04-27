const timeOut = 3000
const finished = () => console.log('done!')

const setInterval = 1000
const checking = () => console.log('checking!')

setTimeout(finished, timeOut)
console.log('Showing in progress...')

 /* let timer = setTimeout(finished, timeOut)
clearTimeout(timer) // cancel timer 

setInterval(checking, setInterval) 

let interval = setInterval(checking, setInterval)

setInterval( () => clearInterval(interval), 3000)

*/
