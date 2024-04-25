'use client'

import { motion, useAnimate, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react"; 
import { ProductData } from '@/app/_utilities/dbRequests/dbRequests';
import styles from './SelectedProducts.module.css';
import ProductDigestCard from './ProductDigestCard/ProductDigestCard';

export default function SelectedProducts ({ products }: {products: ProductData[]}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [[leftDragConstraint, rightDragConstraint], setDragConstraints ]  = useState([0, 0]);
    const [productCardWidth, setProductCardWidth] = useState(0);
    const [cardMargin, setCardMargin] = useState(32);

    const x = useMotionValue(0);
    const [scope, animate] = useAnimate();

    useEffect(() => {
			const containerElement = containerRef.current;
			const listElement = containerElement?.firstElementChild;
			const productCard = listElement?.firstElementChild;

			if (containerElement) {
				const containerWidth = containerElement.clientWidth;
				const listWidth = listElement!.clientWidth;
				const cardWidth = productCard!.clientWidth;
				
				setDragConstraints([(containerWidth - listWidth), 0]);
				setProductCardWidth(cardWidth);

				const resizeObserver = new ResizeObserver(() => {
						const recalculatedLeftDragConstraint = containerElement.clientWidth - listElement!.clientWidth;
						setDragConstraints([recalculatedLeftDragConstraint, 0]);
						setProductCardWidth(productCard!.clientWidth);
				});
		
				resizeObserver.observe(containerElement);

				return () => resizeObserver.disconnect();
			}
    }, []);

    const nextHandler = () => {
        const actualXPosition = x.get();
        const cardSlotWidth = productCardWidth + cardMargin;

        const displacement = cardSlotWidth + (actualXPosition % cardSlotWidth);
        let newXPosition = actualXPosition - displacement;

        if (newXPosition <= leftDragConstraint) newXPosition = leftDragConstraint;

        animate(x, newXPosition, { duration: 0.5 })
    }

    const previousHandler = () => {
        const actualXPosition = x.get();
        const cardSlotWidth = productCardWidth + cardMargin;

        let displacement = Math.abs(actualXPosition % cardSlotWidth) || cardSlotWidth;
        let newXPosition = actualXPosition + displacement;

        if (newXPosition >= rightDragConstraint) newXPosition = rightDragConstraint;
            
        animate(x, newXPosition, { duration: 0.5 })
    }

    return (
      <div className={styles.container} ref={containerRef}>
					<motion.ul
						className={styles.productList}
						drag='x'
						transition={{ type: "spring" }}
						dragConstraints={{ left: leftDragConstraint, right: rightDragConstraint }}
						style={{ x }}>
							{products.map((product, index) => {
								return (
									<li className={styles.productListItem} key={index}>
											<ProductDigestCard product={product} />
									</li>
								)
								})
							}
					</motion.ul>
					<button onClick={previousHandler} className={styles.buttonPrev}>
						<svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.5 1.5L1.5 24L22.5 46.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
					<button onClick={nextHandler} className={styles.buttonNext}>
						<svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.5 1.5L22.5 24L1.5 46.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
      </div>
    )
}

// To handle transforms with button clik event I use useAnimate() to animate MotionValues directly
// https://www.framer.com/motion/motionvalue/
// https://www.framer.com/motion/use-animate/