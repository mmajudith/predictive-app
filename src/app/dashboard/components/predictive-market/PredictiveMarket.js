const PredictiveMarket = () => {
	return (
		<div>
			<p>Prediction Market</p>

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
	);
};

export default PredictiveMarket;
