'use client'

import { ProductData } from "@/app/_utilities/dbRequests/dbRequests";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/navigation';
import { apiGetProduct } from "@/app/_utilities/apiRequests/apiRequests";
import styles from './ProductFullCard.module.css';

export default function ProductFullCard ({id, product}:
  {id: number, product: ProductData|null}) {

  const router = useRouter();
  
  const { data , isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => apiGetProduct(id),
    initialData: product,
    retry: 2,
		staleTime: 5000,
		retryDelay: attempt => attempt * 1000
  });

  if (!data) {
    return (
      <div>
        <h3>No product in store!</h3>
        <p>(product id: {id})</p>
      </div>
    )
  }

  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.image + ' ' + styles.imgPrimary}
        src={data.image_path_01}
        alt={data.image_alt}
      />
      <img
        className={styles.image + ' ' + styles.imgSecondary}
        src={data.image_path_02}
        alt={data.image_alt}
      />
      <img
        className={styles.image + ' ' + styles.imgTertiary}
        src={data.image_path_03}
        alt={data.image_alt}
      />
      <div className={styles.productInfoContainer}>
        <div className={styles.productInfo}>
          <div className={styles.descriptionBlock}>
            <h3 className={styles.productName}>{data.name}</h3>
            <p className={styles.idInfo}>( product id: {data.id} )</p>
            <p className={styles.description}>{data.description}</p>
          </div>
          <h4 className={styles.priceInfo}>{data.price} PLN</h4>
          <div className={styles.BtnContainer}>
            <button className={styles.arrowBtn} onClick={() => router.back()}>
              back to shop
            </button>
            <button className={styles.addToCartBtn}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}