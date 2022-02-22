//run: npm install --save mocha ganache-cli web3

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //this is a constructor - we are making instances of the Web3 library - when utilizing constructors we capitalize
const web3 = new Web3(ganache.provider());

// contract test code will go here

let accounts;

beforeEach(async () => { 
    // Get a list of all accounts 
    accounts = await web3.eth.getAccounts()
    // Use one of those accounts to deploy E
    // the contract
    });

    describe('Inbox', () =>{ 
     it('deploys a contract', () => {
         console.log(accounts)
     }); 
    });
    