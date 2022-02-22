//run: npm install --save mocha ganache-cli web3

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //this is a constructor - we are making instances of the Web3 library - when utilizing constructors we capitalize
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

// contract test code will go here

let accounts;
let inbox;

beforeEach(async () => { 
    // Get a list of all accounts 
    accounts = await web3.eth.getAccounts()

    // Use one of those accounts to deploy E
    // the contract

    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:['Hi there!']}) //chaining on deploy method to the contract that is an instance of the Contract 
    .send({from: accounts[0],gas:'1000000'}) //specifying the contract we want to deploy the account from -- essentially the person who is deploying the account
});

    describe('Inbox', () =>{ 
     it('deploys a contract', () => {
         console.log(inbox)
     }); 
    });
    