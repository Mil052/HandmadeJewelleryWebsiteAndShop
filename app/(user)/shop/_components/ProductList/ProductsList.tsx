'use client'
import ProductCard from "./ProductCard/ProductCard";
import { ProductsSlice } from "@/app/_utilities/dbRequests/dbRequests";
import { useQuery } from "@tanstack/react-query";
import { apiGetProductsSlice } from "@/app/_utilities/apiRequests/apiRequests";
import styles from "./ProductsList.module.css";

export default function ProductList ({page, category, initialProductsSliceData}: {
	page: number, category?: string, initialProductsSliceData: ProductsSlice}) {

		// https://nextjs.org/docs/app/building-your-application/caching#duration-3
		// Becouse of Rrouter Caching behaviour (~30s) I decided to use TanstackQUery
		//  for fetching actual data (caching set to 5s). Data from server component I use only as initialdata

		const {data: productsSliceData, isError, refetch} = useQuery(
			{	
				queryKey: ['products-page', (category ?? 'all'), page],
				queryFn: () => apiGetProductsSlice(page, category),
				initialData: initialProductsSliceData,
				retry: 2,
				staleTime: 5000,
				retryDelay: attempt => attempt * 1000
			}
		);

		const products = productsSliceData?.products;

		return (
			<section className={styles.productsContainer}>
					{ products &&
						<ul className={styles.productsList}>
							{ products.map(product => {
								return (
									<li key={product.id} className={styles.product}>
										<ProductCard product={product}/>
									</li>
								)})
							}
						</ul>
					}
			</section>
		)
}

// https://tanstack.com/query/v4/docs/framework/react/guides/query-keys
// Note that query keys act as dependencies for your query functions. Adding dependent variables to your query key will ensure that queries are cached independently, and that any time a variable changes, queries will be refetched automatically