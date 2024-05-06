"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/badge";

export default function Home() {
	const pathname = usePathname() || "/";
	const [hovered, setHovered] = useState(pathname);

	return (
		<>
			<nav className="fixed top-0 bg-black opacity-75 w-full px-7 py-0 z-10">
				<div className="flex justify-between items-center align-middle p-8">
					<div className="flex items-center ">
						<Image
							src="/logo.jpg"
							alt="Brew Haven"
							className="rounded-full"
							width={90}
							height={90}
						/>
					</div>
					<div className="flex items-center space-x-12 ">
						{[
							{ name: "Home", link: "/" },
							{ name: "About", link: "#About" },
							{ name: "Menu", link: "#Menu" },
							{ name: "Contact", link: "#Contact" },
						].map((item, index) => {
							return (
								<Link
									key={index}
									href={item.link}
									className="text-white cursor-pointer relative h-full text-xl"
									onMouseOver={() => {
										setHovered(item.link);
										console.log(pathname);
									}}
									onMouseLeave={() => setHovered(pathname)}>
									{item.name}

									{item.link === hovered && (
										<motion.div
											className="absolute  bg-[#8B4513] left-0 right-0 bottom-0 h-[2px] w-[100%]"
											layoutId="navbar"
											transition={{
												type: "spring",
												stiffness: 100,
												damping: 10,
											}}
										/>
									)}
								</Link>
							);
						})}
					</div>
				</div>
			</nav>

			<section
				className={
					"hero" +
					" " +
					"min-h-screen flex justify-center items-center flex-col gap-8"
				}>
				<Reveal>
					<h1 className=" text-white">BREW HAVEN</h1>
				</Reveal>
				<Reveal>
					<p className=" text-center text-white">
						Welcome to Brew Haven, where every cup tells a story and every sip
						is an experience. Nestled in the heart of the city, our café is a
						sanctuary for coffee aficionados and casual drinkers alike.
						<br />
						Step into our warm, inviting space adorned with the aroma of freshly
						brewed coffee beans and the gentle hum of conversation. Our menu
						features a carefully curated selection of artisanal coffees sourced
						from around the world, each cup crafted with precision and passion
						by our skilled baristas.
					</p>
				</Reveal>
				<div className="flex gap-20 ">
					<Reveal>
						<motion.button
							className="bg-[#8B4513] px-16 py-7 rounded-3xl font-bold text-xl"
							whileHover={{
								scale: 1.1,
								backgroundColor: "#c8aa83",
								y: -4,
								x: 4,
							}}
							onClick={() => {
								window.location.href = "#Menu";
							}}
							whileTap={{ scale: [1] }}
							transition={{ ease: "easeInOut" }}>
							Menu
						</motion.button>
					</Reveal>
					<Reveal>
						<motion.button
							onClick={() => {
								window.location.href = "#About";
							}}
							className="border-[#c8aa83] border-2 px-12 py-7 rounded-3xl font-bold text-xl"
							whileHover={{
								scale: 1.1,
								backgroundColor: "#c8aa83",
								y: -4,
								x: 4,
							}}
							whileTap={{ scale: [1] }}
							transition={{ ease: "easeInOut" }}>
							Learn More
						</motion.button>
					</Reveal>
				</div>
			</section>

			<section
				id="About"
				className="min-h-screen bg-[#D2B48C] flex flex-col justify-center items-middle gap-10 ">
				<Reveal>
					<h1 className="w-full text-center">About Us</h1>
				</Reveal>
				<Reveal>
					<div className="flex flex-col gap-5">
						<p>
							Whether you prefer a rich and velvety espresso, a creamy latte art
							masterpiece, or a refreshing cold brew, we have something to
							tantalize every palate. Pair your coffee with one of our
							delectable pastries or sandwiches, made fresh daily using locally
							sourced ingredients.
						</p>
						<p>
							At Brew Haven, we believe in fostering community and connection.
							Our cozy seating areas and communal tables provide the perfect
							setting to unwind with friends, catch up on work, or simply enjoy
							a moment of solitude with your favorite brew.
						</p>
						<p>
							So come on in, take a seat, and let us transport you to a world of
							flavor, aroma, and relaxation. Brew Haven – where every cup is a
							journey worth savoring.
						</p>
					</div>
				</Reveal>

				<Reveal>
					<Carousel
						className=""
						opts={{
							align: "start",
						}}>
						<CarouselContent>
							{["Cafe_1.jpg", "Cafe_2.jpg", "Cafe_3.jpg", "Cafe_4.jpg"].map(
								(image, index) => {
									return (
										<CarouselItem
											key={index}
											className="md:basis-1/2 lg:basis-1/3">
											<Image
												src={`/${image}`}
												alt={`Cafe Image ${index + 1}`}
												width={768}
												height={512}
											/>
										</CarouselItem>
									);
								}
							)}
						</CarouselContent>
						<CarouselPrevious className="bg-black" />
						<CarouselNext className="bg-black" />
					</Carousel>
				</Reveal>
			</section>

			<section id="Menu" className="min-h-screen bg-[#a0845e]">
				<Reveal>
					<h1 className="w-full text-center">What we have to offer</h1>
				</Reveal>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
					{[
						{
							image: "Mocha.jpg",
							title: "Mocha",
							description:
								"Rich, decadent, and indulgent, our mochas are a chocolate lover’s dream.",
							type: "Coffee",
							price: "$4.99",
						},
						{
							image: "Latte.jpg",
							title: "Latte",
							description:
								"Smooth, creamy, and comforting, our lattes are a delightful treat for the senses.",
							type: "Coffee",
							price: "$3.99",
						},
						{
							image: "Cappuccino.jpg",
							title: "Cold Brew",
							description:
								"Chilled to perfection, our cold brew is a refreshing way to beat the heat.",
							type: "Coffee",
							price: "$5.99",
						},
						{
							image: "Cheese_Cake.jpg",
							title: "Cheese Cake",
							description:
								"Rich, creamy, and decadent, our cheesecake is a must-try.",
							type: "Dessert",
							price: "$6.99",
						},
						{
							image: "Cinnamon_Rolls.jpg",
							title: "Cinnamon Rolls",
							description:
								"Soft, fluffy, and bursting with cinnamon flavor, our cinnamon rolls are a sweet delight.",
							type: "Pastry",
							price: "$2.99",
						},
						{
							image: "Danish_Pastries.jpg",
							title: "Danish Pastries",
							description:
								"Light, flaky, and filled with fruit or cream, our Danish pastries are a delicious treat.",
							type: "Pastry",
							price: "$3.99",
						},
					].map((item, index) => {
						return (
							<Reveal key={index}>
								<motion.div
									whileHover={{ scale: 1.03 }}
									transition={{ ease: "easeInOut", type: "spring" }}
									className="flex flex-col gap-5 justify-center items-center bg-[#D2B48C] p-5 rounded-3xl">
									<Image
										src={`/${item.image}`}
										alt={item.title}
										width={312}
										height={624}
										className="rounded-3xl"
									/>
									<h2 className="text-center font-bold text-2xl">
										{item.title}
									</h2>
									<p className="text-[#f3f3f3]">{item.description}</p>
									<div className="flex gap-8">
										<Badge variant="outline">{item.type}</Badge>
										<Badge variant="secondary">{item.price}</Badge>
									</div>
								</motion.div>
							</Reveal>
						);
					})}
				</div>
			</section>

			<section id="Contact" className="bg-[#c8aa83]">
				<Reveal>
					<h1>Contact Us</h1>
				</Reveal>

				<div className="flex flex-col gap-5">
					<Reveal>
						<p>
							For inquiries, reservations, or feedback, please feel free to
							reach out to us via phone, email, or social media. We look forward
							to hearing from you!
						</p>
					</Reveal>
					<Reveal>
						<p>
							Phone: (123) 456-7890
							<br />
							Address: 1234 Coffee Street, Cityville, USA
						</p>
					</Reveal>
				</div>
			</section>
		</>
	);
}
