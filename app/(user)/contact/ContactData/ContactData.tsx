import styles from './ContactData.module.css';

export default function ContactData ({email, tel, adress}: {email: string, tel: string, adress: string}) {
  return (
    <table className={styles.dataTable}>
      <tbody>
        <tr>
          <td>
            <svg className={styles.dataIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="6.5" width="47" height="35" rx="5.5" stroke="black"/>
              <path d="M1 9L18.905 23.791C21.8624 26.2341 26.1376 26.2341 29.0951 23.791L47 9" stroke="black" strokeLinejoin="round"/>
              <path d="M1 39L19 24" stroke="black" strokeLinejoin="round"/>
              <path d="M29 24L47 39" stroke="black" strokeLinejoin="round"/>
            </svg>
          </td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>
            <svg className={styles.dataIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.0083 33.8419C29.0083 33.8419 32.8953 31.6166 33.9129 31.0819C34.9276 30.5453 35.9788 30.4099 36.6172 30.7997C37.584 31.391 45.7017 36.791 46.3852 37.2691C47.0688 37.7481 47.398 39.1161 46.4582 40.4563C45.5222 41.7965 41.2041 47.0957 39.3744 47.039C37.5417 46.9795 29.9222 46.8125 15.5539 32.4403C1.18843 18.0729 1.01851 10.4515 0.959954 8.61886C0.901394 6.78718 6.20059 2.46814 7.54075 1.53118C8.88283 0.595177 10.2528 0.947497 10.7289 1.60606C11.2704 2.35582 16.608 10.4477 17.1955 11.375C17.5977 12.0086 17.4499 13.0656 16.9132 14.0813C16.3795 15.0989 14.1542 18.9859 14.1542 18.9859C14.1542 18.9859 15.7228 21.6614 21.0278 26.9654C26.3337 32.2704 29.0083 33.8419 29.0083 33.8419Z" stroke="black" strokeMiterlimit="10"/>
            </svg>
          </td>
          <td>{tel}</td>
        </tr>
        <tr>
          <td>
            <svg className={styles.dataIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="16" r="7.5" stroke="black"/>
              <path d="M9 16C9 6 17 1 24 1C31 1 39 6 39 16C39 26 24 47 24 47C24 47 9 26 9 16Z" stroke="black" strokeLinejoin="round"/>
            </svg>
          </td>
          <td>{adress}</td>
        </tr>
      </tbody>
    </table>
  )
}