import Image from "next/image";
import Link from "next/link";

interface FooterProps {
	
}

export default function Footer({} : FooterProps) {
	return <footer className='w-full min-h-[24rem] bg-primary flex justify-center'>
		<div className="w-full max-w-[1920px] gap-12 lg:gap-2 py-24 px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">

			<div className='lg:col-span-2'>
				<Image src="/images/logo.png" alt="logo" width={200} height={0} className='mb-16'/>
				<p className='tracking-widest text-primaryDarker font-bold'>©COPYRIGHT APRIL. <br /> ALL RIGHTS RESERVED</p>
			</div>
			<div>
				<h4 className='text-2xl font-extrabold text-accent mb-8'>About April</h4>
				<ul className='flex flex-col gap-2'>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>About Us</Link></li>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Offices</Link></li>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Work with us</Link></li>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Our policies</Link></li>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Affinity Card</Link></li>
				</ul>
			</div>
			<div>
				<h4 className='text-2xl font-extrabold text-accent mb-8'>Shopguide</h4>
				<ul className='flex flex-col gap-2'>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Payments</Link></li>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Returns</Link></li>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Gift Card</Link></li>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Guest purchase</Link></li>
					<li><Link href="/" className='text-primaryDarker border-b border-transparent hover:border-accent hover:text-accent duration-200 ease-in-out tracking-wider'>Terms & Conditions</Link></li>
				</ul>
			</div>
			<div className='flex flex-col lg:col-span-2'>
				<p className='text-primaryAccent font-bold text-sm tracking-widest mb-2'>SUBSCRIBE TO OUR NEWSLETTER</p>
				<div className='mb-8 w-full flex'>
					<input type="text" placeholder='Enter your email' className='w-full h-12 px-4 border border-transparent bg-secondary focus:border-theme text-accent text-sm placeholder:text-sm placeholder:italic' />
					<button className='h-full aspect-square flex justify-center items-center bg-secondary hover:bg-theme hover:text-secondary duration-300 ease-in-out'>
						<i className="fa-sharp fa-light fa-envelope"></i>
					</button>
				</div>
				<div className='flex flex-wrap gap-4'>
					<Link href="https://facebook.com/" target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full border border-primaryLight text-md text-primaryAccent hover:bg-accent hover:border-accent hover:text-secondary duration-300 ease-in-out'>
						<i className="fa-brands fa-facebook-f"></i>
					</Link>
					<Link href="https://instagram.com/" target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full border border-primaryLight text-md text-primaryAccent hover:bg-accent hover:border-accent hover:text-secondary duration-300 ease-in-out'>
						<i className="fa-brands fa-instagram"></i>
					</Link>
					<Link href="https://twitter.com/" target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full border border-primaryLight text-md text-primaryAccent hover:bg-accent hover:border-accent hover:text-secondary duration-300 ease-in-out'>
						<i className="fa-brands fa-twitter"></i>
					</Link>
					<Link href="https://youtube.com/" target="_blank" className='flex items-center justify-center w-10 h-10 rounded-full border border-primaryLight text-md text-primaryAccent hover:bg-accent hover:border-accent hover:text-secondary duration-300 ease-in-out'>
						<i className="fa-brands fa-youtube"></i>
					</Link>
				</div>
			</div>
		</div>
	</footer>
}