import Players from './components/Players/Players';
import ESport from './components/e-sport/ESport';
import PredictiveMarket from './components/predictive-market/PredictiveMarket';

export default function Dashboard() {
	return (
		<main className="max-w-[1440px] w-full h-fit mx-auto">
			<Players />
			<div className="w-full h-auto m-auto flex flex-row justify-between gap-10 px-10 pb-10 bg-[#12022F]">
				<PredictiveMarket />
				<ESport />
			</div>
		</main>
	);
}
