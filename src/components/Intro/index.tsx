import { getFileContent, parseMarkdown } from '@/utils/filesystem'
import styles from './Intro.module.css'

const Intro = async () => {
	const text = await getFileContent('/content/intro.md')
	const { value: __html } = await parseMarkdown(text)
	return <div className={styles.content} dangerouslySetInnerHTML={{ __html }} />
}

export default Intro
