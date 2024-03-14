'use client'

import { useState, useEffect, useRef } from "react";
import { SliderData } from "@/app/_utilities/data-fetching/fetch-data";
import SliderCard from "./SliderCard/SliderCard";
import styles from "./Slider.module.css";

export default function Slider ({ items, slots }:{items: SliderData[], slots: number}) {

    const [[allowSliding, numberOfItems], setAllowSliding] = useState([true, items.length]);
    const [[currentItem, direction], setCurrentItem] = useState([0, 1]);

    const intervalRef = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {
      const allowSliding = slots < numberOfItems;
      setAllowSliding([allowSliding, items.length]);
      if (allowSliding && !intervalRef.current) {
        intervalRef.current = setInterval(nextSlide, 6000);
      }
    }, [items, slots]);

    let dispalyItems: SliderData[] = [];

    if (allowSliding) { // select elements to dispaly
      const firstItem = direction > 0 ? (numberOfItems + currentItem - 1) % numberOfItems : currentItem;
      dispalyItems.push(items[firstItem]);
      for (let i = 1; i <= slots; i++) {
          dispalyItems.push(items[(firstItem + i) % numberOfItems]);
      }
    } else { // dispalay all elements and turn off sliding
      dispalyItems = [...items];
    }

    let firstElementClasses = styles.item;
    if (allowSliding) {
      firstElementClasses = firstElementClasses + ' ' + (direction < 0 ? styles.slideIn : styles.slideOut);
    }

    const previousSlide = () => setCurrentItem (([stateCurrentItem, stateDirection]) => [(numberOfItems + stateCurrentItem - 1) % numberOfItems, -1]);
    const nextSlide = () => setCurrentItem (([stateCurrentItem, stateDirection]) => [(stateCurrentItem + 1) % numberOfItems, 1]);

    const nextSlideHandler = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      nextSlide();
    }

    const previousSlideHandler = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      previousSlide();
    }

    return (
      <div className={styles.container}>
        <ul className={styles.list}>
            {dispalyItems.map((item, index) => {
                return (
                    <li key={item.id} className={index === 0 ? firstElementClasses : styles.item}>
                        <SliderCard item={item}/>
                    </li>
                )
            })}
        </ul>
        <div className={styles.controls}>
          <button onClick={previousSlideHandler} className={styles.prevButton} disabled={!allowSliding}> </button>
          <button onClick={nextSlideHandler} className={styles.nextButton} disabled={!allowSliding}> </button>
        </div>
      </div>
    )
}
