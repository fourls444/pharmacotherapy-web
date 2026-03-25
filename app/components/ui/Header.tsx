import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/images/favicon.png" className={styles.logo} />
        <div>
          <h1>วิทยาลัยเภสัชกรรมสมุนไพร</h1>
          <p>College of Herbal Pharmacy of Thailand</p>
        </div>
      </div>

    </header>
  );
}