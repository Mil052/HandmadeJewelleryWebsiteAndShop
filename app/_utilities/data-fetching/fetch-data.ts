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
    image_path_02: string|null,
    image_path_03: string|null,
    image_alt: string,
    price: string,
}

async function fetchSliderDataFromDB () {
    const db = Database.getDatabase();
    const responseData = await db.query ('SELECT * FROM sliders');
    console.log(responseData);
    return responseData as SliderData[] | undefined;
}

export const getSliderData = unstable_cache(fetchSliderDataFromDB, ['slider-data'], {revalidate: 3600});

async function fetchNewsDataFromDB () {
    const db = Database.getDatabase();
    const responseData = await db.query ('SELECT * FROM news');
    console.log(responseData);
    if (responseData) {
        return responseData[0] as NewsData;
    } else {
        return responseData;
    }
}

export const getNewsData = unstable_cache(fetchNewsDataFromDB, ['news-data'], {revalidate: 3600});

async function fetchSelectedProductsDataFromDB () {
    const db = Database.getDatabase();
    const queryString = 'SELECT * FROM products AS p INNER JOIN selected_products AS s ON p.id = s.product_id';
    const responseData = await db.query (queryString);
    console.log(responseData);
    return responseData as ProductData[] | undefined;
}

export const getSelectedProductsData = unstable_cache(fetchSelectedProductsDataFromDB, ['selected-products-data'], {revalidate: 60});