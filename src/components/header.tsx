'use client'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header () {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	
	
	
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};
	const t = useTranslations()
	
		return (
			<header
				className='flex text-2xl z-20 fixed w-full max-w-full  justify-between sm:justify-around items-center bg-gradient-to-b from-black/60 to-[#11111000] p-3'>
				<Image src='/1.svg' alt='logo' width={60} height={30} />
				<nav className='hidden sm:flex  text-white gap-x-3 '>
					<Link href='/' id='home'
					      className='hover:text-yellow-500 transition-all duration-300'>{t('home')}</Link>
					<Link href='#price' id='Price'
					      className='hover:text-yellow-500 transition-all duration-300'>{t('price')}</Link>
					<Link href='#gallery' id='Gallery'
					      className='hover:text-yellow-500 transition-all duration-300'>{t('gallery')}</Link>
					<Link href='#about' id='About'
					      className='hover:text-yellow-500 transition-all duration-300'>{t('about')}</Link>
				</nav>
				<LanguageSwitcher />
				
				{/*Бургер-меню */}
				<div className='flex md:hidden'>
					<button onClick={toggleMenu} className=" text-white">
						{isMenuOpen ? (
							<svg className="w-6 h-6" fill="none" stroke="currentColor"
							     viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
								      d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg className="w-6 h-6" fill="none" stroke="currentColor"
							     viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
								      d="M4 6h16M4 12h16m-7 6h7" />
							</svg>
						)}
					</button>
				</div>
				
				{/* Выпадающее меню бургер-меню */}
				{isMenuOpen && (
					<div
						className="absolute top-20 left-0 w-full flex flex-col  items-center bg-gradient-to-b from-[#11111000] to-black/60 bg-opacity-85 text-white py-4">
						<ul className='space-y-2  text-center'>
							<li><Link href='/' id='home'
							          className='hover:text-yellow-500 transition-all duration-300'>{t('home')}</Link></li>
							<li><Link href='#price' id='Price'
							          className='hover:text-yellow-500 transition-all duration-300'>{t('price')}</Link></li>
							<li><Link href='#gallery' id='Gallery'
							          className='hover:text-yellow-500 transition-all duration-300'>{t('gallery')}</Link>
							</li>
							<li><Link href='#about' id='About'
							          className='hover:text-yellow-500 transition-all duration-300'>{t('about')}</Link>
							</li>
						</ul>
					</div>
				)}
			</header>
		)
}
