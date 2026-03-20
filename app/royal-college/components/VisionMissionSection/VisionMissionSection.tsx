import Image from "next/image";
import styles from "./VisionMissionSection.module.css";

/* SVG Icons for mission cards (moved from HistorySection) */
const ChartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const SearchIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
);

const ChatIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

export default function VisionMissionSection() {
    return (
        <div className={styles.visionMissionContainer}>
            <h2 className={styles.mainHeading}>
                "ยกระดับมาตรฐานเภสัชกรไทย สู่การใช้ข้อมูลพันธุกรรม<br />
                เพื่อการเลือกใช้ยาที่แม่นยำ ปลอดภัย และจำเพาะเจาะจงต่อบุคคล"
            </h2>
            <p className={styles.subText}>
                "มุ่งมั่นสร้างมาตรฐานการบริบาลทางเภสัชกรรมแม่นยำผ่านการพัฒนาศักยภาพเภสัชกรเชี่ยวชาญด้านเภสัชพันธุศาสตร์และนวัตกรรมการวิจัย เพื่อยกระดับความปลอดภัยและประสิทธิภาพสูงสุดในการใช้ยาจำเพาะเจาะจงต่อบุคคลเพื่อสุขภาวะที่ดีของประชาชนไทย"
            </p>

            {/* Vision Card */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>วิสัยทัศน์ (Vision)</h3>
                    <div className={styles.cardImageWrapper}>
                        <div className={styles.imageFade}></div>
                        <Image
                            src="/images/vision/Container1.png"
                            alt="Vision"
                            width={987}
                            height={156}
                            className={styles.cardImage}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.cardBody}>
                    <p className={styles.cardHighlight}>
                        "เป็นองค์กรชั้นนำในการขับเคลื่อนการบริบาลทางเภสัชกรรมแม่นยำ เพื่อสุขภาวะที่ดีของประชาชน"
                    </p>
                    <p className={styles.cardDesc}>
                        มุ่งเน้นการสร้างมาตรฐานและผลักดันให้การนำข้อมูลพันธุกรรมมาใช้ในการเลือกใช้ยา เป็นมาตรฐานใหม่ของการรักษาในประเทศไทย
                    </p>
                </div>
            </div>

            {/* Mission Card */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>พันธกิจ (Mission)</h3>
                    <div className={styles.cardImageWrapper}>
                        <div className={styles.imageFade}></div>
                        <Image
                            src="/images/vision/Container2.png"
                            alt="Mission"
                            width={987}
                            height={156}
                            className={`${styles.cardImage} ${styles.missionImage}`}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.cardBody}>
                    <ul className={styles.missionList}>
                        <li>
                            <strong>การจัดการศึกษาและฝึกอบรม:</strong> พัฒนาหลักสูตรการฝึกอบรมระยะสั้นและระยะยาว เพื่อสร้างเภสัชกรที่มีความเชี่ยวชาญด้านเภสัชพันธุศาสตร์และการแพทย์แม่นยำ (Personalized Medicine)
                        </li>
                        <li>
                            <strong>การกำหนดมาตรฐานวิชาชีพ:</strong> จัดทำเกณฑ์มาตรฐานและแนวทางปฏิบัติ (Guidelines) ในการให้บริการทางเภสัชกรรมแม่นยำ เพื่อให้เกิดความปลอดภัยสูงสุดแก่ผู้ป่วย
                        </li>
                        <li>
                            <strong>การส่งเสริมการวิจัยและนวัตกรรม:</strong> สนับสนุนการสร้างองค์ความรู้ใหม่ๆ ด้านพันธุศาสตร์ที่เหมาะสมกับบริบทและพันธุกรรมของประชากรไทย
                        </li>
                        <li>
                            <strong>การสร้างเครือข่ายความร่วมมือ:</strong> ประสานงานกับองค์กรวิชาชีพทั้งในและต่างประเทศ เพื่อถ่ายทอดเทคโนโลยีและผลักดันนโยบายด้านสาธารณสุขระดับประเทศ
                        </li>
                    </ul>
                </div>
            </div>

            {/* Roles Section (Moved from HistorySection) */}
            <div className={styles.rolesSection}>
                <h2 className={styles.missionHeading}>
                    พันธกิจและบทบาทหน้าที่ (Our Mission &amp; Roles)
                </h2>
                <p className={styles.missionSubText}>
                    วิทยาลัยฯ มุ่งมั่นที่จะเป็นกลไกหลักในการขับเคลื่อนนโยบายการแพทย์เฉพาะบุคคล (Personalized Medicine) ของประเทศ ผ่าน 3 เสาหลักสำคัญ
                </p>

                {/* MISSION CARDS - 2x2 GRID */}
                <div className={styles.missionGrid}>
                    {/* Card 1 - top left */}
                    <div className={styles.missionCard}>
                        <div className={styles.missionCardIcon}>
                            <ChartIcon />
                        </div>
                        <div className={styles.missionCardContent}>
                            <h4>มาตรฐานวิชาการและวิชาชีพ</h4>
                            <p>พัฒนาหลักสูตรมาตรการฝึกอบรมและจัดการศึกษาต่อเนื่อง เพื่อสร้างเภสัชกรผู้เชี่ยวชาญที่มีสมรรถนะสูงในการใช้ข้อมูลพันธุกรรม พร้อมกำหนดมาตรฐานแนวทางปฏิบัติงาน (Standard Guidelines) ให้เป็นที่ยอมรับในระดับสากล</p>
                        </div>
                    </div>

                    {/* Card 2 - top right */}
                    <div className={styles.missionCard}>
                        <div className={styles.missionCardIcon}>
                            <SearchIcon />
                        </div>
                        <div className={styles.missionCardContent}>
                            <h4>การบูรณาการในเวชปฏิบัติ</h4>
                            <p>ส่งเสริมการนำองค์ความรู้ทางเภสัชพันธุศาสตร์ไปใช้จริง ในสถานพยาบาล เพื่อให้เกิดการดูแลผู้ป่วยร่วมกับสหสาขาวิชาชีพ อย่างเป็นระบบ ช่วยให้การเลือกใช้ยาและขนาดของยานั้นถูกต้อง แม่นยำตามสภาพร่างกายของผู้ป่วยแต่ละราย</p>
                        </div>
                    </div>

                    {/* Card 3 - bottom left */}
                    <div className={styles.missionCard}>
                        <div className={styles.missionCardIcon}>
                            <ChatIcon />
                        </div>
                        <div className={styles.missionCardContent}>
                            <h4>ที่ปรึกษาและเผยแพร่องค์ความรู้</h4>
                            <p>เป็นศูนย์กลางการให้คำปรึกษาทางวิชาการแก่หน่วยงานสาธารณสุข และเผยแพร่ข้อมูลที่ถูกต้องแก่ประชาชน เพื่อสร้างความเข้าใจ ในนวัตกรรมการใช้ยาอย่างสมเหตุผลและปลอดภัยสูงสุด</p>
                        </div>
                    </div>

                    {/* Quote card - bottom right */}
                    <div className={styles.quoteCard}>
                        <p>
                            &quot;เรามุ่งมั่นสร้างมาตรฐานใหม่<br />
                            เพื่อให้ข้อมูลทางพันธุกรรมคือหัวใจสำคัญของการรักษาที่<br />
                            มีประสิทธิภาพและปลอดภัยสำหรับทุกคน&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
