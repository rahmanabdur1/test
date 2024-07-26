"use client"



// BidContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface BidState {
    amount: number;
}

interface BidAction {
    type: 'INCREMENT' | 'DECREMENT';
}

const initialState: BidState = {
    amount: 1,
};

const BidContext = createContext<{
    state: BidState;
    dispatch: React.Dispatch<BidAction>;
} | undefined>(undefined);

const bidReducer = (state: BidState, action: BidAction): BidState => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, amount: state.amount + 1 };
        case 'DECREMENT':
            return { ...state, amount: state.amount - 1 };
        default:
            return state;
    }
};

export const BidProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(bidReducer, initialState);

    return (
        <BidContext.Provider value={{ state, dispatch }}>
            {children}
        </BidContext.Provider>
    );
};

export const useBid = () => {
    const context = useContext(BidContext);
    if (context === undefined) {
        throw new Error('useBid must be used within a BidProvider');
    }
    return context;
};
