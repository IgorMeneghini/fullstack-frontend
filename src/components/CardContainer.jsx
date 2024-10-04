import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';

const CardContainer = () => {
    const [selectedButton, setSelectedButton] = useState('Invited');

    return (
        <div>
            <ButtonGroup selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
        </div>
    );
};

export default CardContainer;
