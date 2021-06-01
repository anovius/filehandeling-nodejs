const fs = require('fs')

//reading from file
fs.readFile('data.txt', (err, data) => {
    if(!err) console.log((data.toString()))
})


//writing on a file
const data =  'write this data on file\n'
fs.writeFile('output.txt', data, (err) => {
    if(err) console.log('error occurred while writing on file')
})

//appending a file
const appendData = 'this is append data\n'
fs.appendFile('append.txt', appendData, (err) => {
    if(err) console.log('error occurred while writing on file')
})

//delete file
fs.unlink('delete.txt', (err) => {
    if(err) console.log('file not found')
})