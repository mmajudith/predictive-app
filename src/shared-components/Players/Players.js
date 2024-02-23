const Players = () => {
	return (
		<div className="w-full h-[157px] m-auto flex flex-col justify-center items-center bg-[url('/assets/elden-ring-landscape.png')] bg-no-repeat">
			<div className="w-full mx-auto px-10 flex flex-row justify-between items-center">
				<img src="/assets/back-dir.png" alt="" className="cursor-pointer" />
				<img src="/assets/front-dir.png" alt="" className="cursor-pointer" />
			</div>
			<div className="w-3/4 mx-auto flex flex-row justify-between items-center">
				<p className="flex flex-col font-semibold text-white text-3xl italic">
					<span>The</span>
					<span>Last Knight</span>
				</p>
				<p className="w-[128px] h-[30px] flex flex-col justify-center items-center text-white rounded-xl text-sm bg-[#12022F]">
					View Players
				</p>
			</div>
		</div>
	);
};

export default Players;
