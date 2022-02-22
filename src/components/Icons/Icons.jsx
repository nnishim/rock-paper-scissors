import styles from './Icons.module.css'
import rock from './img/fist.png'
import paper from './img/hand.png'
import scissors from './img/scissor.png'

import React from 'react'

function Icons(click) {
	return (
		<div className={styles.icons}>
			<div className="you">
				<h2>Вы</h2>
				<div onClick={click} className={styles.icon}>
					<img src={rock} alt="" />
				</div>
				<div onClick={click} className={styles.icon}>
					<img src={scissors} alt="" />
				</div>
				<div onClick={click} className={styles.icon}>
					<img src={paper} alt="" />
				</div>
			</div>
			<div className={styles.vs}>VS</div>
			<div className="computer">
				<div className={styles.bot}> ? </div>
			</div>
		</div>
	)
}

export default Icons