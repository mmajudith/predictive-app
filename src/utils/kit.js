import { Web3 } from 'web3';
import Xenrena from '../build/Xenrena.json';

export const initWeb3 = async () => {
	if (window.ethereum) {
		const web3 = new Web3(window.ethereum);
		const contract = new web3.eth.Contract(
			Xenrena,
			'0x2d01531cDAC7FA3D48758D80a610c856261CD076'
		);

		return contract;
	} else {
		alert('Please add metamask to your browser');
	}
};
