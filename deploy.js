const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'make asset mechanic private picture message penalty language swift wolf virus staff',
    'https://rinkeby.infura.io/v3/6c1009cb8115459680f9055ddcdeded0'
    );

    const web3 = new web3(provider);