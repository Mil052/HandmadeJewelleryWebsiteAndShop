import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer () {

	return (
		<div className={styles.footer}>
			<div className={styles.logo}>
				<h3>MIRU</h3>
				<h4>LITTLE THINGS</h4>
			</div>
			<div className={styles.media}>
				<a href='https://www.facebook.com' className={styles.mediaLink}>
					<svg viewBox="0 0 512 512" fill="black" xmlns="http://www.w3.org/2000/svg">
						<path d="M449.446 0C483.971 0 512 28.03 512 62.554V449.446C512 483.97 483.97 512 449.446 512H342.978V319.085H409.578L422.25 236.464H342.978V182.847C342.978 160.244 354.051 138.211 389.558 138.211H425.6V67.871C425.6 67.871 392.89 62.289 361.618 62.289C296.33 62.289 253.658 101.858 253.658 173.493V236.464H181.085V319.085H253.658V512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0L449.446 0Z"/>
					</svg>
				</a>
				<a href='https://twitter.com' className={styles.mediaLink}>
					<svg viewBox="0 0 512 512" fill="black" xmlns="http://www.w3.org/2000/svg">
						<path d="M259.579 226.475L165.102 94.2793H114.712L231.745 258.024L246.477 278.623L346.65 418.901H397.04L274.248 247.074L259.579 226.475Z"/>
						<path d="M468.871 0.363037H43.1292C19.5094 0.363037 0.363281 19.5091 0.363281 43.129V468.871C0.363281 492.491 19.5094 511.637 43.1292 511.637H468.871C492.491 511.637 511.637 492.491 511.637 468.871V43.129C511.637 19.5091 492.491 0.363037 468.871 0.363037ZM331.189 441.918L229.804 297.529L102.884 441.918H70.0824L215.258 276.807L70.0824 70.0822H180.812L276.794 206.777L397.056 70.0822H429.855L291.417 227.546L441.918 441.918H331.189Z"/>
					</svg>
				</a>
				<a href='https://www.instagram.com' className={styles.mediaLink}>
					<svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M449.446 0C483.971 0 512 28.03 512 62.554V449.446C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0L449.446 0ZM256 81C208.473 81 202.513 81.201 183.848 82.053C165.221 82.903 152.5 85.861 141.368 90.188C129.86 94.66 120.101 100.644 110.372 110.372C100.643 120.101 94.659 129.861 90.187 141.368C85.861 152.5 82.903 165.221 82.052 183.848C81.201 202.513 81 208.473 81 256C81 303.527 81.201 309.487 82.052 328.152C82.903 346.779 85.861 359.5 90.187 370.632C94.659 382.139 100.643 391.899 110.372 401.628C120.101 411.357 129.86 417.341 141.368 421.813C152.5 426.139 165.221 429.097 183.848 429.947C202.513 430.799 208.473 431 256 431C303.527 431 309.487 430.799 328.152 429.947C346.779 429.097 359.5 426.139 370.632 421.813C382.139 417.341 391.899 411.357 401.628 401.628C411.357 391.899 417.341 382.139 421.813 370.632C426.139 359.5 429.097 346.779 429.947 328.152C430.799 309.487 431 303.527 431 256C431 208.473 430.799 202.513 429.947 183.848C429.097 165.221 426.139 152.5 421.813 141.368C417.341 129.861 411.357 120.101 401.628 110.372C391.899 100.644 382.139 94.66 370.632 90.188C359.5 85.861 346.779 82.903 328.152 82.053C309.487 81.201 303.527 81 256 81ZM256 112.532C302.727 112.532 308.262 112.71 326.715 113.552C343.777 114.331 353.043 117.182 359.21 119.577C367.379 122.752 373.208 126.545 379.332 132.668C385.456 138.792 389.248 144.622 392.423 152.79C394.819 158.957 397.67 168.223 398.448 185.285C399.29 203.738 399.469 209.273 399.469 256C399.469 302.727 399.29 308.262 398.448 326.715C397.67 343.777 394.819 353.043 392.423 359.21C389.248 367.379 385.456 373.208 379.332 379.332C373.208 385.456 367.379 389.248 359.21 392.423C353.043 394.819 343.777 397.67 326.715 398.448C308.265 399.29 302.73 399.469 256 399.469C209.27 399.469 203.736 399.29 185.285 398.448C168.223 397.67 158.957 394.819 152.79 392.423C144.621 389.248 138.792 385.456 132.668 379.332C126.544 373.208 122.751 367.379 119.577 359.21C117.181 353.043 114.33 343.777 113.551 326.715C112.709 308.262 112.531 302.727 112.531 256C112.531 209.273 112.709 203.738 113.551 185.285C114.33 168.223 117.181 158.957 119.577 152.79C122.751 144.622 126.544 138.792 132.668 132.668C138.792 126.545 144.621 122.752 152.79 119.577C158.957 117.182 168.223 114.331 185.285 113.552C203.738 112.71 209.273 112.532 256 112.532ZM256 166.135C206.369 166.135 166.135 206.369 166.135 256C166.135 305.631 206.369 345.865 256 345.865C305.631 345.865 345.865 305.631 345.865 256C345.865 206.369 305.631 166.135 256 166.135ZM256 314.333C223.783 314.333 197.667 288.217 197.667 256C197.667 223.783 223.783 197.667 256 197.667C288.217 197.667 314.333 223.783 314.333 256C314.333 288.217 288.217 314.333 256 314.333ZM370.416 162.585C370.416 174.183 361.013 183.584 349.415 183.584C337.818 183.584 328.416 174.183 328.416 162.585C328.416 150.987 337.818 141.585 349.415 141.585C361.013 141.585 370.416 150.987 370.416 162.585Z" fill="black"/>
					</svg>
				</a>
			</div>
		</div>
	)

}

// You can insert any CSS rules, but you should add them in object style:  <path style={{fillRule:'evenodd;', fill:'#74a4c7;'}} d="M59.188,21.5c-..." transform="translate(0,952.36218)" /> this works for React

// style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" 