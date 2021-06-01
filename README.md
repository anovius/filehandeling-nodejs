# File Handling Node.js
## Include in your app
    const fs = require('fs')
## Reading from a File
    fs.readFile('data.txt', (err, data) => {
        if(!err) console.log((data.toString()))
    })
## Writing on a File
    const data =  'write this data on file\n'
    fs.writeFile('output.txt', data, (err) => {
        if(err) console.log('error occurred while writing on file')
    })
## Appending a File
    const appendData = 'this is append data\n'
    fs.appendFile('append.txt', appendData, (err) => {
        if(err) console.log('error occurred while writing on file')
    })
## Deleting a File
    fs.unlink('delete.txt', (err) => {
        if(err) console.log('file not found')
    })