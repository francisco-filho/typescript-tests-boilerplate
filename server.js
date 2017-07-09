const child_process = require('child_process')
const spawn = child_process.spawn

/*
const list = spawn('./list.sh')

console.info(process.argv)

list.stdout.on('data', (data) => {
    console.log(data.toString())
})

list.stdout.on('end', () => {
    console.info('bye!')
})
*/
var args = [
    'program',
    '--name', 'app',
    '--template', 'java',
    '--verbose'
]

var args1 = args.reduce((o, n) => {
    if (n.startsWith('--')){
        //console.log('startsWith', n)
        o[n] = ''
        o['lastParam'] = n
    } else if (o.lastParam && !n.startsWith('--')) {
        //console.log('not starts with', o, n)
        o[o.lastParam] = n 
        o.lastParam = null
    } else {
        //console.log('else', n)
        o[n] = true
        o.lastParam = null
    }

    return o
}, {})

const f = Object.keys(args1)
    .filter(a => a.startsWith('--'))
    .map( a => ({[a]: args1[a]}) )
console.log(f)

//delete args1.lastParam



//console.log(args1)