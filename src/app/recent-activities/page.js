import Players from '../../shared-components/Players/Players';
import Activities from './components/activitis/Activities';
import PredictiveMarket from '../../shared-components/predictive-market/PredictiveMarket';

export default function RecentActivities() {
	return (
		<main className="max-w-[1440px] w-full h-fit mx-auto">
			<Players />
			<div className="w-full h-auto m-auto flex flex-row justify-between gap-10 px-10 pb-10 bg-[#12022F]">
				<PredictiveMarket />
				<Activities />
			</div>
		</main>
	);
}
