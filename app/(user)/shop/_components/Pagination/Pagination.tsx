'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from './Pagination.module.css';

export default function Pagination ({numberOfPages, activePage} : {numberOfPages: number, activePage: number}) {
  const searchParams = useSearchParams();
  
  const createPageLink = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', page.toString())
    const isActive = (page === activePage);
    return (
      <li key={page} className={isActive ? styles.activePage : ""}>
        <Link href={{ pathname: '/shop', query: newSearchParams.toString() }}>{page}</Link>
      </li>
    )
  }

  const pageLinks: React.ReactNode[] = [];

  // 9 slots:  1 ... 3 4 5 6 7 ... 10
  // [firstPage, ..., 5 x middlePages, ..., lastPage ] 

  if (numberOfPages <= 9) { // display all
    for (let i = 1; i <= numberOfPages; i++) {
      const pageLink = createPageLink(i);
      pageLinks.push(pageLink);
    }
  } else { // display with breaks
    if (activePage < 6) {
      for (let i = 1; i <= 7; i++) {
        const pageLink = createPageLink(i);
        pageLinks.push(pageLink);
      }
      pageLinks.push(<span>...</span>);
      const lastPageLink = createPageLink(numberOfPages);
      pageLinks.push(lastPageLink);
    } else if (activePage > (numberOfPages - 5)) {
      const firstPageLink = createPageLink(1);
      pageLinks.push(firstPageLink);
      pageLinks.push(<span>...</span>);
      for (let i = (numberOfPages - 6); i <= numberOfPages; i++) {
        const pageLink = createPageLink(i);
        pageLinks.push(pageLink);
      }
    } else {
      const firstPageLink = createPageLink(1);
      pageLinks.push(firstPageLink);
      pageLinks.push(<span>...</span>);
      for (let i = (activePage - 2); i <= (activePage + 2); i++) {
        const pageLink = createPageLink(i);
        pageLinks.push(pageLink);
      }
      pageLinks.push(<span>...</span>);
      const lastPageLink = createPageLink(numberOfPages);
      pageLinks.push(lastPageLink);
    }
  }
  
  return (
    <ul className={styles.paginationList}>
      {pageLinks}
    </ul>
  )
}