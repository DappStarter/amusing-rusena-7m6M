require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note six purpose grace indoor equal gauge'; 
let testAccounts = [
"0x00c4eb00ca7e18246d9424adb1ba92704429d1bc9071dc928c7c8d8f12871c66",
"0x72a90235b08aea2d55b2fd8bbf5a517902f2f7e993ff8de3dafb3a2148381640",
"0x3920c934bb923a99cc978ef0c4fc14fd631e66de3fcee910fe452f4c1db1973e",
"0x792b42c8a9023bacfa1536dc99cda5420d7fbbc6ce7f338008ca6ff31a2ca4df",
"0x90c1dcee45317d36a187bb57360400458930634797c2f5e5933fca4f393b7187",
"0x34317c4337794a0fd7b3de325e5cacff779039f48f7fc27d75fb2b3ababb70a8",
"0x43d3b459feff1c40e53e2ced4c7bb4cdc1290a47f1dc35c2ffd50ca58eed7ee3",
"0xa6c07be20f7f98c4f8fe5e80fa9d08cc59c9420779b4a1b41fcf2ab68b5ff0c4",
"0xb146fd7e699e7c916ef1241867cea547d3d53c5b0ceb0e902baafabc28586e3b",
"0x798f0fd7d0b2f9ecee529365c7f8a8cb77bd3bba8e93d62ed26121bc086417fc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


