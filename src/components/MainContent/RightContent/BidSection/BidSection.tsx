// BidSection.tsx
"use client";

import React from 'react';
import { useBid } from '../../../../app/context/BidContext'; // Adjust the import path if needed
import styles from '../RightContent.module.css';

const BidSection = () => {
    const { state, dispatch } = useBid();

    return (
        <div className={styles.bidSection}>
            <span>Set Your Bet</span>
            <div className={styles.bid}>
                {state.amount > 0 && (
                    <svg
                        onClick={() => dispatch({ type: 'DECREMENT' })}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9C9C9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 12H16" stroke="#9C9C9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
                <div className={styles.cad}>
                    <span>${state.amount}</span>
                    <span>CAD/Min</span>
                </div>
                <svg
                    onClick={() => dispatch({ type: 'INCREMENT' })}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default BidSection;