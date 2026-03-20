"use client";
import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./CollegesSection.module.css";

const CARDS = [
    { id: 1, src: "/images/cardslice/card1.jpg" },
    { id: 2, src: "/images/cardslice/card2.jpg" },
    { id: 3, src: "/images/cardslice/card3.jpg" },
    { id: 4, src: "/images/cardslice/card4.jpg" },
    { id: 5, src: "/images/cardslice/card5.jpg" },
];

export default function CollegesSection() {
    const [activeIndex, setActiveIndex] = useState(2); // Center card active default

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1));
    };
    
    const handleNext = () => {
        setActiveIndex((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
    };

    const getPositionClass = (index: number) => {
        const diff = (index - activeIndex + CARDS.length) % CARDS.length;
        if (diff === 0) return styles.slideCenter;
        if (diff === 1) return styles.slideRight1;
        if (diff === CARDS.length - 1) return styles.slideLeft1;
        if (diff === 2) return styles.slideHiddenRight;
        if (diff === CARDS.length - 2) return styles.slideHiddenLeft;
        return styles.slideHiddenRight;
    };

    return (
        <section className={styles.collegesSection}>
            <div className={styles.collegesHeader}>
                <p className={styles.subtitle}>
                    Highlight วิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ
                </p>
                <h2 className={styles.mainTitle}>
                    "หยุดการแพ้ยารุนแรง เพิ่มประสิทธิภาพการรักษา <br />
                    ด้วยนวัตกรรมเภสัชพันธุศาสตร์"
                </h2>
                <p className={styles.description}>
                    เพราะร่างกายของทุกคนไม่เหมือนกัน วกพ. จึงให้ความสำคัญกับการวิจัยและพัฒนาแนวทางการตรวจยีนก่อนใช้ยา <br />
                    เพื่อลดความเสี่ยงจากการแพ้ยาเฉียบพลัน และช่วยให้การรักษาสามารถหวังผลได้สูงสุดตั้งแต่วันแรกที่เริ่มยา
                </p>
            </div>

            <div className={styles.carouselContainer}>
                <div className={styles.carouselTrack}>
                    {CARDS.map((card, index) => {
                        return (
                            <div
                                key={card.id}
                                className={`${styles.cardSlide} ${getPositionClass(index)}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <Image
                                    src={card.src}
                                    alt={`Highlight ${card.id}`}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 80vw, 600px"
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                        );
                    })}
                    
                    {/* Navigation Buttons */}
                    <button className={`${styles.navButton} ${styles.navPrev}`} onClick={handlePrev}>
                        <FiChevronLeft size={24} color="#555" />
                    </button>
                    <button className={`${styles.navButton} ${styles.navNext}`} onClick={handleNext}>
                        <FiChevronRight size={24} color="#555" />
                    </button>
                </div>
                
                <div className={styles.pagination}>
                    {CARDS.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
