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
					<CarouselContent className="-ml-2 md:-ml-4">
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3306.JPG" alt="ATV adventure in Budva through scenic trails" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3307.JPG" alt="Exploring off-road paths on an ATV near Budva" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3308.JPG" alt="ATV ride overlooking the stunning landscapes of Budva" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3312.JPG" alt="Taking a break during the Budva ATV tour" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3313.JPG" alt="Riding ATVs through rocky terrain in Budva" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3314.JPG" alt="Adventuring through nature trails on an ATV in Budva" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3315.JPG" alt="Breathtaking views captured during the ATV tour in Budva" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3325.JPG" alt="ATV riders enjoying the journey in Budva's wilderness" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3327.JPG" alt="Group of ATVs navigating challenging paths in Budva" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3332.JPG" alt="Exploring Budva's rugged trails on an ATV ride" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3343.JPG" alt="Adventurous ATV trip through Budva's hills" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3344.JPG" alt="Capturing the essence of an ATV adventure in Budva" />
						</CarouselItem>
						<CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<img src="/IMG_3347.JPG" alt="End of a thrilling ATV ride in Budva" />
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
