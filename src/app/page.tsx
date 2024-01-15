import Feedback from '@/components/Feedback'
import styles from './page.module.css'

import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Plans from '@/components/Plans'

export default async function Home() {
	return (
		<main className={styles.main}>
			<header>
				<Header />
			</header>

			<section className={`gradientBackground`}>
				<Intro />
			</section>
			<section className={styles.planes}>
				<h2>Тарифы</h2>
				<Plans />
			</section>
			<section className={styles.feedback}>
				<h2>Отзывы</h2>
				<Feedback />
			</section>
		</main>
	)
}
