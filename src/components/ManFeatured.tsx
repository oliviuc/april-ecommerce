"use client"

import { featuredManProductIds, featuredWomanProductIds } from "@/data/products";
import ProductItem from '@/components/ProductItem'
import BannerImage from '@/components/BannerImage'
import { useState } from "react";

interface ManFeaturedProps {
	
}

const section = {
	all: "All",
	shoes: "Shoes",
	tShirts: "T-Shirts"
}

export default function ManFeatured({} : ManFeaturedProps) {

	const [sectionState, setSectionState] = useState(section.all);

	function renderProducts() {
		if (sectionState == section.all) return featuredManProductIds.all.map(id => <ProductItem key={id} id={id} />);
		else if (sectionState == section.shoes) return featuredManProductIds.shoes.map(id => <ProductItem key={id} id={id} />);
		else if (sectionState == section.tShirts) return featuredManProductIds.tShirts.map(id => <ProductItem key={id} id={id} />);
	}

	return <>
		<div className='flex flex-col gap-24 lg:flex-row-reverse'>
			<div className='w-full lg:w-1/3 flex flex-col items-center pt-16'>
				<h4 className='w-fit mb-12 text-center text-7xl font-extrabold border-b-4 border-accent text-accent'>#forhim</h4>
				<BannerImage src='/images/banner-02.jpg' alt="banner-02"/>
			</div>
			<div className='w-full lg:w-2/3 flex flex-col'>
				<div className='mb-8'>
					<ul className='flex gap-12 flex-wrap gap-y-4'>
						<li className={`text-sm font-bold tracking-wider border-b-2 ${sectionState == section.all ? "text-accent border-accent" : "text-primaryDarker border-transparent"} hover:border-accent hover:text-accent duration-200`}><button onClick={() => {setSectionState(section.all)}}>ALL</button></li>
						<li className={`text-sm font-bold tracking-wider border-b-2 ${sectionState == section.shoes ? "text-accent border-accent" : "text-primaryDarker border-transparent"} hover:border-accent hover:text-accent duration-200`}><button onClick={() => {setSectionState(section.shoes)}}>SHOES</button></li>
						<li className={`text-sm font-bold tracking-wider border-b-2 ${sectionState == section.tShirts ? "text-accent border-accent" : "text-primaryDarker border-transparent"} hover:border-accent hover:text-accent duration-200`}><button onClick={() => {setSectionState(section.tShirts)}}>T-SHIRTS</button></li>
					</ul>
				</div>
				<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:grid-cols-3 gap-8'>
					{renderProducts()}
				</div>
			</div>
		</div>
	</>
}