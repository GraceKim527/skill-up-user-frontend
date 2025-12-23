// 관심있어하실 행사
"use client";
import Flex from "@/components/common/Flex";
import styles from "./styles.module.css";
import { FaRegBookmark } from "react-icons/fa";
import Button from "@/components/common/Button";

export default function RecommendInterest() {
  const keywords = [
    "#기획",
    "#디자인",
    "#AI",
    "#개발",
    "#마케팅",
    "#교육",
    "#데이터",
  ];

  return (
    <section className={styles.interestSection}>
      <Flex
        justify="space-between"
        align="flex-start"
        gap="60px"
        className={styles.inner}
      >
        <Flex direction="column" style={{ flex: 1, maxWidth: "440px" }}>
          <p className={styles.subEng}>
            HERE&apos;S AN EVENT YOU MIGHT BE INTERESTED IN
          </p>
          <h2 className={styles.interestTitle}>
            <span className={styles.interestSpan}>관심있어하실</span>
            행사를
            <br /> 골라왔어요
          </h2>

          <Flex wrap="wrap" gap="12px" className={styles.keywordBox}>
            {keywords.map((kw, i) => (
              <button key={i} className={styles.keywordBtn}>
                {kw}
              </button>
            ))}
          </Flex>
        </Flex>

        <div className={styles.cardGrid}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgBox}>
                <Button
                  variant="secondary"
                  opacity={0.6}
                  icon={<FaRegBookmark />}
                  className={styles.bookmarkBtn}
                />
              </div>
              <Flex direction="column">
                <h3 className={styles.metaTitle}>메인타이틀</h3>
                <p className={styles.metaDesc}>
                  서브타이틀이 들어가면 좋겠어요
                </p>
              </Flex>
            </div>
          ))}
        </div>
      </Flex>
    </section>
  );
}
