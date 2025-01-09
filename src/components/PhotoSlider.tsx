import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'


export default function PhotoSlider() {
	return (
		<section id='gallery' className="w-full min-h-max bg-[#DADEDF] flex flex-col pb-20 pt-10 justify-center items-center">
			<h2 className="mx-auto pb-10 text-4xl tracking-widest text-[#333333]">Gallery</h2>
			<div className="w-full max-w-screen-xl overflow-hidden px-2 sm:px-5">
				<Carousel opts={{
					align: "start",
					loop: true,
				}}>
					<CarouselContent className="-ml-2 md:-ml-4 ">
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 ">
							<img src="/IMG_3306.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3307.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3308.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3309.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3311.JPG" />
						</CarouselItem>
					</CarouselContent>
					{/* Кнопки переключения карусели */}
					<CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
					<CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
				</Carousel>
			</div>
		</section>
	);
}
