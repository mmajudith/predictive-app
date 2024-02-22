const esNews = [
	{
		image: '/assets/news-1.png',
		title: 'POKEMON UNITE WINTER TOURNAMENTS 2023 – JAPAN ROUNDUP',
		descriptions:
			'To qualify for the Asia Champions League 2024, Players in the Asia region would have to attend and fight through the three day event. WINTER 日本代表決定戦 Top 3 would go…',
	},
	{
		image: '/assets/news-2.png',
		title:
			'ALL STARS THAT ARE STEPPING BACK INDEFINITELY FROM COMPETITIVE DOTA 2',
		descriptions:
			'We’ve had several high profile players announce they are stepping away from competitive Dota 2 or are unable to land a spot on any team currently. Let’s go over who…',
	},
	{
		image: '/assets/news-3.png',
		title: 'BEST ADC CHAMPIONS TO PLAY WITH YUUMI IN LOL',
		descriptions:
			'We’ve had several high profile players announce they are stepping away from competitive Dota 2 or are unable to land a spot on any team currently. Let’s go over who…',
	},
];

const ESportNews = () => {
	return (
		<div className="">
			<p className="text-white text-lg my-7">Esport News</p>
			<div className="w-fit h-fit p-7 bg-[#1B014A] rounded-lg">
				{esNews.map((news, index) => (
					<div
						key={index}
						className="flex flex-row justify-between items-center gap-4 mb-8"
					>
						<img src={news.image} alt="" />
						<div className=" text-sm">
							<p className="text-[#BB0BC8] mb-3">{news.title}</p>
							<p className="text-white">{news.descriptions}</p>
						</div>
					</div>
				))}
				<div className="flex flex-row justify-center items-center gap-10 text-white text-sm">
					<div className="w-fit h-fit flex flex-row justify-center items-center gap-2 cursor-pointer">
						<p>{'<'}</p>
						<p>Previous</p>
					</div>

					<div className="w-fit h-fit flex flex-row justify-center items-center gap-2 cursor-pointer">
						<p>Next</p>
						<p>{'>'}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ESportNews;
