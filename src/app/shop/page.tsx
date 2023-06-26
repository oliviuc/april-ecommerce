import ProductItem from "@/components/ProductItem";
import Image from "next/image";
import Link from "next/link";
import ShopContent from "@/components/ShopContent";

interface pageProps {
	
}

export default function page({} : pageProps) {
	return (
		<>
			<div className="w-full h-[80vh]">
				<div className="flex w-full h-full relative">
					<Image src="/images/shop.jpg" alt="shop background" fill={true} quality={100} priority className="object-cover"/>
					<div className="h-full pl-44 flex flex-col gap-4 justify-center relative pt-24 tracking-widest">
						<h1 className="text-7xl font-extrabold text-accent">Shop</h1>
						<div className="flex gap-4 text-primaryDarker font-extrabold text-sm">
							<Link href="/" className="hover:text-theme duration-200 ease-in-out">HOME</Link>
							/
							<span className="text-accent underline underline-offset-2">SHOP</span>
						</div>
					</div>
				</div>
			</div>
			<ShopContent />
		</>
	)
}