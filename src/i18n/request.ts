import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
	// Разрешаем Promise от cookies()
	const cookieStore = await cookies();
	
	// Получаем язык из cookie (или используем 'en' по умолчанию)
	const locale = cookieStore.get('locale')?.value || 'en';
	
	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default
	};
});
