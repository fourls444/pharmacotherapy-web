"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import EmblemSection from "../EmblemSection/EmblemSection";
import LocationSection from "../LocationSection/LocationSection";
import ExpertiseSection from "../ExpertiseSection/ExpertiseSection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";
import styles from "./SidebarTabsSection.module.css";
import HistorySection from "../HistorySection/HistorySection";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "วิสัยทัศน์และพันธกิจ",
    "ข้อมูลหลักสูตร",
    "สาขาความเชี่ยวชาญ",
    "คณะกรรมการบริหาร",
    "ตราสัญลักษณ์",
    "ติดต่อและสถานที่ตั้ง",
];





export default function SidebarTabsSection() {
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

                {activeTab === 0 && <HistorySection />}

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
