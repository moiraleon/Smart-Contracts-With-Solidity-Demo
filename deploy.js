const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'make asset mechanic private picture message penalty language swift wolf virus staff',
    'https://rinkeby.infura.io/v3/6c1009cb8115459680f9055ddcdeded0'
    );

    const web3 = new Web3(provider);

    const deploy = async () =>{
        const accounts = await web3.eth.getAccounts();
        console.log('Attempting to deploy from account', accounts[0])

        const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments:['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0]});

        console.log('Contract deployed to', result.options.address);
        provider.engine.stop()
    };
    deploy();