import './globals.css';
import Providers from './providers/provider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'Predictive Play',
	description: 'Prediction application',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="max-w-[1440px] w-full h-auto m-auto relative text-base font-kumbh font-normal bg-white not-italic">
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
