interface CarouselProps {
	loop: boolean,
	items: number,
	margin: number,
	aspectRatio: string,
	autoplay: boolean,
	autoplaySpeed: number
}

export default function Carousel({} : CarouselProps) {
	return <div>Carousel</div>
}