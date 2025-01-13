import { useTranslations } from 'next-intl'
import React, { useRef } from 'react'

export default function Description () {
	
	const dialogRef3 = useRef<HTMLDialogElement | null>(null);
	
	const openDialog3 = () => {
		if (dialogRef3.current) {
			dialogRef3.current.showModal();
			document.body.classList.add("blurred");
		}
	};
	
	// Закрытие первого модального окна
	const closeDialog3 = () => {
		if (dialogRef3.current) {
			dialogRef3.current.close();
			document.body.classList.remove("blurred");
		}
	};
	
	const t = useTranslations()
	return (
		<section id='about'
		         className='flex bg-[#DADEDF] justify-center items-center min-h-max w-full pb-10 px-5 sm:px-5'>
			<div
				className=' flex flex-col text-white  bg-[#ECECE2] rounded-2xl shadow-xl shadow-[#cecb98]  max-w-screen-2xl'>
				<div className='flex flex-col px-5 py-10 sm:px-10'>
					<h2
						className='text-center mx-auto mb-10 text-3xl font-bold text-[#333333] tracking-widest'>{t('description')}</h2>
					<span className='font-geologica text-red-500'>{t('warningRules')}</span>
					<button
						onClick={openDialog3}
						type="button"
						className="bg-[#756C63] text-white text-2xl font-bold rounded-full p-4 mt-4 hover:bg-[#5E564D] shadow-[0px_4px_0px_#5E564D] hover:shadow-[0px_2px_0px_#5E564D] hover:translate-y-[2px] duration-200"
					>
						{t("btnRules")}
					</button>
					<dialog
						ref={dialogRef3}
						className=" rounded-3xl w-max  p-10 text-center  sm:mx-auto xs:w-full bg-[#FAF3E0] md:w-[900px]"
						style={{
							position: "fixed",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							margin: "0",
							boxShadow: "0px 5px 10px 6px rgba(236, 236, 226, 1)",
						}}
					>
						<div className="text-[#333]  ">
							<div className="flex flex-col text-[#666666]">
								<p className='text-xl tracking-wider font-geologica text-[#444444]'>{t('descriptionText')}</p>
								
								<button
									onClick={closeDialog3}
									type="button"
									className=" px-5 py-2 mx-auto w-auto mb-0 mt-5 text-2xl font-bold text-white bg-[#756C63] hover:bg-[#5E564D]  rounded-[30px]  shadow-[0px_2px_0px_0.5px_rgba(186, 159, 140, 1)] hover:translate-y-[2px] hover:shadow-lg focus:outline-none focus:ring-0  focus:ring-offset-0"
								>
									{t("btnTour")}
								</button>
							</div>
						</div>
					</dialog>
				</div>
			</div>
		</section>
	)
}