'use client'

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header () {
	const [navigationOpen, setNavigationOpen] = useState(false);

	const toggleNavigation = () => setNavigationOpen(state => !state);
	const closeNavigation = () => {if (navigationOpen) setNavigationOpen(false)};

	return (
		<header className={styles.headerContainer}>
			<button type='button' className={styles.hamburgerButton} onClick={toggleNavigation}>
				{!navigationOpen &&
					<svg width="42" height="42" viewBox="0 0 42 42" fill="black" xmlns="http://www.w3.org/2000/svg">
						<rect width="42" height="6"/>
						<rect y="36" width="42" height="6"/>
						<rect y="18" width="42" height="6"/>
					</svg>
				}
				{navigationOpen &&
					<svg width="42" height="42" viewBox="0 0 42 42" fill="black" xmlns="http://www.w3.org/2000/svg">
						<rect x="33.728" y="37.9706" width="42" height="6" transform="rotate(-135 33.728 37.9706)"/>
						<rect x="4.02954" y="33.7279" width="42" height="6" transform="rotate(-45 4.02954 33.7279)"/>
					</svg>
				}
			</button>
			<div className={styles.logo}>
				<h3>MIRU</h3>
				<h4>LITTLE THINGS</h4>
			</div>
			<div className={styles.navigationContainer}>
				<nav className={styles.navigation + ' ' + (navigationOpen ? styles.navigationOpen : styles.navigationClose)}>
					<ul className={styles.navlinkList} onClick={closeNavigation}>
						<li>
							<Link href="/shop">SHOP</Link>
						</li>
						<li>
							<Link href="/about">ABOUT US</Link>
						</li>
						<li>
							<Link href="/contact">CONTACT</Link>
						</li>
						<li>
							<Link href="/terms">TERMS&CONDITIONS</Link>
						</li>
					</ul>
				</nav>
				<div
					className={styles.backdrop + ' ' + (navigationOpen ? styles.backdropOpen : styles.backdropClose)}
					onClick={closeNavigation}></div>
			</div>
			<div className={styles.navIcons} onClick={closeNavigation}>
				<Link href="/" className={styles.homeLink}>
					<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 20.8847V40C0 41.1046 0.895431 42 2 42H14C15.1046 42 16 41.1046 16 40V29C16 27.8954 16.8954 27 18 27H24C25.1046 27 26 27.8954 26 29V40C26 41.1046 26.8954 42 28 42H40C41.1046 42 42 41.1046 42 40V20.8284C42 20.298 41.7893 19.7893 41.4142 19.4142L23.3485 1.34847C22.5936 0.593576 21.3789 0.564671 20.5889 1.28281L0.654654 19.4049C0.237706 19.7839 0 20.3212 0 20.8847Z" fill="black"/>
					</svg>
				</Link>
				<Link href="/cart">
					<svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="1" y="11" width="32" height="32" rx="2" stroke="black" strokeWidth="2"/>
						<path d="M26 10C26 5.02944 21.9706 1 17 1C12.0294 1 8 5.02944 8 10" stroke="black" strokeWidth="2"/>
					</svg>
				</Link>
			</div>
		</header>
	)
}