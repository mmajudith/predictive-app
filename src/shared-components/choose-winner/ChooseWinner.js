'use client';

import { useDispatch } from 'react-redux';
import { stake } from '@/redux/features/eSportsReducer';

const ChooseWinner = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<p>Choose your Match Winner</p>
				<div>
					<div>
						<div>
							<img src="" alt="" />
							<p>Winner</p>
						</div>
						<p>A</p>
						<div>
							<img src="" alt="" />
							<img src="" alt="" />
							<input type="text" placeholder="Your Bet" />
						</div>
					</div>

					<p>OR</p>

					<div>
						<p>
							Potential Wins : <span>$64.05</span>
						</p>
						<p>B</p>
						<div>
							<button>Stake</button>
							<button
							// onClick={() => dispatch(stake(index))}
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
