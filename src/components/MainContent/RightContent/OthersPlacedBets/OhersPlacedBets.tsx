import React from 'react';
import styles from '../RightContent.module.css';
import Image from 'next/image';
import userImage from '../../../../../public/img/profile_img.png'
const OthersPlacedBets = () => {
    return (
        <>
            <div className={styles.othersPlacedBets}>
                <div className={styles.othersPlacedBetsimges}>
                    <Image className={styles.currentPriceImg1} width="28" height="28" src={userImage} alt="user" />
                    <Image className={styles.currentPriceImg2} width="28" height="28" src={userImage} alt="user" />
                    <svg className={styles.currentPriceImg3} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="13" fill="#0D0500" stroke="black" stroke-width="2" />
                        <path d="M6.98802 16.4659V10.8409H7.94256V16.4659H6.98802ZM4.65279 14.1307V13.1761H10.2778V14.1307H4.65279ZM15.3925 9.27273V18H14.3357V10.3807H14.2845L12.1539 11.7955V10.7216L14.3357 9.27273H15.3925ZM20.6297 18.1193C20.1297 18.1193 19.6794 18.0199 19.2789 17.821C18.8783 17.6222 18.5573 17.3494 18.3158 17.0028C18.0743 16.6562 17.9422 16.2614 17.9195 15.8182H18.9422C18.982 16.2131 19.161 16.5398 19.4791 16.7983C19.8002 17.054 20.1837 17.1818 20.6297 17.1818C20.9877 17.1818 21.3058 17.098 21.5843 16.9304C21.8655 16.7628 22.0857 16.5327 22.2448 16.2401C22.4067 15.9446 22.4877 15.6108 22.4877 15.2386C22.4877 14.858 22.4039 14.5185 22.2362 14.2202C22.0715 13.919 21.8442 13.6818 21.5544 13.5085C21.2646 13.3352 20.9337 13.2472 20.5615 13.2443C20.2945 13.2415 20.0203 13.2827 19.7391 13.3679C19.4578 13.4503 19.2263 13.5568 19.0445 13.6875L18.0558 13.5682L18.5843 9.27273H23.1183V10.2102H19.4706L19.1638 12.7841H19.2149C19.3939 12.642 19.6183 12.5241 19.8882 12.4304C20.1581 12.3366 20.4394 12.2898 20.732 12.2898C21.2661 12.2898 21.7419 12.4176 22.1595 12.6733C22.58 12.9261 22.9095 13.2727 23.1482 13.7131C23.3896 14.1534 23.5104 14.6562 23.5104 15.2216C23.5104 15.7784 23.3854 16.2756 23.1354 16.7131C22.8882 17.1477 22.5473 17.4915 22.1127 17.7443C21.678 17.9943 21.1837 18.1193 20.6297 18.1193Z" fill="white" />
                    </svg>
                </div>
                <span>Others have placed their bets</span>
            </div>

        </>
    );
};

export default OthersPlacedBets;