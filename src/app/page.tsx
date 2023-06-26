import Image from 'next/image'
import ProductItem from '@/components/ProductItem'
import BannerImage from '@/components/BannerImage'
import { featuredManProductIds, featuredWomanProductIds } from '@/data/products'
import WomanFeatured from '@/components/WomanFeatured'
import ManFeatured from '@/components/ManFeatured'
import Link from 'next/link'

export default function Home() {
  return (
	<>
		<div className='relative w-full h-screen bg-primary mb-24 flex items-end justify-center px-12'>
			<div className='absolute w-full h-full top-0 left-0 flex items-end justify-center'>
				<div className='w-full h-[90%] max-h-[768px] max-w-7xl flex justify-center md:justify-end items-end'>
					<div className='opacity-50 w-full max-w-2xl aspect-square md:opacity-100 md:w-min md:h-full md:max-w-6xl relative'>
						<Image src="/images/slider_01.jpg" alt="slider image" fill={true} priority className='object-contain self-end' />
					</div>
				</div>
			</div>
			<div className='w-full h-full max-w-5xl flex relative z-10 justify-center md:justify-start'>
				<div className='flex flex-col items-center justify-center gap-8'>
					<p className='text-primaryAccent tracking-[0.4em] text-xs font-bold'>#APRILSTORE</p>
					<h2 className='text-accent font-extrabold text-6xl text-center'>Simplify <br />Everything.</h2>
					<Link href="/shop" className='px-8 py-2 bg-accent text-secondary text-xs border border-accent tracking-wider mt-8 hover:bg-transparent hover:text-accent duration-300 ease-in-out font-bold'>EXPLORE NOW</Link>
				</div>
			</div>
		</div>
		<main className='px-4 min-[400px]:px-6 md:px-24 flex flex-col gap-24 mb-24'>
			<section>
				<WomanFeatured />
			</section>
			<section>
				<div className='relative w-full aspect-[4/1] min-h-[20rem] bg-primary'>
					<div className='absolute w-full h-full top-0 left-0 overflow-hidden'>
						<Image src="/images/background-02.jpg" alt="background 02" fill={true} className='object-cover scale-110'/>
					</div>
				</div>
			</section>
			<section>
				<ManFeatured />
			</section>
			<section>
				<div className='group relative w-full aspect-[1718/430] min-h-[20rem] bg-primary sliderHover'>
					<Image
						className='object-cover group-hover:scale-110 duration-500 ease-in-out'
						src="/images/background-03.jpg"
						alt="background-03"
						fill={true}
					/>
					<div className='z-10 absolute w-full h-full top-0 left-0 flex items-center justify-center'>
						<div className='p-4 border border-secondary'>
							<div className='bg-secondary px-8 py-10 flex flex-col gap-6 items-center'>
								<p className='text-center spacing tracking-[2rem] mr-[-2rem] text-6xl font-extrabold text-accent'>SALE</p>
								<h5 className='tracking-[0.5rem] font-bold text-accent mr-[-0.5rem]'>#APRILSTORE</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	</>
  )
}
