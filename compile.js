//first run: npm install solc@0.4.17 
const path = require('path');
const fs = require('fs');
const solc = require('solc')

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

// compile code will go here
//solc.compile(source, 1)//pass in our source code to be compiled, and specify number of different contracts we are attempting to compile

//console.log(solc.compile(source, 1))//testing to see what compiler is doing

module.exports = solc.compile(source, 1).contracts[':Inbox']; //gives us direct access to the object that contains just the bytecode