import { getFolderMarkdown } from '@/utils/filesystem'
import Slider from '../Slider/Slider'
import styles from './Plans.module.css'
import Image from 'next/image'

const Plans = async () => {
	const plans = await getFolderMarkdown('/content/plans')

	return (
		<div className={styles.container}>
			{plans
				.sort((a, b) => {
					const orderA = a?.data?.frontmatter?.order
					const orderB = b?.data?.frontmatter?.order
					return orderA - orderB
				})
				.map(plan => {
					const {
						data: {
							frontmatter: { title = '', images = [], price = 0, order }
						},
						value: __html
					} = plan
					const orderText = `Здравствуйте. Хочу заказать приложение по тарифу ${title} (${price})`
					const orderInLinkMessage = encodeURI(orderText)
					return (
						<div
							className={`${styles.item} gradientBackground`}
							key={`plan-${order}`}
						>
							<h3>{title}</h3>
							<h4 className={styles.price}>{price}</h4>
							<Slider
								content={images.map((elem: string) => (
									<Image
										key={elem}
										src={`/${elem}`}
										alt=''
										width={289 / 1.5}
										height={584 / 1.5}
									/>
								))}
							/>
							<div
								dangerouslySetInnerHTML={{ __html }}
								className={styles.content}
							/>
							<a
								target='_blank'
								href={`https://wa.me/+79887890224?text=${orderInLinkMessage}`}
							>
								<div className={styles.orderButtonContainer}>
									<div className={styles.orderButton}>Заказать</div>
								</div>
							</a>
						</div>
					)
				})}
		</div>
	)
}

export default Plans
