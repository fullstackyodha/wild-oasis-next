import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Wild Oasis",
	description: "App to book room for your vacation stay",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${josefin.className} relative antialiased flex flex-col bg-primary-950 text-primary-100 min-h-screen`}>
				<Header />

				<div className="flex-1 px-8 py-12">
					<main className="max-w-7xl mx-auto w-full">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
