require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike deny oval coconut gentle light army genius'; 
let testAccounts = [
"0xffa2195f65e971d08aae19a636db91f1a572de7ef6217d01828e30fb1ab9c03c",
"0x02f3dff324cbaeb9d7a0cf056f62f042513b18fc3ed3d78e5e20b60006d3d4dc",
"0xbc582cd7adbf9ff611be599700ba9315bafd710d6abacd51a0c54a70c4f58d37",
"0xab7d97d2c339162ab7f1a8134b725fa31337a5633180060b4288ee4a0ec85852",
"0x4f8083bc5c1622e2da515d0767e00abb3ae9ea7eac71ac936a51bb6e331b1233",
"0x7a4386804922503650b64295ffb189bc2dc8baa99b597a2465e31d8d2858c71f",
"0x6375ca2fc37e78d4db05aab8a24270d5619044c7e3df8dbdeb70eed6c95afe29",
"0xeb81fc27bf2587778e0cc29de8f11f89e976689a3ca2a71faf06d3541542accc",
"0x8bd06df2d7c7a41883cf8da01aae669b988541daa6974c2d186e860482c2e62a",
"0x79e9f4b832845e1a9e51c535350a5edc26fdbdc01cdb995a37e62787f99679f3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

