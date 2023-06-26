"use client"
import ProductItem from "@/components/ProductItem";
import { useState } from "react";
import { products } from "@/data/products";

interface ShopContentProps {
	
}

interface stateProps {
	isFilterActive?: boolean
	itemCount?: number
	sortBy?: string
	filterByCategory?: string
	filterByColor?: string
	filterByPrice?: { start: number, end: number } 
	filterBySize?: string
}

export default function ShopContent({} : ShopContentProps) {
	const [state, setState] = useState({
		isFilterActive: false,
		itemCount: 20,
		sortBy: "Default"
	} as stateProps);

	function updateState(newState: stateProps) {
		setState((prevState) => ({
			...prevState,
			...newState
		}));
	}

	function renderProducts() {
		return products.map(product => <ProductItem key={product.id} id={product.id} />)
	}

	return <>
		<div className="flex w-full px-6 py-12 gap-8 lg:px-24">
			<aside className="hidden flex-col gap-12 w-80 xl:flex">
				<div>
					<h4 className="mb-6 text-2xl font-extrabold text-accent">Search Products</h4>
					<input type="text" placeholder="Search products..." className="text-primaryAccent w-full h-10 bg-primary px-4 text-sm border border-transparent focus:border-theme duration-200" />
				</div>
				<div>
					<h4 className="mb-6 text-2xl font-extrabold text-accent">Categories</h4>
					<div className="flex flex-col">
						<button className="w-full text-left py-2 text-primaryDarker font-extrabold tracking-widest hover:text-accent duration-200">KID (7)</button>
						<button className="w-full text-left py-2 text-primaryDarker font-extrabold tracking-widest hover:text-accent duration-200">MAN (20)</button>
						<button className="w-full text-left py-2 text-primaryDarker font-extrabold tracking-widest hover:text-accent duration-200">TRENDS (6)</button>
						<button className="w-full text-left py-2 text-primaryDarker font-extrabold tracking-widest hover:text-accent duration-200">WOMAN (27)</button>
					</div>
				</div>
				<div>
					<h4 className="mb-6 text-2xl font-extrabold text-accent">Color</h4>
					<div className="flex gap-4">
						<button className="w-6 h-6 text-transparent hover:text-secondary duration-200 flex justify-center items-center bg-black" title="Black"><i className="fa-solid fa-check"></i></button>
						<button className="w-6 h-6 text-transparent hover:text-secondary duration-200 flex justify-center items-center bg-blue-500" title="Blue"><i className="fa-solid fa-check"></i></button>
						<button className="w-6 h-6 text-transparent hover:text-secondary duration-200 flex justify-center items-center bg-gray-400" title="Gray"><i className="fa-solid fa-check"></i></button>
						<button className="w-6 h-6 text-transparent hover:text-secondary duration-200 flex justify-center items-center bg-green-500" title="Green"><i className="fa-solid fa-check"></i></button>
						<button className="w-6 h-6 text-transparent hover:text-secondary duration-200 flex justify-center items-center bg-pink-500" title="Pink"><i className="fa-solid fa-check"></i></button>
						<button className="w-6 h-6 text-transparent hover:text-secondary duration-200 flex justify-center items-center bg-red-500" title="Red"><i className="fa-solid fa-check"></i></button>
					</div>
				</div>
				<div>
					<h4 className="mb-6 text-2xl font-extrabold text-accent">Filter by price</h4>
					<div className="flex flex-col">
						<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">All</button>
						<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">$0-$20</button>
						<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">$20-$40</button>
						<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">$40-$60</button>
						<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">$60+</button>
					</div>
				</div>
				<div>
					<h4 className="mb-6 text-2xl font-extrabold text-accent">Size</h4>
					<div className="flex flex-col gap-1">
						<button className="w-full text-left text-primaryDarker hover:text-theme duration-200">Extra Small (XS)</button>
						<button className="w-full text-left text-primaryDarker hover:text-theme duration-200">Small (S)</button>
						<button className="w-full text-left text-primaryDarker hover:text-theme duration-200">Medium (M)</button>
						<button className="w-full text-left text-primaryDarker hover:text-theme duration-200">Large (L)</button>
						<button className="w-full text-left text-primaryDarker hover:text-theme duration-200">Extra Large (XL)</button>
					</div>
				</div>
			</aside>
			<div className="flex flex-col flex-1">
				<div className="flex flex-col md:flex-row md:justify-between min-h-12 gap-4 md:items-center mb-4">
					<div className="flex justify-start">
						<p className="text-primaryDarker font-bold">Showing <span className="text-accent">1-20</span> of <span className="text-accent">53 results</span></p>
					</div>
					<div className="flex gap-4 justify-end">
						<button className="flex gap-2 items-center text-primaryDarker hover:text-accent duration-200" onClick={() => {updateState({isFilterActive: !state.isFilterActive})}}>
							<span className="font-extrabold">Filter</span>
							<i className="fa-thin fa-sliders text-sm"></i>
						</button>
						<select onChange={(e) => updateState({itemCount: Number(e.target.value)})} defaultValue="20" className="outline-none h-10 px-2 bg-primary border border-transparent focus:border-primaryDarker text-sm">
							<option value="20">20 items</option>
							<option value="25">25 items</option>
							<option value="30">30 items</option>
							<option value="35">35 items</option>
							<option value="40">40 items</option>
						</select>
						<select className="outline-none h-10 px-2 bg-primary border border-transparent focus:border-primaryDarker text-sm">
							<option value="default">Default</option>
							<option value="price-low-to-high">Price: Low to High</option>
							<option value="price-high-to-low">Price: High to Low</option>
						</select>
					</div>
				</div>
				<div className={`grid grid-rows-[0fr] ${state.isFilterActive ? "grid-expand" : ""} overflow-hidden duration-500`}>
					<div className="overflow-hidden">
						<div className="grid grid-cols-2 gap-8 sm:gap-0 sm:grid-cols-4 justify-between mb-12 overflow-hidden">
							<div>
								<h4 className="mb-6 text-2xl font-extrabold text-accent">Price Filter</h4>
								<div className="flex flex-col">
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">All</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">$0-$20</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">$20-$40</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">$40-$60</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">$60+</button>
								</div>
							</div>
							<div>
								<h4 className="mb-6 text-2xl font-extrabold text-accent">Categories</h4>
								<div className="flex flex-col">
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">All Category</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Kid (7)</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Man (20)</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Trends (6)</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Woman (27)</button>
								</div>
							</div>
							<div>
								<h4 className="mb-6 text-2xl font-extrabold text-accent">Colors</h4>
								<div className="flex flex-col">
									<button className="flex gap-1 items-center text-primaryDarker hover:text-theme duration-200 text-left py-1">
										<span className="flex w-4 h-2 rounded-full bg-black"></span>
										<span>Black (2)</span>
									</button>
									<button className="flex gap-1 items-center text-primaryDarker hover:text-theme duration-200 text-left py-1">
										<span className="flex w-4 h-2 rounded-full bg-blue-500"></span>
										<span>Blue (1)</span>
									</button>
									<button className="flex gap-1 items-center text-primaryDarker hover:text-theme duration-200 text-left py-1">
										<span className="flex w-4 h-2 rounded-full bg-gray-400"></span>
										<span>Gray (4)</span>
									</button>
									<button className="flex gap-1 items-center text-primaryDarker hover:text-theme duration-200 text-left py-1">
										<span className="flex w-4 h-2 rounded-full bg-green-500"></span>
										<span>Green (1)</span>
									</button>
									<button className="flex gap-1 items-center text-primaryDarker hover:text-theme duration-200 text-left py-1">
										<span className="flex w-4 h-2 rounded-full bg-pink-500"></span>
										<span>Pink (3)</span>
									</button>
									<button className="flex gap-1 items-center text-primaryDarker hover:text-theme duration-200 text-left py-1">
										<span className="flex w-4 h-2 rounded-full bg-red-500"></span>
										<span>Red (3)</span>
									</button>
								</div>
							</div>
							<div>
								<h4 className="mb-6 text-2xl font-extrabold text-accent">Sizes</h4>
								<div className="flex flex-col">
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Extra Small (XS)</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Small (S)</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Medium (M)</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Large (L)</button>
									<button className="text-primaryDarker hover:text-theme duration-200 text-left py-1">Extra Large (XL)</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<main className="flex-1">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
						{/* {for (let i = 0; i < state.items; i++) (<ProductItem id={89} />)} */}
						{/* {[89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89].map((product, i) => <ProductItem key={i} id={product} />)}; */}
						{renderProducts()}
					</div>
				</main>
			</div>
		</div>
	</>
}