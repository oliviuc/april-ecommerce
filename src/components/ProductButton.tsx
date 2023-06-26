import Link from 'next/link';

interface ProductButtonProps {
	icon: string,
	text: string,
}

export default function ProductButton({icon, text}: ProductButtonProps) {
	return (
		<div className='group/button relative rounded-full'>
			<Link href="/" className='flex items-center justify-center rounded-full bg-primaryAccent text w-12 h-12 text-primary hover:bg-accent duration-300 ease-in-out'>
				<i className={icon}></i>
			</Link>
			<div className='text-primary group-hover/button:opacity-100 group-hover/button:-translate-y-[150%] pointer-events-none absolute top-0 left-1/2 -translate-y-[120%] opacity-0 -translate-x-1/2 duration-200 ease-in-out'>
				<p className='text-xs whitespace-nowrap p-2 bg-accent'>{text}</p>
				<i className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-accent fa-sharp fa-solid fa-sort-down"></i>
			</div>
		</div>
	)
}