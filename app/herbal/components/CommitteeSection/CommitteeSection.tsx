import styles from "./CommitteeSection.module.css";

const MEMBERS = [
    {
        image: "/images/committee/member1.png",
        name: "รศ.ดร.ภญ.นริศา คำแก่น",
        role: "ประธาน",
    },
    {
        image: "/images/committee/member2.png",
        name: "ดร.ภญ.พิมพ์พิมล ตันสกุล",
        role: "รองประธาน",
    },
    {
        image: "/images/committee/member3.png",
        name: "ผศ.ดร.ภก.วุฒิชัย วิสุทธิพรต",
        role: "เลขาธิการ",
    },
    {
        image: "/images/committee/member4.png",
        name: "ดร.ภก.อดิศักดิ์ ถมอุดทา",
        role: "นายทะเบียน",
    },
    {
        image: "/images/committee/member5.png",
        name: "รศ.ดร.ภญ.ประสบอร รินทอง",
        role: "เหรัญญิก.",
    },
    {
        image: "/images/committee/member6.png",
        name: "ภญ.ชวัลวลัย เมฆสวัสดิชัย",
        role: "เหรัญญิก",
    },
    {
        image: "/images/committee/member7.png",
        name: "ภก.นฤทธิ์ เหลืองใส",
        role: "นายทะเบียน",
    },
     {
        image: "/images/committee/member8.png",
        name: "ดร.ภญ.ผกากรอง ขวัญข้าว",
        role: "นายทะเบียน",
    },
];

export default function CommitteeSection() {
    const chairman = MEMBERS[0];
    const row2 = MEMBERS.slice(1, 3);
    const row3 = MEMBERS.slice(3, 8);

    return (
        <section className={styles.section}>

            {/* HEADER */}
            <div className={styles.header}>
                <h2>คณะผู้บริหารวิทยาลัยและทีมงาน</h2>
                <p>
                    &quot;เรามุ่งสร้างมาตรฐานใหม่ของการบริบาลทางเภสัชกรรม ที่ไม่ได้ดูแลแค่ &apos;ยา&apos; แต่ดูแลลึกถึง &apos;พันธุกรรม&apos; ของแต่ละบุคคล&quot;
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
                    </div>
                </div>
            </div>

            {/* ROW 2 - 2 members */}
            <div className={styles.membersRow} style={{ zIndex: 2 }}>
                {row2.map((m, i) => (
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

            {/* ROW 3 - 5 members */}
            <div className={styles.membersRow} style={{ zIndex: 1, marginBottom: 0 }}>
                {row3.map((m, i) => (
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