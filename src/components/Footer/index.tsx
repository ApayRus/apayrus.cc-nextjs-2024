import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.content}>
			<div className={styles.askQuestion}>{/* Об авторе */}</div>
			<div className={styles.askQuestion}>
				<div>Задать вопрос</div>
				<a target='_blank' href='https://wa.me/+79887890224'>
					<Image
						height={24}
						width={24}
						src='/images/social-media/whatsapp.svg'
						alt='whatsapp icon'
					/>
				</a>
				<a target='_blank' href='https://t.me/aparus'>
					<Image
						height={24}
						width={24}
						src='/images/social-media/telegram.svg'
						alt='telegram icon'
					/>
				</a>
			</div>
		</div>
	)
}

export default Footer
