import styles from './Header.module.css'

import React from 'react'

function Header({name}) {
	return (
		<header className={styles.header}>
			<h2 className='header__title'>{name}</h2>
		</header>
	)
}

export default Header