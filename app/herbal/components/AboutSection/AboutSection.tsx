"use client";

import styles from "./AboutSection.module.css";
import { FaSearch } from "react-icons/fa";
import { LuListFilter, LuChevronDown } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section className={styles.container}>
      {/* Left Column: Image Card */}
      <div className={styles.imageSection}>
        <div className={styles.imageCard}>
          <img
            src="/images/home/Container.png"
            alt="Pharmacy Practice"
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <h3 className={styles.overlayTitle}>วิทยาลัยเภสัชกรรมสมุนไพร</h3>
            <p className={styles.overlaySubtitle}>
              College of Herbal Pharmacy of Thailand
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Text & Search */}
      <div className={styles.contentSection}>
        <h2 className={styles.headline}>
          ศาสตร์สมุนไพรไทยสู่มาตรฐานวิชาชีพสากล
          
        </h2>
        <p className={styles.description}>
         วิทยาลัยเภสัชกรรมสมุนไพรแห่งประเทศไทย เป็นองค์กรวิชาการภายใต้ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย 
         ที่มุ่งพัฒนาความเชี่ยวชาญเฉพาะทางด้านเภสัชกรรมสมุนไพร
          ส่งเสริมการวิจัยและนวัตกรรม เพื่อให้สมุนไพรไทยมีคุณภาพ มาตรฐาน และสามารถนำไปใช้ประโยชน์ได้อย่างปลอดภัยและยั่งยืน
        </p>

        {/* Search Card */}
        <div className={styles.searchCard}>
          <h3 className={styles.searchTitle}>ค้นหารายชื่อ</h3>
          <p className={styles.searchSubtitle}>ผู้ประกอบวิชาชีพเภสัชกรรม</p>

          <div className={styles.inputGroup}>
            <div className={styles.dropdown}>
              <LuListFilter className={styles.filterIcon} />
              <span>เลขที่ใบอนุญาต</span>
              <LuChevronDown className={styles.chevronIcon} />
            </div>
            
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="ค้นหาเลขที่ใบอนุญาต"
                className={styles.searchInput}
              />
            </div>

            <button className={styles.searchButton}>ค้นหา</button>
          </div>
        </div>
      </div>
    </section>
  );
}