import SocialIcons from '../SocialMedia'
import styles from './Header.module.css'
import Image from 'next/image'

const Header = () => {
	const title = 'ApayRus.cc'
	const subtitle = 'языковые приложения'

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.logoAndTitles}>
					<div className={styles.logo}>
						<Image
							height={70}
							width={70}
							src='/images/logo.png'
							alt='site logo'
						/>
					</div>
					<div className={styles.titles}>
						<h1 className={styles.title}>{title}</h1>
						<h2 className={styles.subtitle}>{subtitle}</h2>
					</div>
				</div>
				<div className={styles.socialMedias}>
					<SocialIcons />
				</div>
			</div>
		</div>
	)
}

export default Header
