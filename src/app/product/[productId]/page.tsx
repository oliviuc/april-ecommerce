import ProductItem from "@/components/ProductItem"
import { products } from "@/data/products"
import Image from "next/image"
import Link from "next/link"

interface Params {
	productId: number
}

interface pageProps {
	params: Params
}

export default function Product({params} : pageProps) {
	const product = products.find(product => product.id == params.productId);

	return <>
		{!product ? "" : <>
		<main className="pt-44 px-6 flex justify-center">
			<div className="w-full max-w-6xl">
				<div>
					<div className="flex gap-2 text-primaryDarker mb-16">
						<Link href="/" className="text-sm tracking-widest text-primaryDarker font-extrabold hover:text-theme duration-200 ease-in-out">HOME</Link>
						/
						<Link href="/" className="text-sm tracking-widest text-primaryDarker font-extrabold hover:text-theme duration-200 ease-in-out">SHOP</Link>
						/
						<span className="text-sm tracking-widest text-accent font-extrabold uppercase underline underline-offset-4">{product.name}</span>
					</div>
				</div>
				<div className="flex gap-8 pb-24 border-b border-primaryLight">
					<div className="flex flex-col gap-2 w-full max-w-[470px]">
						<div className="w-full aspect-[3/4] bg-primary relative">
							<Image
								className='object-cover'
								src={`/images/products/product-${product.id}-1.jpg`}
								alt={product.name}
								fill={true}
								unoptimized={true}
								quality={100}
								priority
							/>
						</div>
						<div className="grid grid-cols-5 gap-2">
							<div className="aspect-square bg-primary relative">
								<Image
									className='object-cover'
									src={`/images/products/product-${product.id}-1.jpg`}
									alt={product.name}
									fill={true}
								/>
							</div>
							<div className="aspect-square bg-primary relative">
								<Image
									className='object-cover'
									src={`/images/products/product-${product.id}-1.jpg`}
									alt={product.name}
									fill={true}
								/>
							</div>
							<div className="aspect-square bg-primary relative">
								<Image
									className='object-cover'
									src={`/images/products/product-${product.id}-1.jpg`}
									alt={product.name}
									fill={true}
								/>
							</div>
							<div className="aspect-square bg-primary relative">
								<Image
									className='object-cover'
									src={`/images/products/product-${product.id}-1.jpg`}
									alt={product.name}
									fill={true}
								/>
							</div>
							<div className="aspect-square bg-primary relative">
								<Image
									className='object-cover'
									src={`/images/products/product-${product.id}-1.jpg`}
									alt={product.name}
									fill={true}
								/>
							</div>
						</div>
					</div>
					<div className="flex-1 flex flex-col gap-4">
						<div>
							<h1 className="text-4xl text-primaryAccent mt-8 mb-2">{product.name}</h1>
							<span className="font-extrabold text-accent text-lg mb-4">${product.price.toFixed(2)}</span>
							<p className="text-primaryAccent leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quasi sequi necessitatibus minima atque aspernatur nemo. Praesentium eius accusantium, temporibus ab repellendus quisquam ut iusto et quos officiis non commodi?</p>
						</div>
						<div className="py-4 border-t border-b border-primaryLight flex flex-col gap-4">
							{product.colors.length > 0 && <div className="flex items-center w-4/5 justify-between">
								<span className="text-primaryAccent font-bold text-sm tracking-widest">COLOR</span>
								<select name="color" className="w-72 h-10 bg-primary text-primaryAccent px-4 border border-primary outline-none focus:border-primaryDarker">
									{product.colors.map(color => <option key={color} value={color}>{color}</option>)}
								</select>
							</div>}
							<div className="flex items-center w-4/5 justify-between">
								<span className="text-primaryAccent font-bold text-sm tracking-widest">SIZE</span>
								<select name="size" className="w-72 h-10 bg-primary text-primaryAccent px-4 border border-primary outline-none focus:border-primaryDarker">
									{product.sizes.map(size => <option key={size} value={size}>{size}</option>)}
								</select>
							</div>
							<div>
								<span className="text-lg font-extrabold text-accent">${product.price.toFixed(2)}</span>
							</div>
							<div className="flex gap-4">
								<div className="h-12 flex border border-transparent bg-primary">
									<button className="w-8 h-full flex justify-center items-center text-primaryAccent hover:text-theme duration-200 ease-in-out">
										<i className="fa-solid fa-minus"></i>
									</button>
									<input type="number" min={0} max={100} defaultValue={1} className="text-center text-accent font-bold appearance-none" />
									<button className="w-8 h-full flex justify-center items-center text-primaryAccent hover:text-theme duration-200 ease-in-out">
										<i className="fa-solid fa-plus"></i>
									</button>
								</div>
								<button className="h-12 px-4 bg-accent border border-primaryAccent hover:bg-transparent hover:text-primaryAccent tracking-wide duration-200 ease-in-out text-primary text-sm font-extrabold">ADD TO CART</button>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-sm font-bold text-primaryAccent">CATEGORIES: {product.categories.map(category => <span key={category} className="ml-4 font-normal">{category},</span>)}</p>
							<p className="text-sm font-bold text-primaryAccent">TAGS: {product.tags.map(tag => <span key={tag} className="ml-4 font-normal">{tag},</span>)}</p>
							<p className="text-sm font-bold text-primaryAccent">SHARE: <span className="ml-4 font-normal">N/A</span></p>
							<button className="w-fit h-12 px-4 bg-accent border border-primaryAccent hover:bg-transparent hover:text-primaryAccent tracking-wide duration-200 ease-in-out text-primary text-sm font-extrabold">ADD TO WISHLIST</button>
						</div>
					</div>
				</div>
			</div>
		</main>
		<section className="w-full px-6 flex justify-center">
			<div className="w-full max-w-6xl py-24 border-b border-primaryLight flex justify-center">
				<div className="max-w-4xl">
					<div className="flex flex-col">
						<div className="flex flex-wrap gap-y-8 justify-between mb-24">
							<button className="text-4xl text-accent hover:text-accent font-extrabold duration-300 ease-in-out">Description</button>
							<button className="text-4xl text-primaryLight hover:text-accent font-extrabold duration-300 ease-in-out">Additional Information</button>
							<button className="text-4xl text-primaryLight hover:text-accent font-extrabold duration-300 ease-in-out">Reviews (0)</button>
						</div>
						<div className="w-full px-6">
							<p className="text-accent">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="w-full px-6 flex justify-center">
			<div className="w-full max-w-6xl pt-12 pb-24">
				<h2 className="text-3xl font-extrabold text-accent text-center mb-12">Related Products</h2>
				<div className="flex gap-8">
					<ProductItem id={product.id} />
					<ProductItem id={product.id} />
					<ProductItem id={product.id} />
					<ProductItem id={product.id} />
				</div>
			</div>
		</section>
		</>
		}
	</>
}