import { useTranslations } from 'next-intl'
import React from 'react'

export default function Description () {
	const t = useTranslations()
	return (
		<section id='about'
		         className='flex bg-[#DADEDF] justify-center items-center min-h-screen w-full px-5 sm:px-5'>
			<div
				className=' flex flex-col  text-white  bg-[#FAF3E0] rounded-2xl shadow-xl shadow-[#cecb98]  max-w-screen-2xl'>
				<div className='px-5 py-10 sm:px-10'>
				<h2
					className='text-center mx-auto mb-10 text-3xl font-bold text-[#333333] tracking-widest'>{t('description')}</h2>
				<p
					className='text-xl tracking-wider font-geologica text-[#444444]'>{t('descriptionText')}</p>
				</div>
			</div>
		</section>
	)
}