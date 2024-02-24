import { userProfile } from '@/dummy-data/userProfile';

const Profile = () => {
	const { name, userAvatar, address, joinedDate, award1, award2, award3 } =
		userProfile;

	return (
		<div className="w-[80%] text-white">
			<p className="text-center text-lg my-7">User Profile</p>
			<div className="px-20 py-10 flex flex-col justify-between gap-9 bg-[#1B014A] rounded-lg">
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-row justify-between items-center gap-10">
						<img src={userAvatar} alt="user avatar" />

						<div className="flex flex-col gap-4">
							<p className=" font-semibold text-[30px]">{name}</p>
							<div className="flex flex-row gap-5">
								<p className="w-[128px] h-[30px] flex flex-col justify-center items-center rounded-xl text-sm bg-[#12022F]">
									{address}
								</p>
								<p className="text-[#BB0BC8] text-xs font-medium">
									{joinedDate}
								</p>
							</div>
							<div className="w-[260px] h-[55px] px-4 rounded-xl bg-[#BB0BC8] flex flex-row justify-start items-center gap-1">
								<img src={award1} alt="award icon" />
								<img src={award2} alt="award icon" />
								<img src={award3} alt="award icon" />
							</div>
						</div>
					</div>
					<p className="w-[120px] h-[40px] flex flex-col justify-center items-center border-[#BB0BC8] border-solid border rounded-lg">
						Edit Profile
					</p>
				</div>

				<div className="w-full mx-auto flex flex-row justify-between gap-7">
					{[
						['/assets/cup-icon.png', 'Total Wins', '00'],
						['/assets/staked.png', 'Staked Volume', '$0.00'],
						['/assets/traded.png', 'Market Traded', '0'],
					].map(([image, stage, amount], index) => (
						<div
							key={index}
							className="w-[260px] h-[180px] p-5 flex flex-col justify-between border-[#BB0BC8] border-solid border rounded-3xl"
						>
							<div>
								<img src={image} alt="" />
								<p>{stage}</p>
							</div>
							<p className=" font-semibold text-2xl">{amount}</p>
						</div>
					))}
				</div>

				<div className="w-full h-[270px] p-7 rounded-lg bg-[#12022F] relative">
					<p>Top 3 Favourite Games</p>
					<p className="w-full h-full m-auto absolute -inset-0 text-[#3D01AB] flex flex-col justify-center items-center">
						Oops! There is no data yet!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
