// "use client"

import Image from 'next/image'

import { products } from '@/data/products'
import ProductButton from '@/components/ProductButton'
import Link from 'next/link';

interface ProductItemProps {
	id: number
}

export default function ProductItem({id} : ProductItemProps) {
	const product = products.find(product => product.id === id);
	
	if (product == null) return <></>;

	return <div className='group relative w-full aspect-[3/4] anim-appear'>
		<div className='bg-primary w-full aspect-[calc(3/4)] mb-4 relative'>
			<Link href={`/product/${id}`} className='w-full h-full flex'>
				<Image
					className='object-cover'
					src={`/images/products/product-${id}-1.jpg`}
					alt={product.name}
					fill={true}
					quality={100}
				/>
				<Image
					className='object-cover opacity-0 group-hover:opacity-100 duration-500'
					src={`/images/products/product-${id}-2.jpg`}
					alt={product.name}
					fill={true}
					quality={100}
				/>
			</Link>
			<div className='group/wishlist absolute top-4 right-4 text-primaryAccent'>
				<i className="fa-light fa-heart hover:text-theme cursor-pointer transition-colors text-2xl"></i>
				<div className='group-hover/wishlist:opacity-100 group-hover/wishlist:translate-y-[130%] pointer-events-none absolute bottom-0 left-1/2 translate-y-[120%] opacity-0 -translate-x-1/2 duration-200 ease-in-out'>
					<p className='text-xs whitespace-nowrap p-2 bg-accent text-primary'>Add to <br/>Wishlist</p>
					<i className="absolute top-0 left-1/2 -translate-x-1/2 rotate-180 -translate-y-2 text-accent fa-sharp fa-solid fa-sort-down"></i>
				</div>
			</div>
			<div className='absolute left-0 bottom-0 w-full pb-4 flex gap-4 justify-center'>
				<div className='opacity-100 translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 min-[1025px]:opacity-0 duration-500 min-[1025px]:translate-y-4 delay-0'>
					<ProductButton icon="fa-light fa-magnifying-glass" text="View Product" />
				</div>
				<div className='opacity-100 translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 min-[1025px]:opacity-0 duration-500 min-[1025px]:translate-y-4 delay-100'>
					<ProductButton icon="fa-sharp fa-light fa-cart-shopping" text="Add to Cart" />
				</div>
				<div className='opacity-100 translate-y-0 group-hover:opacity-100 group-hover:translate-y-0 min-[1025px]:opacity-0 duration-500 min-[1025px]:translate-y-4 delay-200'>
					<ProductButton icon="fa-light fa-share" text="Share" />
				</div>			
			</div>
		</div>
		<div className='w-full flex flex-col items-center gap-2'>
			<Link href={`/product/${id}`} className='text-primaryAccent text-center hover:text-theme duration-300 ease-in-out'>{product.name}</Link>
			<div>
				<span className='text-accent font-extrabold text-sm'>${product.price.toFixed(2)}</span>
			</div>
		</div>
	</div>
}

