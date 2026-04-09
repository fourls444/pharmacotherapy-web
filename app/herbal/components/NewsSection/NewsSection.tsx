import styles from "./NewsSection.module.css";

const NEWS_ITEMS = [
    {
        image: "/images/news/Container1.png",
        title: "วภพ. จัดอบรมเชิงปฏิบัติการ: พัฒนาสูตรยาจากกัญชาทางการแพทย์",
        description:
            "โครงการพัฒนาเภสัชกร: การใช้ยาชีววัตถุอย่างมีประสิทธิภาพ",
    },
    {
        image: "/images/news/Container2.png",
        title: "วภพ. เปิดรับสมัคร: หลักสูตรการตลาดผลิตภัณฑ์สมุนไพร ปี 72",
        description:
            "อบรม 12 สัปดาห์: การให้คำปรึกษาด้านการใช้กัญชาทางการแพทย์",
    },
    {
        image: "/images/news/Container3.png",
        title: "วภพ. จัดสัมมนา: ยกระดับมาตรฐานยาสมุนไพรไทยสู่สากล",
        description:
            "อบรมระยะสั้น 16 สัปดาห์: การใช้เทคโนโลยี AI ในการดูแลผู้ป่วย",
    },
];

export default function NewsSection() {
    return (
        <section className={styles.newsSection}>
            <div className={styles.newsContainer}>
                {/* HIGHLIGHTS */}
                <div className={styles.newsHeader}>
                    <h2>เรื่องเด่นวิทยาลัยเภสัชกรรมสมุนไพร</h2>
                    <div className={styles.newsNav}>
                        <button className={styles.navBtn}>&lt;</button>
                        <button className={styles.navBtn}>&gt;</button>
                    </div>
                </div>

                <div className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                        <img src="/images/news/img.png" alt="featured" />
                    </div>
                    <div className={styles.featuredContent}>
                        <div className={styles.tagOlive}>ข่าวประชาสัมพันธ์</div>
                        <h3>วภพ. จัดอบรม:<br></br> สกัดสารสำคัญจากพืชกระท่อมและกัญชา</h3>
                        <p>
                            เจาะลึกเทคโนโลยีการวิเคราะห์ยีน: สู่การใช้ยาที่ตรงจุด
                        </p>
                        <button className={styles.readMoreBtn}>อ่านเพิ่มเติม</button>
                    </div>
                </div>

                <div className={styles.paginationDots}>
                    <div className={styles.dotActive}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>

                {/* NEWS */}
                <div className={styles.newsRowHeader}>
                    <h2>ข่าวสารวิทยาลัยเภสัชกรรมสมุนไพร</h2>
                    <span className={styles.viewAll}>ดูทั้งหมด &gt;</span>
                </div>

                <div className={styles.newsGrid}>
                    {NEWS_ITEMS.map((item, index) => (
                        <div key={index} className={styles.newsCard}>
                            <div className={styles.newsCardImage}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.newsCardContent}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
