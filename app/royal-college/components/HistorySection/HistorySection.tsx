"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import EmblemSection from "../EmblemSection/EmblemSection";
import LocationSection from "../LocationSection/LocationSection";
import ExpertiseSection from "../ExpertiseSection/ExpertiseSection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";
import styles from "./HistorySection.module.css";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "วิสัยทัศน์และพันธกิจ",
    "ข้อมูลหลักสูตร",
    "สาขาความเชี่ยวชาญ",
    "คณะกรรมการบริหาร",
    "ตราสัญลักษณ์",
    "ติดต่อและสถานที่ตั้ง",
];

const TIMELINE_DATA = [
    {
        year: "ก่อนปี 2567",
        title: "ยุคบุกเบิก Precision Medicine",
        description:
            "การวิจัยด้านเภสัชพันธุศาสตร์เริ่มมีบทบาทสำคัญในระบบสาธารณสุขไทย เพื่อลดการแพ้ยารุนแรงและเพิ่มประสิทธิภาพการรักษา",
    },
    {
        year: "2567",
        title: "จุดกำเนิดอย่างเป็นทางการ",
        description:
            "จัดตั้งวิทยาลัยฯ ภายใต้ ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย ตามข้อบังคับสภาเภสัชกรรม เพื่อรองรับนโยบายการแพทย์สมัยใหม่",
    },
    {
        year: "ปัจจุบัน",
        title: "สร้างมาตรฐานวิชาชีพ",
        description:
            "ยกระดับศักยภาพเภสัชกรให้เชี่ยวชาญการใช้ข้อมูลพันธุกรรม (Pharmacogenomics) ร่วมกับการบริบาลทางเภสัชกรรมในหน้าที่งานจริง",
    },
    {
        year: "อนาคต",
        title: "ความมุ่งมั่นเฉพาะบุคคล",
        description:
            "มุ่งสู่การบูรณาการข้อมูล DNA ในระบบฐานข้อมูลสุขภาพ เพื่อการใช้ยาที่ปลอดภัยและแม่นยำสูงสุดสำหรับคนไทยทุกคน",
    },
];



export default function HistorySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>"ยกระดับความปลอดภัย <br />สู่มาตรฐานเภสัชพันธุศาสตร์ไทย"</h3>

                <ul>
                    {MENU_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={`${styles.menuItem} ${activeTab === index ? styles.active : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.historyContent}>

                {activeTab === 0 && (
                    <>
                        {/* HEADING */}
                        <h2 className={styles.mainHeading}>
                            ก้าวสำคัญของวิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ
                        </h2>

                        <p className={styles.subText}>
                            เรามุ่งเน้นการประยุกต์ใช้ข้อมูลทางพันธุกรรมของผู้ป่วยมาออกแบบการใช้ยา เพื่อเปลี่ยนการรักษาแบบเดิม ให้เป็นการรักษาที่ &quot;แม่นยำ
                            ถูกขนาด และปลอดภัย&quot; ลดความเสี่ยงจากการแพ้ยารุนแรงและเพิ่มประสิทธิภาพการรักษาในระดับสูงสุด
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <p className={styles.timelineDesc}>{item.description}</p>
                                </div>
                            ))}
                        </div>

                     
                        
                    </>
                )}

                {activeTab === 1 && <VisionMissionSection />}

                {activeTab === 2 && <CoursesSection />}

                {activeTab === 3 && <ExpertiseSection />}

                {activeTab === 4 && <CommitteeSection />}

                {activeTab === 5 && <EmblemSection />}

                {activeTab === 6 && <LocationSection />}

            </div>

        </section>
    );
}
