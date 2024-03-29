import { ProductData } from '@/app/_utilities/data-fetching/fetch-data';
import Link from 'next/link';
import styles from './ProductDigestCard.module.css';

export default function ProductDigestCard ({product}: {product: ProductData}) {
    return (
        <div className={styles.digestCard}>
            <img src={product.image_path_01} alt={product.image_alt} className={styles.productImg} draggable='false'/>
            <div className={styles.descriptionContainer}>
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.excerpt}</p>
                </div>
                <div className={styles.price}>{product.price} PLN</div>
            </div>
            <Link className={styles.link} href={`/shop/product?id=${product.id}`}>show product</Link>
        </div>
    )
}