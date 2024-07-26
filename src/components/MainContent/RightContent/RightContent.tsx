import React from 'react';
import styles from './RightContent.module.css';
import Image from 'next/image';
import userImage from '../../../../public/img/profile_img.png'
import SummaryContent from './SummaryContent/SummaryContent';
import BidSection from './BidSection/BidSection';
import OthersPlacedBets from './OthersPlacedBets/OhersPlacedBets';

const RightContent = () => {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.bidContainer}>
        <div>
          <div className={styles.surge}>
            <span>Surge Attention</span>
            <span></span>
          </div>
          <div className={styles.dateRange}>
            29 June <span>(09:00 AM)</span> - 30 June <span>(05:00 PM)</span>
          </div>
          <div className={styles.date}>Canada Day 2024</div>
        </div>
        <div className={styles.priceInfo}>
          <div className={styles.maxPrice}>
            <span>$200/min</span>
            <span>MAX</span>
          </div>
          <div className={styles.currentPriceSection}>
            <div className={styles.currentPriceInfo}>
              <span className={styles.currentPrice}>Current Price</span>
              <span className={styles.currentPriceValue}>$95/min</span>
            </div>
            <Image className={styles.currentPriceImg} src={userImage} alt="user" />
          </div>
        </div>

        {/* 
        OtherBidSection */}

        <>
        <OthersPlacedBets/>
        </>
      

        {/* Bid_Section */}

        <>
          <BidSection />
        </>

        {/* summary_section */}

        <>
          <SummaryContent />
        </>
      </div>
    </div>
  );
};

export default RightContent;


