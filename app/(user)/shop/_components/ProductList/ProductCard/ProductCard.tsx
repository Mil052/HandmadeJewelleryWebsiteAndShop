import { ProductData } from "@/app/_utilities/dbRequests/dbRequests";
import styles from "./ProductCard.module.css";
import Link from "next/link";

export default function ProductCard ({product}: {product: ProductData}) {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.image_path_01} alt={product.image_alt} className={styles.imagePrimary}/>
        <img src={product.image_path_02} alt={product.image_alt} className={styles.imageSecondary}/>
        <img src={product.image_path_03} alt={product.image_alt} className={styles.imageSecondary}/>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.description}>
          <h4>{product.name}</h4>
          <p>{product.excerpt}</p>
          <Link href={`/shop/product/${product.id}`} className="arrowLinkSM">show more</Link>
        </div>
        <div className={styles.priceLabel}>
          <button className={styles.priceBtn}>
            <span>{product.price} PLN</span>
            <span>add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
