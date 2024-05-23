import Database from '../database/database';
import { unstable_cache } from 'next/cache';

export type SliderData = {
    id: number,
    title: string,
    description: string,
    image_path: string,
    image_alt: string,
    link_path: string|null,
    link_text: string|null
}

export type NewsData = {
    id: number,
    title: string,
    subtitle: string,
    description: string,
    image_path: string,
    image_alt: string
}

export type ProductData = {
    id: number,
    category: string,
    status: 'available'|'unavailable',
    name: string,
    description: string,
    excerpt: string,
    image_path_01: string,
    image_path_02: string,
    image_path_03: string,
    image_alt: string,
    price: string,
}

export type ProductsSlice = {
    products: ProductData[] | undefined;
    page: number;
    numberOfPages: number;
    totalNumberOfProducts: number | undefined;
}

async function fetchSliderDataFromDB () {
    const db = Database.getDatabase();
    const responseData = await db.query ('SELECT * FROM sliders');
    return responseData as SliderData[] | undefined;
}

export const getSliderData = unstable_cache(fetchSliderDataFromDB, ['slider-data'], {revalidate: 1800});

async function fetchNewsDataFromDB () {
    const db = Database.getDatabase();
    const responseData = await db.query ('SELECT * FROM news');
    if (responseData) {
        return responseData[0] as NewsData;
    } else {
        return responseData;
    }
}

export const getNewsData = unstable_cache(fetchNewsDataFromDB, ['news-data'], {revalidate: 1800});

async function fetchSelectedProductsDataFromDB () {
    const db = Database.getDatabase();
    const queryString = 'SELECT * FROM products AS p INNER JOIN selected_products AS s ON p.id = s.product_id';
    const responseData = await db.query (queryString);
    return responseData as ProductData[] | undefined;
}

export const getSelectedProductsData = unstable_cache(fetchSelectedProductsDataFromDB, ['selected-products-data'], {revalidate: 15});

async function fetchPageOfProductsDataFromDB (numberOfItems: number, page: number, category?: string) {
    const db = Database.getDatabase();
    const filterByCategory = category ? `WHERE category = \'${category}\'` : '';
    const queryString = `
        SELECT * FROM products
        ${filterByCategory}
        ORDER BY id
        LIMIT ${numberOfItems}
        OFFSET ${numberOfItems * (page - 1)}`;
    const responseData = await db.query (queryString);
    return responseData as ProductData[] | undefined;
}

export const getPageOfProductsData = unstable_cache(fetchPageOfProductsDataFromDB, ['page-of-products-data'], {revalidate: 15});

async function fetchNumberOfProductsInDB (category?: string) {
    const filterByCategory = category ? `WHERE category = \'${category}\'` : '';
    const db = Database.getDatabase();
    const queryString = `SELECT COUNT(id) FROM products ${filterByCategory}`;
    const responseData = <[{count: string}] | undefined> await db.query (queryString);
    const numberOfProducts = responseData ? parseInt(responseData[0].count) : undefined;
    return numberOfProducts;
}

export const getNumberOfProductsInDB = unstable_cache(fetchNumberOfProductsInDB, ['number-of-products'], {revalidate: 15});

export async function getProductsSlice (page: number, numberOfProducts: number, category?: string) {
	const selectedProdutsData = await getPageOfProductsData(numberOfProducts, page, category);
	const totalNumberOfProducts = await getNumberOfProductsInDB(category);

    const numberOfPages = Math.ceil(totalNumberOfProducts! / numberOfProducts);

    const productsSliceData: ProductsSlice = {
		products: selectedProdutsData,
        page: page,
        numberOfPages: numberOfPages,
        totalNumberOfProducts: totalNumberOfProducts
	}
    
    return productsSliceData;
}

async function fetchProductDataFromDB (productID: number) {
    const db = Database.getDatabase();
    const queryString = `SELECT * FROM products WHERE id = ${productID}`;
    const responseData = await db.query(queryString);
    if (responseData) {
        return responseData[0] as ProductData;
    } else {
        return null;
    }
}

export const getProductData = unstable_cache(fetchProductDataFromDB , ['product-data'], {revalidate: 15});

