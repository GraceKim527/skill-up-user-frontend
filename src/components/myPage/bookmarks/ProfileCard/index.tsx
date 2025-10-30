// src/components/myPage/bookmarks/ProfileCard/index.tsx

import styles from "./styles.module.css";
import Image from "next/image";
import ProfileImage from "@/assets/images/logoDefaultImg.png";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import BulletPointIcon from "@/assets/svg/bulletPointIcon.svg";

interface ProfileCardProps {
  name: string;
  email: string;
  job: string;
  bookmarkCount: number;
}

export default function ProfileCard({ name, email, job, bookmarkCount }: ProfileCardProps) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileCardContent}>
        <div className={styles.profileCardHeader}>
          <div className={styles.profileCardHeaderLeft}>
            <Image src={ProfileImage} alt="Profile Image" />
          </div>
          <div className={styles.profileCardHeaderRight}>
            <Text typography="sub3_m_16" color="black">
              {name}
            </Text>
            <Text typography="label4_m_12" color="neutral-50">
              {email}
            </Text>
          </div>
        </div>
        <div className={styles.profileCardBody}>
          <div className={styles.profileCardBodyItem}>
            <Text typography="label3_m_14" color="black">
              직무
            </Text>
            <div className={styles.profileCardBodyItemContent}>
              <Image src={BulletPointIcon} alt="Bullet Point Icon" />
              <Text typography="label3_m_14" color="primary-strong">
                {job}
              </Text>
            </div>
          </div>
          <div className={styles.profileCardBodyItem}>
            <Text typography="label3_m_14" color="black">
              찜한 행사
            </Text>
            <div className={styles.profileCardBodyItemContent}>
              <Image src={BulletPointIcon} alt="Bullet Point Icon" />
              <Text typography="label3_m_14" color="primary-strong">
                {bookmarkCount}개
              </Text>
            </div>
          </div>
        </div>
      </div>
      <Button variant="primary" size="large">
        프로필 수정
      </Button>
    </div>
  );
}
