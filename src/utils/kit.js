import { Web3 } from 'web3';
import Xenrena from '../build/Xenrena.json';

export const initWeb3 = async () => {
	if (window.ethereum) {
		const web3 = new Web3(window.ethereum);
		const contract = new web3.eth.Contract(
			Xenrena,
			'0xA9E8ED6D4163e6D1952A54b2B48Cb0CF3cecDeD1'
		);

		return contract;
	} else {
		alert('Please add metamask to your browser');
	}
};
