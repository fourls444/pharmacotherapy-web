import Image from "next/image";
import styles from "./VisionMissionSection.module.css";

const IconBase = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#687332" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="8" y1="6" x2="16" y2="6"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
        <line x1="8" y1="14" x2="16" y2="14"/>
        <line x1="8" y1="18" x2="12" y2="18"/>
    </svg>
);

const MortarIcon = () => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="#B9C733">
        <path d="M21 5H3v2h18V5zm-2 4H5v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V9zm-5 10H10v-2h4v2zm2-4H8v-2h8v2z"/>
        <path d="M16 2L12 6H8l4-4h4z"/>
    </svg>
);

const BookIcon = () => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="#B9C733">
        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zM11 18.44c-1.55-.9-3.75-1.44-5.5-1.44-1.25 0-2.5.15-3.5.44V7.44C3.25 7.15 4.5 7 5.5 7c1.75 0 3.95.54 5.5 1.44v10zM20 18.44c-1.55-.9-3.75-1.44-5.5-1.44-1.25 0-2.5.15-3.5.44V7.44C12.25 7.15 13.5 7 14.5 7c1.75 0 3.95.54 5.5 1.44v10z"/>
    </svg>
);

const BuildingIcon = () => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="#B9C733">
        <path d="M12 3L2 8l2 2H2v11h20V10h-2l2-2-10-5zm0 2.8L17.2 8H6.8L12 5.8zM6 10h12v10H6V10zm2 2v6h2v-6H8zm6 0v6h2v-6h-2z"/>
        <circle cx="12" cy="15" r="2" fill="#fff" />
    </svg>
);

const DiscussionIcon = () => (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="#B9C733">
        <path d="M21 6h-4V4c0-1.1-.9-2-2-2H3C1.9 2 1 2.9 1 4v10c0 1.1.9 2 2 2h2v4l4-4h6c1.1 0 2-.9 2-2v-4h4c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 8H7.8l-1.4 1.4V14H3V4h12v10zm6-4h-4V8h4v2zm-2 2h2v2h-2v-2zm-6-4H5v2h8V8zm-2 4H5v2h6v-2z"/>
    </svg>
);

