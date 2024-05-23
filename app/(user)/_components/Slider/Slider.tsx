'use client'

import { useState, useEffect, useRef } from "react";
import { SliderData } from "@/app/_utilities/dbRequests/dbRequests";
import SliderCard from "./SliderCard/SliderCard";
import styles from "./Slider.module.css";

export default function Slider ({ items, slots }:{items: SliderData[], slots: number}) {

    const [[currentItem, direction], setCurrentItem] = useState([0, 1]);
    const intervalRef = useRef<ReturnType<typeof setInterval>>();

    const previousSlide = () => setCurrentItem (([stateCurrentItem, stateDirection]) => [(numberOfItems + stateCurrentItem - 1) % numberOfItems, -1]);
    const nextSlide = () => setCurrentItem (([stateCurrentItem, stateDirection]) => [(stateCurrentItem + 1) % numberOfItems, 1]);

    useEffect(() => {
      intervalRef.current = setInterval(nextSlide, 6000);
      return () => clearInterval(intervalRef.current);
    }, []);

    const numberOfItems = items.length;
    const maxSlots = numberOfItems < slots ? numberOfItems : slots;
    const displayItems: SliderData[] = [];

    const firstItem = direction > 0 ? (numberOfItems + currentItem - 1) % numberOfItems : currentItem;
    displayItems.push(items[firstItem]);
    for (let i = 1; i <= maxSlots; i++) {
      displayItems.push(items[(firstItem + i) % numberOfItems]);
    }

    const firstElementClasses = styles.item + ' ' + (direction < 0 ? styles.slideIn : styles.slideOut);

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
            {displayItems.map((item, index) => {
                return (
                    <li key={item.id} className={index === 0 ? firstElementClasses : styles.item}>
                        <SliderCard item={item}/>
                    </li>
                )
            })}
        </ul>
        <div className={styles.controls}>
          <button onClick={previousSlideHandler} className={styles.prevButton} disabled={numberOfItems === 1}> </button>
          <button onClick={nextSlideHandler} className={styles.nextButton} disabled={numberOfItems === 1}> </button>
        </div>
      </div>
    )
}
