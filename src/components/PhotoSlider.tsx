import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { useTranslations } from 'next-intl'


export default function PhotoSlider() {
	const t = useTranslations()
	return (
		<section id='gallery' className="w-full min-h-max bg-[#DADEDF] flex flex-col pb-20 pt-10 justify-center items-center">
			<h2 className="mx-auto pb-10 text-4xl tracking-widest text-[#333333]">{t('gallery')}</h2>
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
							<img src="/IMG_3312.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3313.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 ">
							<img src="/IMG_3314.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3315.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3325.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3327.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3332.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3343.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 ">
							<img src="/IMG_3344.JPG" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3347.JPG" />
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
