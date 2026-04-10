import styles from "./CommitteeSection.module.css";

const MEMBERS = [
    {
        image: "/images/committee/member1.png",
        name: "รศ.ดร.ภก.วิชัย สันติมาลีวรกุล",
        role: "ประธานวิทยาลัยเภสัชบำบัดแห่งประเทศไทย",
        position: "ประธาน",
    },
    {
        image: "/images/committee/member2.png",
        name: "ผศ.ดร.ภก.มานิตย์ แซ่เตียว",
        role: "รองประธาน",
        position: "",
    },
    {
        image: "/images/committee/member3.png",
        name: "ผศ.ดร.ภก.วีรยุทธ์ แซ่ลิ้ม",
        role: "เลขาธิการ",
        position: "",
    },
    {
        image: "/images/committee/member4.png",
        name: "ผศ.ดร.ภก.ถนอมพงษ์ เสถียรลัคกนา",
        role: "ประธานวิชาการ",
        position: "",
    },
    {
        image: "/images/committee/member5.png",
        name: "ผศ.ดร.ภญ.วรุณสุดา ศรีภักดี",
        role: "เหรัญญิก.",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member6.png",
        name: "ผศ.ดร.ภญ.สิริมา สิตะรุโน",
        role: "กรรมการกลาง",
        position: "",
    },
    {
        image: "/images/committee/member7.png",
        name: "ผศ.ดร.ภก.ทวนธน บุญลือ",
        role: "นายทะเบียน",
        position: "",
    },
     {
        image: "/images/committee/member8.png",
        name: "ผศ.ดร.ภก.สุธาร จันทะวงศ์",
        role: "กรรมการกลาง",
        position: "",
    },
    {
        image: "/images/committee/member9.png",
        name: "อ.ดร.ภก.สิริชัย ชูสิริ",
        role: "ปฏิคม",
        position: "",
    },
    {
        image: "/images/committee/member10.png",
        name: "ผศ.ดร.ภญ.โชติรัตน์ นครานุรักษ์",
        role: "กรรมการกลาง",
        position: "",
    },
    {
        image: "/images/committee/member11.png",
        name: "ดร.ภญ.พรรณี ลีลาวัฒนชัย",
        role: "ประชาสัมพันธ์",
        position: "",
    },
    {
        image: "/images/committee/member12.png",
        name: "ดร.ภญ.ศุภานันท์ ปึงเจริญกิจกุล",
        role: "กรรมการกลาง",
        position: "",
    },
    {
        image: "/images/committee/member13.png",
        name: "ผศ.ดร.ภญ.สุธินี แต้โสตถิกุล",
        role: "กรรมการกลาง",
        position: "กรรมการ",
    },
    
   
  
];

export default function CommitteeSection() {
    const chairman = MEMBERS[0];
    const otherMembers = MEMBERS.slice(1);

    return (
        <section className={styles.section}>

            {/* HEADER */}
            <div className={styles.header}>
                <h2>คณะกรรมการบริหาร</h2>
                <p>
                  คณะกรรมการผู้ทรงคุณวุฒิจากสถาบันการศึกษาและโรงพยาบาลชั้นนำ ที่ร่วมกันขับเคลื่อนมาตรฐานการสอบและการรับรองวิทยฐานะ
                </p>
            </div>

            {/* CHAIRMAN - row 1 */}
            <div className={styles.chairmanRow}>
                <div className={`${styles.card} ${styles.chairmanCard}`}>
                    <div className={styles.photoArea}>
                        <img src={chairman.image} alt={chairman.name} className={styles.memberPhoto} />
                    </div>
                    <div className={styles.nameArea}>
                        <span className={styles.memberName}>{chairman.name}</span>
                        <span className={styles.memberRole}>{chairman.role}</span>
                        <span className={styles.memberPosition}>{chairman.position}</span>
                    </div>
                </div>
            </div>

            {/* OTHER MEMBERS */}
            <div className={styles.membersRow}>
                {otherMembers.map((m, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.photoArea}>
                            <img src={m.image} alt={m.name} className={styles.memberPhoto} />
                        </div>
                        <div className={styles.nameArea}>
                            <span className={styles.memberName}>{m.name}</span>
                            <span className={styles.memberRole}>{m.role}</span>
                           
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}