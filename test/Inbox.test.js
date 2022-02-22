//run: npm install --save mocha ganache-cli web3
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //this is a constructor - we are making instances of the Web3 library - when utilizing constructors we capitalize
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async () => { 
    // Get a list of all accounts 
    accounts = await web3.eth.getAccounts()
    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)) 
    .deploy({data:bytecode, arguments:['Hi there!']})//calling deploy doesn't deploy anything it starts to create an object that can be deployed -             //chaining on deploy method to the contract that is an instance of the Contract 
    .send({from: accounts[0],gas:'1000000'})//the send method actually triggers the communication from Web3 off to the network            //specifying the contract we want to deploy the account from -- essentially the person who is deploying the account
});//the above inbox object is a JSON representation of the contract(the contract that exists on the block chain) that we can interact with
    describe('Inbox', () =>{ 
     it('deploys a contract', () => {
         assert.ok(inbox.options.address);//after we deploy the contract to the ganache network this address property will contain the address of where it was deployed to//ok method essentially determines if something exists to pass
     }); 

    });