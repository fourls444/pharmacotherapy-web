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
        year: "จุดเริ่มต้นของแนวคิด",
        title: "แนวคิดริเริ่มการก่อตั้งวิทยาลัย",
        description:
            "ผู้ช่วยศาสตราจารย์ เภสัชกรหญิง สำลี ใจดี\nเล็งเห็นถึงความสำคัญของการพัฒนาบุคลากรทางเภสัชกรรมให้มีความเชี่ยวชาญเฉพาะทางด้านสมุนไพร เพื่อสนับสนุนการพัฒนาระบบสาธารณสุขและอุตสาหกรรมสมุนไพรของประเทศไทย",
    },
    {
        year: "การรวมตัวของผู้เชี่ยวชาญ",
        title: "ร่วมมือทางวิชาการ",
        description:
            "ผู้เชี่ยวชาญด้านเภสัชเวทจากหลากหลายสถาบันการศึกษาได้ร่วมกันวางรากฐานทางวิชาการพัฒนาหลักสูตรและจัดทำกฎระเบียบเพื่อรองรับการจัดตั้งวิทยาลัยเฉพาะทางด้านเภสัชกรรมสมุนไพร",
    },
    {
        year: "พ.ศ. 2561",
        title: "สร้างมาตรฐานวิชาชีพ",
        description:
            "ยกระดับศักยภาพเภสัชกรให้เชี่ยวชาญการใช้ข้อมูลพันธุกรรม (Pharmacogenomics) ร่วมกับการบริบาลทางเภสัชกรรมในหน้าที่งานจริง",
    },
    {
        year: "อนาคต",
        title: "การจัดตั้งอย่างเป็นทางการ",
        description:
            "วิทยาลัยเภสัชกรรมสมุนไพรแห่งประเทศไทยได้รับการจัดตั้งอย่างเป็นทางการโดย สภาเภสัชกรรม ตามข้อบังคับสภาเภสัชกรรมว่าด้วยวิทยาลัยเภสัชกรรมสมุนไพรแห่งประเทศไทย พ.ศ. 2561 และถือเป็น วิทยาลัยเฉพาะทางลำดับที่ 3 ภายใต้สังกัดสภาเภสัชกรรม",
    },
];



export default function HistorySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>"ยกระดับสมุนไพรไทย<br></br>ด้วยมาตรฐานเภสัชกรรมระดับสากล"</h3>

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
                            "ขับเคลื่อนสมุนไพรไทย สู่มิติใหม่แห่งนวัตกรรมการรักษา"
                        </h2>

                        <p className={styles.subText}>
                           วิทยาลัยเภสัชกรรมสมุนไพรแห่งประเทศไทย (ว.ภ.ส.) เกิดจากแนวคิดริเริ่มของ ผู้ช่วยศาสตราจารย์ เภสัชกรหญิง สำลี ใจดี 
ที่เล็งเห็นถึงความจำเป็นในการพัฒนาบุคลากรทางเภสัชกรรม ให้มีความเชี่ยวชาญเฉพาะด้านสมุนไพร
เพื่อตอบสนองต่อการพัฒนาระบบสาธารณสุขและอุตสาหกรรมสมุนไพรของประเทศ
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <p className={styles.timelineDesc} >{item.description}</p>
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
