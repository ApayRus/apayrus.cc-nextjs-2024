import React from 'react'
import styles from './Social.module.css'
import Image from 'next/image'
import { getFileContent } from '@/utils/filesystem'
import { SocialMediaLink } from './types'

const SocialIcons: React.FC = async () => {
	const links = JSON.parse(
		await getFileContent('/content/socialMedia/links.json')
	) as SocialMediaLink[]
	return (
		<div className={styles.container}>
			{links.map((elem, index) => {
				const { title, path } = elem
				return (
					<a
						key={title}
						className={styles.iconContainer}
						href={path}
						title={title}
						target='_blank'
					>
						<Image
							width={24}
							height={24}
							src={`/images/social-media/${title}.svg`}
							alt={title}
						/>
					</a>
				)
			})}
		</div>
	)
}

export default SocialIcons
