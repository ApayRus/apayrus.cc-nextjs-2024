import { promises as fs } from 'fs'
import remarkFrontmatter from 'remark-frontmatter'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import remarkParseFrontmatter from 'remark-parse-frontmatter'
import { unified } from 'unified'

interface GetFolderFilesProps {
	path: string
	parser?: (fileContent: string) => any
}

export async function getFolderFiles({ path, parser }: GetFolderFilesProps) {
	const fullPath = process.cwd() + path
	const filenames = await fs.readdir(fullPath)
	const files = await Promise.all(
		filenames.map(filename => {
			return fs
				.readFile(`${fullPath}/${filename}`, 'utf-8')
				.then(fileContent => {
					return parser ? parser(fileContent) : fileContent
				})
		})
	)
	return files
}

export async function parseMarkdown(markdown: string) {
	return unified()
		.use(remarkParse)
		.use(remarkHtml)
		.use(remarkFrontmatter)
		.use(remarkParseFrontmatter)
		.process(markdown)
}

export async function getFolderMarkdown(path: string) {
	return getFolderFiles({ path, parser: parseMarkdown })
}

export async function getFileContent(path: string) {
	const fullPath = process.cwd() + path
	return fs.readFile(fullPath, 'utf-8')
}
