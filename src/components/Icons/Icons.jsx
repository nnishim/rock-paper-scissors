import styles from './Icons.module.css'

import React from 'react'
import Icon from './Icon/Icon'

function Icons({click, bot, variants}) {
	return (
		<div className={styles.icons}>
			<div className="you">
				<h2>Вы</h2>
				{
					variants.map(item => {
						return <Icon key={item} click={() => click(item)} type={item}/>
					})
				}
			</div>
			<div className={styles.vs}>VS</div>
			<div className="computer">
				<Icon click={null} type={bot ? bot: "?"}/>
			</div>
		</div>
	)
}

export default Icons