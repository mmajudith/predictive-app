'use client';

import { useSelector, useDispatch } from 'react-redux';
import { stake } from '@/redux/features/eSportsReducer';
import ESportNews from './epsort-news/ESportNews';
import ChooseWinner from '../../../../shared-components/choose-winner/ChooseWinner';

const ESport = () => {
	const { esports } = useSelector((state) => state.esportsSlice);
	const dispatch = useDispatch();

	return (
		<div className="text-white">
			<p className="text-center text-lg my-7">eSport</p>
			<div className="px-20 flex flex-row justify-between items-center gap-5 bg-[#1B014A] rounded-lg">
				{[
					['All'],
					['Fighting'],
					['Sports'],
					['Shooter'],
					['Adventure'],
					['Racing'],
					['Cards'],
					['Others'],
				].map(([list], index) => (
					<p
						key={index}
						className={`${
							list === 'All'
								? `border-b-[4px] border-solid border-b-[#BB0BC8]`
								: ``
						} py-4`}
					>
						{list}
					</p>
				))}
			</div>

			<div className="mt-7 p-7 bg-[#1B014A] rounded-lg">
				<div className="flex flex-row justify-center items-center rounded-lg">
					{[['Live'], ['Upcoming'], ['Ended']].map(([list], index) => (
						<p
							key={index}
							className={`w-[200px] h-[39px] flex flex-col justify-center items-center border ${
								list === 'Live' ? `border-b-[4px]` : `border`
							} border-solid border-[#BB0BC8] text-white`}
						>
							{list}
						</p>
					))}
				</div>
				{esports.map((sport, index) => (
					<div
						key={index}
						className="h-[113px] px-7 py-2 my-7 rounded-lg bg-[#12022F] flex flex-row justify-between items-center gap-8"
					>
						<div className="w-[40%] h-full flex flex-col justify-between">
							<div className="flex flex-row justify-between items-center">
								<div className="flex flex-row justify-between items-center gap-2">
									<img
										src={sport.gameIcon}
										alt=""
										className="w-[29px] h-[29px]"
									/>
									<p className="text-[13px]">{sport.gameName}</p>
								</div>
								<p className="flex flex-row justify-center items-center gap-1">
									A{' '}
									<span className="flex flex-col justify-center items-center w-[70px] h-[36px] rounded-sm bg-[#1B014A] border border-[#F79D9D] border-solid">
										{sport.teamAScore}
									</span>
								</p>
							</div>
							<div className="flex flex-row justify-between items-center">
								<p className="text-[13px]">{sport.endedTime}</p>
								<div className="flex flex-row justify-between items-center gap-1">
									<p className="">{sport.teamA}</p>
									<img src={sport.teamAIcon} alt="" />
								</div>
							</div>
						</div>

						<p className="w-[5%] text-center">VS</p>

						<div className="w-[50%] h-full flex flex-row justify-between">
							<div className="flex flex-col justify-between">
								<p className="flex flex-row justify-start items-center gap-1">
									<span className="flex flex-col justify-center items-center w-[70px] h-[36px] rounded-sm bg-[#1B014A] border border-[#F79D9D] border-solid">
										{sport.teamBScore}
									</span>
									B{' '}
								</p>
								<div className="flex flex-row justify-between items-center gap-2">
									<img src={sport.teamBIcon} alt="" />
									<p>{sport.teamB}</p>
								</div>
							</div>
							<div className="w-[50%] flex flex-col justify-center items-center gap-2">
								<div className="w-full flex flex-row justify-between items-center">
									<div className="flex flex-row justify-between items-center gap-2">
										<img src="/assets/network-icon.png" alt="" />
										<p className="text-[13px]">In progress</p>
									</div>
									<img src="/assets/fluent-video.png" alt="" />
								</div>
								<p
									onClick={() => dispatch(stake(index))}
									className="w-full h-[30px] bg-[#BB0BC8] rounded flex flex-col justify-center items-center font-medium cursor-pointer"
								>
									Stake
								</p>
							</div>
						</div>
						{sport.isStake && <ChooseWinner />}
					</div>
				))}
			</div>
			<ESportNews />
		</div>
	);
};

export default ESport;
