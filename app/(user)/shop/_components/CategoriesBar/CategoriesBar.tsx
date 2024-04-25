'use client'

import Link from "next/link";
import { useState } from "react";
import styles from './CategoriesBar.module.css';

export default function CategoriesBar({activeCategory}: {activeCategory?: string}) {
  const [CategoryListOpen, setCategoryListOpen] = useState(false);
  
  const generateLinkClasses = (category?: string) => {
    const linkClass: string[] = [styles.categoryOptionLink];
    if (!category) linkClass.push(styles.viewAll);
    if (category === activeCategory) linkClass.push(styles.activeLink);
    return linkClass.join(' ');
  }

  const toggleCategoryList = () => setCategoryListOpen((listOpen: boolean) => !listOpen);

  return (
    <div className={styles.container}>
      <Link href='/shop' replace className={generateLinkClasses()}>view all</Link>
      <div className={styles.categorySelect}>
        <div className={styles.categorySelectButton}>
          <label htmlFor="categoryOptions" className={styles.toggleCategoriesLabel + (activeCategory ? ` ${styles.activeLink}` : '') }>
            {activeCategory ?? 'select category'}
          </label>
          <input id="categoryOptions" type="button" className={styles.toggleCategoriesBtn} onClick={toggleCategoryList}/>
        </div>
        <div className={`${styles.listContainer} ${CategoryListOpen ? styles.listOpen : styles.listClose }`}>
          <ul className={styles.categoryList} onClick={()=>setCategoryListOpen(false)}>
            <li>
              <Link href='/shop?category=earrings' replace className={generateLinkClasses('earrings')}>earrings</Link>
            </li>
            <li>
              <Link href='/shop?category=necklace' replace className={generateLinkClasses('necklace')}>necklace</Link>
            </li>
            <li>
              <Link href='/shop?category=bracelet' replace className={generateLinkClasses('bracelet')}>bracelet</Link>
            </li>
            <li>
              <Link href='/shop?category=hairband' replace className={generateLinkClasses('hairband')}>hairband</Link>
            </li>
            <li>
              <Link href='/shop?category=hair-pin' replace className={generateLinkClasses('hair-pin')}>hair pin</Link>
            </li>
            <li>
              <Link href='/shop?category=other' replace className={generateLinkClasses('other')}>other</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}