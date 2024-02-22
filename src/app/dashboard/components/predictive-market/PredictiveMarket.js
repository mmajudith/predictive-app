const PredictiveMarket = () => {
	return (
		<div className="w-[250px] h-fit">
			<p className="text-white text-[20.2px] my-7">Prediction Market</p>
			<div className="flex flex-col gap-10">
				{[
					['/assets/sport.png'],
					['/assets/politics.png'],
					['/assets/finance.png'],
					['/assets/sport-2.png'],
				].map(([image], index) => (
					<div key={index}>
						<img src={image} alt="" />
					</div>
				))}
			</div>
		</div>
	);
};

export default PredictiveMarket;
