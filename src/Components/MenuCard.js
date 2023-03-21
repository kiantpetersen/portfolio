import React from 'react';

function MenuCard(props) {
    function getDesc(desc) {
        let markup
        if (desc) {
            markup = <p className='item-desc'>{desc}</p>

        }
        return markup

    }
    return (
        <div className='menu-card'>
            <div className='item-content'>
                <p className='item-name'>{props.name}</p>

                {getDesc(props.desc)}
            </div>
            <div className='price-box'>
                <p className='price'>{props.price}</p>
            </div>

        </div>
    );
}

export default MenuCard;