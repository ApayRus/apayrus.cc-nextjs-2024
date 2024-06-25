import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Head from 'next/head'

const roboto = Roboto({ weight: ['300'], subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
	title: 'ApayRus.cc',
	description: 'языковые приложения'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<Head>
				<meta name='yandex-verification' content='6b138411f9b0b5ee' />
			</Head>

			<body className={roboto.className}>{children}</body>
			<GoogleAnalytics gaId='G-Z4CR0LH6DP' />
		</html>
	)
}
