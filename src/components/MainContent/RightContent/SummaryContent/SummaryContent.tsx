import React from 'react';
import styles from '../RightContent.module.css';

const SummaryContent = () => {
    return (
        <>

            <div className={styles.summary}>
                <span className={styles.summary_text}>Summary</span>
                <div className={styles.summary_date}>
                    <div className={styles.date_cad}>
                        <div className={styles.all_day}><span>1st July (All Day)</span> <span>$134,400 CAD</span></div>
                        <div className={styles.position}><span>Position</span><span>1</span></div>
                    </div>

                    <div className={styles.peterborough}>
                        <span>Peterborough</span>
                        <span>1400min</span>
                    </div>
                </div>

                <div className={styles.placebid}>
                    <button>Place Bid</button>
                    <p className={styles.placebid_text}> <span>Surge Attention day</span> will be in bidding mode till
                        the  previous day or some one buys it off</p>
                </div>
            </div>
        </>
    );
};

export default SummaryContent;