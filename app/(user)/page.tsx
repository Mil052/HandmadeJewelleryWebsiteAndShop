import styles from "./page.module.css";
import Slider from "./_components/Slider/Slider";
import { getSliderData, getNewsData, getSelectedProductsData } from "../_utilities/data-fetching/fetch-data";
import InfoBox from "./_components/InfoBox/InfoBox";
import SelectedProducts from "./_components/SelectedProducts/SelectedProducts";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const sliderData = await getSliderData();
  const newsData = await getNewsData();
  const selectedProductsData = await getSelectedProductsData();

  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <div className={styles.logo}>
          <h1>MIRU</h1>
          <h2>LITTLE THINGS</h2>
          <h3>handmade jewellery</h3>
        </div>
      </section>
      <section className={styles.slider}>
        {sliderData && <Slider items={sliderData} slots={3}/>}
      </section>
      <section className={styles.selectedProducts}>
        <h3 className={styles.selectedProductsHeader}>NEWS & BESTSELLERS</h3>
        {selectedProductsData && <SelectedProducts products={selectedProductsData}/>}
        <div className={styles.selectedProductsLink}>
          <Link href="/shop" className="arrowLink">view all products</Link>
        </div>
      </section>
      <section className={styles.infoBoxContainer}>
        <div className={styles.infoBoxCard}>
          {newsData && <InfoBox newsData={newsData}/>}
        </div>
      </section>
      <section className={styles.contactBox}>
        <div className={styles.contactBoxContainer}>
          <div className={styles.contactBoxText}>
            <h4>Do You have question ?</h4>
            <p>Send a message via the contact form.</p>
          </div>
          <Link href="/contact"><button className="buttonPrimary" type="button">contact us</button></Link>
        </div>
      </section>
    </main>
  );
}