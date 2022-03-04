import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho texto="Fiho 1" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho texto="Fiho 2" idade={17} nerd={false}></DiretaFilho>
        </div>
    )
}