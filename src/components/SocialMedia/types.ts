type SocialMediaNames =
	| 'instagram'
	| 'telegram'
	| 'youtube'
	| 'habr'
	| 'twitter'
	| 'devto'
	| 'substack'
	| 'medium'

export interface SocialMediaLink {
	title: SocialMediaNames
	path: string
}