export default function VisionMissionSection() {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.headerArea}>
                <h2 className={styles.mainHeading}>
                    พัฒนาศักยภาพเภสัชกร สร้างมาตรฐานสมุนไพรไทย
                </h2>
                <p className={styles.subText}>
                    วิทยาลัยเภสัชกรรมสมุนไพรแห่งประเทศไทย ก่อตั้งขึ้นเพื่อส่งเสริมการพัฒนาความเชี่ยวชาญเฉพาะทางด้านเภสัชกรรมสมุนไพร<br />
                    และสนับสนุนการใช้สมุนไพรในระบบสุขภาพอย่างมีคุณภาพและมาตรฐาน
                </p>
            </div>

            {/* TOP 2 CARDS */}
            <div className={styles.topCardsGrid}>
                {/* Vision Card */}
                <div className={styles.topCard}>
                    <div className={styles.cardImageContainer}>
                        <Image
                            src="/images/vision/Container.jpg"
                            alt="Vision"
                            width={481.5}
                            height={156}
                            className={styles.cardCoverImage}
                            priority
                        />
                    </div>
                    <div className={styles.topCardBody}>
                        <h3 className={styles.cardTitle}>วิสัยทัศน์ (Vision)</h3>
                        <p className={styles.cardDesc}>
                            &quot;เป็นองค์กรนำในการขับเคลื่อนมาตรฐานวิชาชีพเภสัชกรรมสมุนไพร<br />
                            เพื่อการใช้สมุนไพรที่มีคุณภาพและปลอดภัยในระดับสากล&quot;
                        </p>
                    </div>
                </div>

                {/* Mission Card */}
                <div className={styles.topCard}>
                    <div className={styles.cardImageContainer}>
                        <Image
                            src="/images/vision/Container2.jpg"
                            alt="Mission"
                            width={481.5}
                            height={156}
                            className={styles.cardCoverImage}
                            priority
                        />
                    </div>
                    <div className={styles.topCardBody}>
                        <h3 className={styles.cardTitle}>พันธกิจ (Mission)</h3>
                        <ul className={styles.missionList}>
                            <li><strong>ความเป็นเลิศทางวิชาการ:</strong> พัฒนาและถ่ายทอดองค์ความรู้ด้านสมุนไพร และผลิตภัณฑ์ธรรมชาติที่ทันสมัยตามหลักประจักษ์พยานทางวิทยาศาสตร์</li>
                            <li><strong>มาตรฐานการบริบาล:</strong> กำหนดมาตรฐานการฝึกอบรมเภสัชกรเชี่ยวชาญ เพื่อให้เกิดการใช้สมุนไพรในระบบสาธารณสุขอย่างสมเหตุผลและปลอดภัย</li>
                            <li><strong>นวัตกรรมและการวิจัย:</strong> ส่งเสริมการวิจัยและพัฒนาสมุนไพรไทยให้มีคุณภาพมาตรฐาน ผลักดันสู่บัญชียาหลักแห่งชาติและสากล</li>
                            <li><strong>เครือข่ายความร่วมมือ:</strong> ประสานพลังร่วมกับเครือข่ายวิชาชีพทั้งภาครัฐและเอกชน เพื่อขับเคลื่อนนโยบายสมุนไพรของประเทศอย่างยั่งยืน</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* MIDDLE 3 CARDS */}
            <div className={styles.middleCardsGrid}>
                <div className={styles.middleCard}>
                    <div className={styles.iconBox}><IconBase /></div>
                    <h4 className={styles.middleCardTitle}>ส่งเสริมและพัฒนา</h4>
                    <p className={styles.middleCardDesc}>
                        ส่งเสริมและพัฒนาความเชี่ยวชาญเฉพาะ<br />ทางด้านเภสัชกรรม<br />สมุนไพรให้แก่เภสัชกร
                    </p>
                </div>
                <div className={styles.middleCard}>
                    <div className={styles.iconBox}><IconBase /></div>
                    <h4 className={styles.middleCardTitle}>ยกระดับมาตรฐาน</h4>
                    <p className={styles.middleCardDesc}>
                        ยกระดับมาตรฐานการใช้สมุนไพรในวิชา<br />ชีพเภสัชกรรมให้มี<br />ความปลอดภัยและประสิทธิภาพ
                    </p>
                </div>
                <div className={styles.middleCard}>
                    <div className={styles.iconBox}><IconBase /></div>
                    <h4 className={styles.middleCardTitle}>สร้างมูลค่า</h4>
                    <p className={styles.middleCardDesc}>
                        สนับสนุนการพัฒนาผลิตภัณฑ์สมุนไพร<br />ไทยให้มีคุณภาพและสามารถสร้างมูลค่า<br />ทางเศรษฐกิจได้อย่างยั่งยืน
                    </p>
                </div>
            </div>

            {/* BOTTOM 4 BANNER CARDS */}
            <div className={styles.bottomBannersGrid}>
                <div className={styles.bannerItem}>
                    <div className={styles.bannerText}>
                        พัฒนาหลักสูตรฝึกอบรมความชำนาญ<br />เฉพาะทางด้านเภสัชกรรมสมุนไพร
                    </div>
                    <div className={styles.bannerIcon}><MortarIcon /></div>
                </div>
                <div className={styles.bannerItem}>
                    <div className={styles.bannerText}>
                        ส่งเสริมการวิจัย<br />และการพัฒนาองค์ความรู้ด้านสมุนไพร
                    </div>
                    <div className={styles.bannerIcon}><BookIcon /></div>
                </div>
                <div className={styles.bannerItem}>
                    <div className={styles.bannerText}>
                        เป็นศูนย์กลางเครือข่ายวิชาการ<br />ด้านเภสัชกรรมสมุนไพร
                    </div>
                    <div className={styles.bannerIcon}><BuildingIcon /></div>
                </div>
                <div className={styles.bannerItem}>
                    <div className={styles.bannerText}>
                        สนับสนุนการกำหนดนโยบาย<br />และทิศทางการพัฒนาสมุนไพรในระดับประเทศ
                    </div>
                    <div className={styles.bannerIcon}><DiscussionIcon /></div>
                </div>
            </div>
        </section>
    );
}
