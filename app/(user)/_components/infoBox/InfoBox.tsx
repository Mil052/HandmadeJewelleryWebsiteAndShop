import styles from './InfoBox.module.css';
import { NewsData } from '@/app/_utilities/data-fetching/fetch-data';

export default function InfoBox ({ newsData }: {newsData: NewsData}) {
    return (
        <div className={styles.infoBoxContainer} style={{backgroundImage: `url(${newsData.image_path})`}}>
            <div className={styles.description}>
                <div className={styles.shape}>
                    <h3 className={styles.descTitle}>{newsData.title}</h3>
                    <h4 className={styles.descSubtitle}>{newsData.subtitle}</h4>
                    <p className={styles.descText}>{newsData.description}</p>
                </div>
            </div>
        </div>
    )
}

