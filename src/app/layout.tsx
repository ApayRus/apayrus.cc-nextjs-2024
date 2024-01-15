import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['300'], subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
	title: 'ApayRus.cc',
	description: 'Образовательные, языковые приложения'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
