// Confetti.js
import React from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = ({ width, height }: any) => {
    return (
        <Confetti
            width={width}
            height={height}
        />
    );
};

export default ConfettiComponent;
