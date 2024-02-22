import Players from './components/Players/Players';
import ESport from './components/e-sport/ESport';
import PredictiveMarket from './components/predictive-market/PredictiveMarket';

export default function Dashboard() {
	return (
		<main className="max-w-[1440px] w-full h-fit mx-auto">
			<Players />
			<div>
				<PredictiveMarket />
				<ESport />
			</div>
		</main>
	);
}
