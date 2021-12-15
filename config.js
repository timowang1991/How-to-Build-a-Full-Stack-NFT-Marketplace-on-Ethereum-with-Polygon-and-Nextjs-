import getConfig from 'next/config';

const { publicRuntimeConfig: {
    BLOCKCHAIN_ENV
} } = getConfig();

let nftaddress;
let nftmarketaddress;

switch (BLOCKCHAIN_ENV) {
    case 'mumbai':
        nftaddress = '0xf691b2C2165328A609C25b5F08Cd663E9fEd7581';
        nftmarketaddress = '0x436e64323b0EAa4EBbBB54845Ee6b1c505cB1DE3';
        break;
    default:
        nftaddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
        nftmarketaddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
        break;
}

export { nftaddress, nftmarketaddress };
