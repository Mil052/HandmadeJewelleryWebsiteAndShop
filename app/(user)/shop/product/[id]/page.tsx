import styles from './page.module.css';
import { getProductData } from '@/app/_utilities/dbRequests/dbRequests';
import ProductFullCard from './_components/ProductFullCard';


export default async function Product ({ params }: { params: { id: string } }) {

  const product = await getProductData(parseInt(params.id));
  const id = parseInt(params.id);
  console.log (product);

  return (
    <main className={styles.main}>
      <section className={styles.productCard}>
        <ProductFullCard id={id} product={product}/>
      </section>
    </main>
  )
}
