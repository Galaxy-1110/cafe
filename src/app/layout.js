import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Brew Haven",
	description:
		"Welcome to Brew Haven, where every cup tells a story and every sip is an experience. Nestled in the heart of the city, our café is a sanctuary for coffee aficionados and casual drinkers alike.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
