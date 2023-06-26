"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavProps {
	hasBorder?: boolean
}

export default function Nav({hasBorder}: NavProps) {

	const [navState, setNavState] = useState({
		scrollY: 0,
		isVisible: true,
		width: 0,
	});

	useEffect(() => {
		window.addEventListener("resize", adjustNavOnResize);
		window.addEventListener("scroll", navScrollBehavior);
		return () => {
			window.removeEventListener("resize", adjustNavOnResize);
			window.removeEventListener("scroll", navScrollBehavior);
		}
	});

	function adjustNavOnResize() {
		setNavState((prevState) => ({
			...prevState,
			width: window.innerWidth
		}));
	}

	function navScrollBehavior() {
		const currentScroll = window.scrollY;
		let isVisible = true;
		if (currentScroll > navState.scrollY) isVisible = false;
		setNavState((prevState) => ({
			...prevState,
			scrollY: currentScroll,
			isVisible
		}));
	}

	function navHeightClass() {
		if (window.innerWidth <= 1024) return "h-[80px]";
		return window.scrollY > 0 ? "h-[80px]" : "h-[120px]";
	}

	function navVisibleClass() {
		if (window.innerWidth <= 1024) return "translate-y-0";
		return navState.isVisible ? "translate-y-0" : "-translate-y-full";
	}

	function navBackgroundClass() {
		if (!navState.isVisible || window.innerWidth <= 1024) return "bg-secondary";
		return window.scrollY == 0 ? "" : "bg-secondary shadow-md";
	}

	return <header className={`w-full ${navHeightClass()} absolute lg:fixed top-0 left-0 z-50 ${navBackgroundClass()} ${navVisibleClass()} duration-500 ease-in-out`}>
		<nav className={`w-full h-full px-6 md:px-24 flex items-center justify-between`}>
			<button className="group/navMenu flex flex-col gap-0.5 md:hidden">
				<div className="w-8 h-2 border border-accent group-hover/navMenu:bg-theme duration-200"></div>
				<div className="w-8 h-2 border border-accent group-hover/navMenu:bg-theme duration-200"></div>
				<div className="w-8 h-2 border border-accent group-hover/navMenu:bg-theme duration-200"></div>
			</button>
			<div className='flex gap-12 lg:gap-24 items-center'>
				<Link href="/" className='flex gap-2 flex-1 md:flex-auto'>
					<Image src="/images/logo.png" alt="logo" width={100} height={0} priority />
				</Link>
				<ul className='hidden md:flex gap-6 lg:gap-12'>
					<li>
						<Link href="/" className='group/link flex flex-col gap-0.5 items-center'>
							<span className='text-primaryAccent font-bold text-sm tracking-widest group-hover/link:text-accent duration-300 ease-in-out'>HOME</span>
							<div className='h-[2px] bg-primaryAccent w-[125%] duration-300 ease-in-out scale-x-0 group-hover/link:scale-x-100 origin-[10%]'></div>
						</Link>
					</li>
					<li>
						<Link href="/shop" className='group/link flex flex-col gap-0.5 items-center'>
							<span className='text-primaryAccent font-bold text-sm tracking-widest group-hover/link:text-accent duration-300 ease-in-out'>SHOP</span>
							<div className='h-[2px] bg-primaryAccent w-[125%] duration-300 ease-in-out scale-x-0 group-hover/link:scale-x-100 origin-[10%]'></div>
						</Link>
					</li>
				</ul>
			</div>
			<div className='flex gap-8 items-center'>
				<button className='hidden md:flex text-accent text-lg p-2'>
					<i className="fa-regular fa-magnifying-glass"></i>
				</button>
				<Link href="/wishlist" className='text-accent text-2xl flex'>
					<i className="fa-light fa-heart hover:text-theme cursor-pointer transition-colors text-2xl"></i>
					
				</Link>
				<Link href="/cart" className='group/cart text-accent text-2xl flex'>
					<i className="group-hover/cart:text-theme fa-sharp fa-light fa-cart-shopping -scale-x-100 duration-200 ease-in-out"></i>
					<div className="group-hover/cart:text-secondary group-hover/cart:bg-theme text-secondary text-sm top-0 right-0 w-6 h-6 bg-accent rounded-full -translate-y-1/2 duration-200 ease-in-out flex items-center justify-center">0</div>
				</Link>
			</div>
		</nav>
	</header>
}