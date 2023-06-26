"use client"

import { featuredWomanProductIds } from "@/data/products";
import ProductItem from '@/components/ProductItem'
import BannerImage from '@/components/BannerImage'
import { useState } from "react";

interface WomanFeaturedProps {
	
}

interface SectionProps {
	all: string,
	shirt: string,
	sweatshirt: string,
	jeans: string
}

const section = {
	all: "All",
	shirt: "Shirt",
	sweatshirt: "Sweatshirt",
	jeans: "Jeans"
} as SectionProps

export default function WomanFeatured({} : WomanFeaturedProps) {

	const [sectionState, setSectionState] = useState(section.all);

	function renderProducts() {
		if (sectionState == section.all) return featuredWomanProductIds.all.map(id => <ProductItem key={id} id={id} />);
		else if (sectionState == section.shirt) return featuredWomanProductIds.shirt.map(id => <ProductItem key={id} id={id} />);
		else if (sectionState == section.sweatshirt) return featuredWomanProductIds.sweatshirt.map(id => <ProductItem key={id} id={id} />);
		else if (sectionState == section.jeans) return featuredWomanProductIds.jeans.map(id => <ProductItem key={id} id={id} />);
	}

	return <>
		<div className='flex flex-col gap-24 lg:flex-row'>
			<div className='w-full lg:w-1/3 flex flex-col items-center pt-16'>
				<h4 className='w-fit mb-12 text-center text-7xl font-extrabold border-b-4 border-accent text-accent'>#forher</h4>
				<BannerImage src='/images/banner-01.jpg' alt="banner-01"/>
			</div>
			<div className='w-full lg:w-2/3 flex flex-col'>
				<div className='mb-8'>
					<ul className='flex gap-12 gap-y-4 flex-wrap'>
						<li className={`text-sm font-bold tracking-wider border-b-2 ${sectionState == section.all ? "text-accent border-accent" : "text-primaryDarker border-transparent"} hover:border-accent hover:text-accent duration-200`}><button onClick={() => {setSectionState(section.all)}}>ALL</button></li>
						<li className={`text-sm font-bold tracking-wider border-b-2 ${sectionState == section.shirt ? "text-accent border-accent" : "text-primaryDarker border-transparent"} hover:border-accent hover:text-accent duration-200`}><button onClick={() => {setSectionState(section.shirt)}}>SHIRT</button></li>
						<li className={`text-sm font-bold tracking-wider border-b-2 ${sectionState == section.sweatshirt ? "text-accent border-accent" : "text-primaryDarker border-transparent"} hover:border-accent hover:text-accent duration-200`}><button onClick={() => {setSectionState(section.sweatshirt)}}>SWEATSHIRT</button></li>
						<li className={`text-sm font-bold tracking-wider border-b-2 ${sectionState == section.jeans ? "text-accent border-accent" : "text-primaryDarker border-transparent"} hover:border-accent hover:text-accent duration-200`}><button onClick={() => {setSectionState(section.jeans)}}>JEANS</button></li>
					</ul>
				</div>
				<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:grid-cols-3 gap-8'>
					{renderProducts()}
				</div>
			</div>
		</div>
	</>
}