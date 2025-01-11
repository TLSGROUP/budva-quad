import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Footer () {
	const t = useTranslations()
	return (
		<footer
			className=' bg-[url(/wave.svg)] bg-no-repeat  bg-bottom bg-cover pt-10 pb-10 bg-[#DADEDF] text-xl text-white '>
			
			<div className='text-center mx-auto'>
				<h2
					className='tracking-widest text-[#333333] text-4xl mb-10'>{t('contacts')}</h2>
				<span className='tracking-widest text-[#333333] text-3xl'>Budva Quad Adventures</span>
			</div>
			<div
				className='flex flex-col md:flex-row justify-between  mx-auto w-full  rounded-2xl p-10 items-center   max-w-screen-2xl h-auto font-geologica '>
				<Image src='/1.svg' alt='logo' width={200} height={200} />
				<div className='flex flex-col gap-4 md:flex-row md:gap-5'>
					<a
						href='https://wa.me/38268322923?text=Hello%2C%20I%20am%20interested%20in%20your%20services'
						className='flex justify-center items-center gap-x-3 font-geologica bg-green-600 font-bold rounded-3xl p-2
            shadow-[0px_4px_0px_#00a900]
    hover:translate-y-1
    hover:shadow-[0px_2px_0px_#92b212]
    active:translate-y-2
    active:shadow-none
    transition-all
    duration-300
            '>WhatsApp
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40"
						     height="40" viewBox="0 0 40 40">
							<path fill="#f2faff"
							      d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205C1.663,9.76,9.926,1.5,20.078,1.5	c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028c-0.005,10.153-8.268,18.414-18.42,18.414	c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"></path>
							<path fill="#788b9c"
							      d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927	c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19l2.226-8.131	l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1	C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302	h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"></path>
							<path fill="#79ba7e"
							      d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"></path>
							<path fill="#fff"
							      d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787s-1.012-2.437-1.387-3.336c-0.364-0.876-0.736-0.757-1.012-0.771	c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563s-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649	c0.224,0.3,3.169,4.839,7.68,6.786c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178	c0.864-0.129,2.66-1.087,3.034-2.136c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"></path>
						</svg>
					</a>
					<a
						href='https://www.instagram.com/budva_quad_adventures/profilecard/?igsh=bnhrb3A2MjhqZ3po'
						className='flex justify-center items-center gap-x-3 font-bold  bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#962fbf] font-geologica rounded-3xl p-2
            shadow-[0px_4px_0px_#962fbf]
    hover:translate-y-1
    hover:shadow-[0px_2px_0px_#d62976]
    active:translate-y-2
    active:shadow-none
    transition-all
    duration-300
            '>Instagram
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40"
						     height="40" viewBox="0 0 48 48">
							<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
							                cx="19.38" cy="42.035" r="44.899"
							                gradientUnits="userSpaceOnUse">
								<stop offset="0" stopColor="#fd5"></stop>
								<stop offset=".328" stopColor="#ff543f"></stop>
								<stop offset=".348" stopColor="#fc5245"></stop>
								<stop offset=".504" stopColor="#e64771"></stop>
								<stop offset=".643" stopColor="#d53e91"></stop>
								<stop offset=".761" stopColor="#cc39a4"></stop>
								<stop offset=".841" stopColor="#c837ab"></stop>
							</radialGradient>
							<path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
							      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
							<radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
							                cx="11.786" cy="5.54" r="29.813"
							                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
							                gradientUnits="userSpaceOnUse">
								<stop offset="0" stopColor="#4168c9"></stop>
								<stop offset=".999" stopColor="#4168c9"
								      stopOpacity="0"></stop>
							</radialGradient>
							<path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
							      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
							<path fill="#fff"
							      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
							<circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
							<path fill="#fff"
							      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
						</svg>
					</a>
				</div>
			</div>
			<p className="text-sm font-geologica text-center">
				Copyright &copy; 2024 by <span
				className="text-white font-geologica font-semibold">BudvaQuadTour</span>.
				All rights
				reserved.
			</p>
		</footer>
	)
}