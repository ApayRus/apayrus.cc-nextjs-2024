'use client'
import React, { useState } from 'react'
import styles from './Slider.module.css'

interface Props {
	content: React.ReactNode[]
	endless?: boolean
}

const Slider = ({ content, endless = true }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const lastIndex = content.length - 1

	const goPrev = () => {
		setCurrentIndex(oldIndex => {
			if (oldIndex === 0) {
				if (endless) {
					return lastIndex
				} else {
					return oldIndex
				}
			} else {
				return oldIndex - 1
			}
		})
	}

	const goNext = () => {
		setCurrentIndex(oldIndex => {
			if (oldIndex === lastIndex) {
				if (endless) {
					return 0
				} else {
					return oldIndex
				}
			} else {
				return oldIndex + 1
			}
		})
	}

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.cardContainer}>
				<div className={styles.card}>{content[currentIndex]}</div>
			</div>
			<div className={styles.slideSwitcher}>
				<div onClick={goPrev} className={styles.goPrev}>
					{'<'}
				</div>
				<div className={styles.numbers}>
					{currentIndex + 1} / {content.length}
				</div>
				<div onClick={goNext} className={styles.goNext}>
					{'>'}
				</div>
			</div>
		</div>
	)
}

export default Slider
