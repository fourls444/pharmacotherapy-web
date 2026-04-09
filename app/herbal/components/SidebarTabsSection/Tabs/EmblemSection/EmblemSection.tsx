import styles from "./EmblemSection.module.css";


export default function EmblemSection() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                {/* LOGO CARD — tall, left column, spans 3 rows */}
                <div className={styles.logoCard}>
                    <div className={styles.logoTopArea}>
                        <div className={styles.logoImageWrapper}>
                            <img src="/images/emblem/logo.png" alt="Emblem Logo" className={styles.logoImage} />
                        </div>
                        <span className={styles.quoteIcon}>”</span>
                    </div>
                    <div className={styles.logoTextWrapper}>
                        <h3 className={styles.logoTitle}>
                            ตราสัญลักษณ์ของวิทยาลัยเภสัชกรรมสมุนไพรแห่งประเทศไทย
                        </h3>
                        <p className={styles.logoDesc}>
                            สะท้อนถึงการผสมผสานระหว่างองค์ความรู้ทางวิทยาศาสตร์และ<br />
                            ภูมิปัญญาสมุนไพรไทย
                        </p>
                    </div>
                </div>

                {/* INFO CARD 1 */}
                <div className={styles.infoCard}>
                    <h4 className={styles.infoTitle}>รูปทรงหกเหลี่ยม</h4>
                    <p className={styles.infoDesc}>
                        สื่อถึงโครงสร้างของสารเคมี ซึ่งเป็นพื้นฐานของวิทยาศาสตร์เภสัชกรรม<br />และมีการวิเคราะห์สารสำคัญในสมุนไพร
                    </p>
                </div>

                {/* INFO CARD 2 */}
                <div className={styles.infoCard}>
                    <h4 className={styles.infoTitle}>โกร่งและใบไม้</h4>
                    <p className={styles.infoDesc}>
                        สื่อถึงภูมิปัญญาการใช้สมุนไพรในการดูแลสุขภาพ<br />
                        และบทบาทของเภสัชกรในการพัฒนาและควบคุมคุณภาพของผลิตภัณฑ์<br />สมุนไพร
                    </p>
                </div>

                {/* INFO CARD 3 */}
                <div className={styles.infoCard}>
                    <h4 className={styles.infoTitle}>ตัวย่อ CPPGx: * CP: College of Pharmacy (วิทยาลัยเภสัชกรรม)</h4>
                    <p className={styles.infoDesc}>
                        PGx: Pharmacogenomics (เภสัชพันธุศาสตร์) ตัวอักษร &quot;x&quot;<br />
                        สีม่วงอ่อนสื่อถึงความทันสมัยและการก้าวกระโดดทางเทคโนโลยี
                    </p>
                    <p className={styles.infoQuote}>
                        ตราสัญลักษณ์จึงเป็นภาพแทนของการผสานระหว่าง<br />
                        ศาสตร์สมัยใหม่กับภูมิปัญญาดั้งเดิม<br />
                        เพื่อการพัฒนาสมุนไพรไทยอย่างมีมาตรฐาน
                    </p>
                </div>

            </div>
        </section>
    );
}
