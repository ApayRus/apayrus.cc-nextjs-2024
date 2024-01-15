import { getFolderMarkdown } from '@/utils/filesystem'
import styles from './Feedback.module.css'
import Image from 'next/image'

const Feedback = async () => {
	const feedbacks = await getFolderMarkdown('/content/feedback')

	return (
		<div className={styles.container}>
			{feedbacks
				.sort((a, b) => {
					const orderA = a?.data?.frontmatter?.order
					const orderB = b?.data?.frontmatter?.order
					return orderA - orderB
				})
				.map(plan => {
					const {
						data: {
							//@ts-ignore
							frontmatter: {
								name = '',
								description = '',
								image = '',
								link = ''
							}
						},
						value: __html
					} = plan
					return (
						<div className={`${styles.item} gradientBackground`} key={image}>
							<div className={styles.imageAndTitles}>
								<Image
									className={styles.avatar}
									src={image}
									alt={name}
									width={70}
									height={70}
								/>
								<div className={styles.titles}>
									<h3>{name}</h3>
									<h4>{description}</h4>
								</div>
							</div>

							<div dangerouslySetInnerHTML={{ __html }} />
							<a target='_blank' href={link}>
								<div className={styles.visitButtonContainer}>
									<div className={styles.visitButton}>Посмотреть 👀</div>
								</div>
							</a>
						</div>
					)
				})}
		</div>
	)
}

export default Feedback
