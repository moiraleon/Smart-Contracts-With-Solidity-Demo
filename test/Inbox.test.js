//run: npm install --save mocha ganache-cli web3
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //this is a constructor - we are making instances of the Web3 library - when utilizing constructors we capitalize
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
//const INITIAL_STRING = 'Hi there!' //could be used for more robust testing and throughout

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
     it('has a default message', async () => { 
        const message = await inbox.methods.message().call(); //accesses the contract(inbox) then the property on the object called methods(all the public funcitons on that contract), then calling that specific funiton by name(message or could be setMEssage function) incoke it with a pair of parethasis on the contract then parenthasis following the call()---- message(this is where we would pass in any arguments that this function may require).call(this is where we customize the transaction we are trying to send out --like who is paying for this transaction and how much gas to use)
        assert.equal(message,'Hi there!');
    });

    it('can change the message',async ()=>{
        await inbox.methods.setMessage('bye').send({from: accounts[0]})//the send tells it to send what we have prepared to the network and specifies who is going to pay for the gas within the object and with the key from
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });

    });