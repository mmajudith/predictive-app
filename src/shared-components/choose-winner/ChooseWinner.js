'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stake } from '@/redux/features/eSportsReducer';
import { initWeb3 } from '@/utils/kit';

const ChooseWinner = ({ index }) => {
	const { address } = useSelector((state) => state.esportsSlice);

	const dispatch = useDispatch();
	const [ABackground, setABackground] = useState('#1C004E');
	const [BBackground, setBBackground] = useState('#1C004E');
	const [coinAmount, setCoinAmount] = useState('');
	const [disabled, setDisabled] = useState(false);

	const handleABackground = () => {
		if (ABackground === '#1C004E') {
			setABackground('#44FF34');
		}
		if (ABackground === '#44FF34') {
			setABackground('#1C004E');
		}
	};

	const handleBBackground = () => {
		if (BBackground === '#1C004E') {
			setBBackground('#44FF34');
		}
		if (BBackground === '#44FF34') {
			setBBackground('#1C004E');
		}
	};

	const handleStake = async () => {
		if (coinAmount.length === 0) {
			return window.alert('Please enter valid coin amount!');
		}
		setDisabled(true);
		try {
			let instance = await initWeb3();
			await instance.methods.stakeTokens(+coinAmount).send({
				from: address,
				gasLimit: 280000,
			});
			window.alert('coin successfully stake');
			setDisabled(false);
		} catch (err) {
			console.log(err, 'err staking coin');
			window.alert('err staking coin');
			setDisabled(false);
		}
	};

	return (
		<div className="w-screen h-screen m-auto flex flex-col justify-center items-center fixed inset-0 z-20 bg-black-opacity">
			<div className="w-[450px] h-[320px] rounded-2xl p-5 bg-gradient-to-t from-[#12022F] to-[#1C004E]">
				<p className="text-center w-full mx-auto pb-5 border-b-2 border-b-[#BB0BC8] border-solid">
					Choose your Match Winner
				</p>
				<div className="w-full h-[90%] flex flex-row justify-between items-center">
					<div className="w-[43%] h-full flex flex-col justify-between py-5">
						<div className="text-sm flex flex-row justify-start items-center gap-2">
							<img src="/assets/rectangle.png" alt="" />
							<p>Winner</p>
						</div>
						<p
							onClick={handleABackground}
							style={{ backgroundColor: ABackground }}
							className="w-[60px] h-[80px] cursor-pointer font-extrabold text-6xl self-end rounded-xl flex flex-col justify-center items-center border border-[#BB0BC8] border-solid"
						>
							A
						</p>
						<div className="flex flex-row justify-start items-center">
							<img src="/assets/color.png" alt="" />
							<img src="/assets/down-arrow-icon.png" alt="" />
							<input
								value={coinAmount}
								onChange={(e) => setCoinAmount(e.target.value)}
								type="text"
								placeholder="Your Bet"
								className="w-[120px] h-[40px] bg-inherit outline-none text-center rounded border border-[#BB0BC8] border-solid"
							/>
						</div>
					</div>

					<p>OR</p>

					<div className="w-[43%] h-full flex flex-col justify-between py-5">
						<p className="text-sm">
							Potential Wins : <span className="text-[#44FF34]">$64.05</span>
						</p>
						<p
							onClick={handleBBackground}
							style={{ backgroundColor: BBackground }}
							className="w-[60px] h-[80px] cursor-pointer ml-4 mb-2 font-extrabold text-6xl self-start rounded-xl flex flex-col justify-center items-center border border-[#BB0BC8] border-solid"
						>
							B
						</p>
						<div className="flex flex-row justify-between items-center">
							<button
								disabled={disabled}
								onClick={handleStake}
								className="w-[45%] h-[33px] bg-[#C80B66] rounded-lg text-sm"
							>
								Stake
							</button>
							<button
								className="w-[45%] h-[33px] border border-[#BB0BC8] border-solid rounded-lg text-sm"
								onClick={() => dispatch(stake(index))}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseWinner;
