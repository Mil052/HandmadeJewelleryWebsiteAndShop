import { SliderData } from "@/app/_utilities/dbRequests/dbRequests";
import styles from './SliderCard.module.css';

export default function SliderCard ({item}: {item: SliderData}) {
    return (
        <div className={styles.card} style={{backgroundImage: `url(${item.image_path})`}}>
                <div className={styles.description}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    {item.link_path && <a href={item.link_path}>{item.link_text}</a>}
                </div>
        </div>
    )
}