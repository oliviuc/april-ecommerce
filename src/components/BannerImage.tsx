import Image from 'next/image'
import Link from 'next/link'

interface BannerImageProps {
	src: string,
	alt: string
}

export default function BannerImage({src, alt} : BannerImageProps) {
	return <div className='group w-full aspect-[72/96] relative sliderHover'>
	<div className='bg-primary w-full h-full'>
		<Image
			className='object-cover group-hover:scale-110 duration-500 ease-in-out'
			src={src}
			alt={alt}
			fill={true}
		/>
	</div>
	<div className='absolute bottom-16 left-1/2 -translate-x-1/2 w-full flex justify-center'>
		<Link href="/shop" className='px-10 py-4 bg-secondary border border-secondary font-bold text-sm text-accent hover:bg-transparent hover:text-secondary ease-in-out duration-200'>SHOP NOW</Link>
	</div>
</div>
}