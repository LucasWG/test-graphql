import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import styles from './styles.module.scss'

const SwitchTheme: React.FC = () => {
	const { theme, setTheme, resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			{resolvedTheme === 'dark' ? <FaSun size={20} color="#fff" /> : <FaMoon size={20} />}
		</button>
	)
}

export default SwitchTheme
