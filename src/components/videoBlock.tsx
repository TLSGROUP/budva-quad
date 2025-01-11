import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

export default function BlockVideo () {
	const t = useTranslations()
	return (
		<section className='relative  min-h-screen w-full'>
			<video src='/bgVideo.MP4' autoPlay
			       loop
			       muted
			       playsInline
			       className=" absolute  w-full h-full object-cover min-h-screen inset-0  " />
			<div
				className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
			
			<div
				className="relative z-10 flex items-center  justify-center h-full min-h-screen max-w-screen-xl mx-auto ">
				<a
					href='https://wa.me/38268322923?text=Hello%2C%20I%20am%20interested%20in%20your%20services'
					className=" absolute flex gap-x-3 justify-center items-center sm:left-1 md:left-10 lg:left-10  bottom-36 text-white bg-gray-900/75 shadow-lg shadow-gray-900 p-5 rounded-3xl text-4xl tracking-widest font-bold hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400 transition-all duration-300">
					{t('contact')}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					     fill="currentColor" className="w-10 h-10 ml-5">
						<path fillRule="evenodd"
						      d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z"
						      clipRule="evenodd" />
						<path fillRule="evenodd"
						      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
						      clipRule="evenodd" />
					</svg>
				</a>
			</div>
			<Link href='#price'>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="absolute z-50 bg-gray-900/75 rounded-full p-3 bottom-10 left-1/2 transform -translate-x-1/2 text-white w-16 h-16 animate-bounce"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
					/>
				</svg>
			</Link>
		
		
		</section>
	
	)
}