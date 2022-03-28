export const placeholderImage = ({ size = 150, bgColor = 'd8dee9', textColor = '000', text = '' }): string =>
	`https://via.placeholder.com/${size}/${bgColor}/${textColor}.png?text=${text}`
