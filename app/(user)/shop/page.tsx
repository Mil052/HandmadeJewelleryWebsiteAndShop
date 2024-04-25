// import { getPageOfProductsData, getNumberOfProductsInDB } from '@/app/_utilities/dbRequests/dbRequests';
import ProductList from './_components/ProductList/ProductsList';
import Pagination from './_components/Pagination/Pagination';
import CategoriesBar from './_components/CategoriesBar/CategoriesBar';
import { getProductsSlice } from '@/app/_utilities/dbRequests/dbRequests';
import styles from './page.module.css';


export default async function Shop({searchParams}: {
  searchParams: { [key: string]: string | undefined }}) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const category = searchParams.category;
    const productsSliceData = await getProductsSlice(page, 4, category);
    

    return (
      <main className={styles.main}>
        <div className={styles.categoriesBar}>
          <CategoriesBar activeCategory={category}/>
        </div>
        <div className={styles.products}>
          <ProductList page={page} category={category} initialProductsSliceData={productsSliceData}/>
        </div>
        <hr className={styles.separatorLine}/>
        <div className={styles.pagination}>
          <Pagination numberOfPages={productsSliceData.numberOfPages} activePage={page} />
        </div>
      </main>
    )
}