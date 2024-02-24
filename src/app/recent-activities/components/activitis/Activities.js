import { activities } from '@/dummy-data/activities';

const Activities = () => {
	return (
		<div className="w-[80%]">
			<p className="text-center text-lg my-7 text-white">Recent Activities</p>
			<div className="px-20 py-10 flex flex-col justify-between gap-9 bg-[#1B014A] rounded-lg">
				{activities.map((activite, index) => (
					<div
						key={index}
						className={`w-full h-[70px] px-5 bg-[#12022F] rounded-lg ${
							activite.title === 'Place a bet on League of Legends'
								? `text-white`
								: `text-[#bec4cc]`
						} flex flex-row justify-between items-center gap-5`}
					>
						<div className="w-[25%] flex flex-row justify-center items-center gap-5">
							<img src="/assets/ellipse.png" alt="ellipse" />
							<p>{activite.title}</p>
						</div>
						<p className="w-[15%] flex flex-col justify-center items-center">
							{activite.sport}
						</p>
						<p className="w-[15%]">
							{' '}
							<span className="w-[26px] h-[26px] mr-2 text-center rounded-full font-semibold inline-block bg-[#26A17B]">
								T
							</span>
							{activite.score}
						</p>
						<p className="w-[20%] flex flex-row items-center gap-3">
							{activite.amount}
							{activite.lost && (
								<span className="w-[74px] h-[30px] flex flex-col justify-center items-center rounded-full bg-[#BD420D] text-[#FFA587]">
									{activite?.lost}
								</span>
							)}
							{activite.reward && (
								<span className="w-[74px] h-[30px] flex flex-col justify-center items-center rounded-full bg-[#096E3E] text-[#11D94F]">
									{activite?.reward}
								</span>
							)}
						</p>
						<p className="w-[15%] flex flex-col justify-end items-end">
							{activite.time}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Activities;
