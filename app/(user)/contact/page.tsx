import styles from './page.module.css';
import MessageForm from './MessageForm/MessageForm';
import MediaLinks from './MediaLinks/MediaLinks';
import ContactData from './ContactData/ContactData';

export default async function Contact() {
	return (
		<main className={styles.main}>
			<section
				id="contact" 
				className={styles.contact}
				style={{backgroundImage: 'url(./contact-assets/hairpins-bg.webp)'}}
			>
				<div className={styles.messageFormContainer}>
					<div className={styles.messageForm}>
						<h3>CONTACT US</h3>
						<MessageForm/>
					</div>
				</div>
				<div className={styles.contactDataContainer}>
					<div className={styles.contactData}>
						<ContactData
							email='miru-little-things@email.com'
							tel='000-000-000'
							adress='ul. Defult Street 00, 00-000 Wrocław'
						/>
					</div>
					<div className={styles.socialMedia}>
						<h3>FOLLOW US</h3>
						<h4>ON SOCIAL MEDIA</h4>
						<div className={styles.linksContainer}>
							<MediaLinks/>
						</div>
					</div>
				</div>
			</section>
					<section id="events" className={styles.events}>
							<h3>EVENTS SECTION</h3>
					</section>
					<section id="about-me" className={styles.about}>
							<h3>ABOUT ME SECTION</h3>
					</section>
			</main>
	)
}