import React, { useState } from 'react';
import { menuObj } from './menuArray';
import '../styles/css/compCss/menu.css';
import MenuCard from './MenuCard';
import menuImg1 from '../styles/images/menu_img_1.jpg'
import menuImg2 from '../styles/images/menu_img_2.jpg'
import menuImg3 from '../styles/images/menu_img_3.jpg'
import Filter from './Filter';
function Menu(props) {
    const [filteredMains, setFilteredMains] = useState(menuObj.mains)
    const [filteredSides, setFilteredSides] = useState(menuObj.sidesArr)
    const [filteredDrinks, setFilteredDrinks] = useState(menuObj.drinksArr)

    function handleChange(filter, arr, name) {
        filterArr(arr, filter, name)
    }

    function filterArr(arr, filter, name) {
        if (filter === 'all') {
            if (name === 'mains') {
                setFilteredMains(arr)

            }
            if (name === 'drinks') {
                setFilteredDrinks(arr)
            }
            if (name === 'sides') {
                setFilteredSides(arr)
            }

            getMenu(arr)
        } else {

            let newArr = arr.filter(function (item) {
                return item.dietary.includes(filter)
            })
            console.log(newArr)

            if (name === 'mains') {
                setFilteredMains(newArr)
                getMenu(filteredMains)

            } else if (name === 'sides') {
                setFilteredSides(newArr)
                getMenu(filteredSides)


            } else if (name === 'drinks') {
                setFilteredDrinks(newArr)
                getMenu(filteredDrinks)

            }


        }


    }
    function getMenu(arr) {

        return arr.map((main, key) => {
            return <MenuCard key={key} name={main.name} desc={main.description} price={main.price} type={main.type} />
        })

    }
    return (
        <div className='menu-section'>



            <h2 className='secondary-heading'>
                Menu
            </h2>
            <div className='grid menu-grid'>
                <div className='menu-img-container pizza'>
                    <img className='pizza-img ' src={menuImg1} alt='pizza_img' />
                </div>
                <div className='menu-img-container  drink'>
                    <img className='pizza-img' src={menuImg2} alt='pizza_img' />
                </div>
                <div className='menu-img-container drink burger'>
                    <img className='pizza-img' src={menuImg3} alt='pizza_img' />
                </div>
                <div className='row'>
                    <div className='col menu-col'>
                        <h3 className='menu-heading'>Mains</h3>
                        <Filter name='mains' arr={menuObj.mains} handleChange={handleChange} />
                        {getMenu(filteredMains)}

                    </div>
                    <div className='col  menu-col'>
                        <h3 className='menu-heading'>Sides</h3>
                        <Filter name='sides' arr={menuObj.sidesArr} handleChange={handleChange} />
                        {getMenu(filteredSides)}

                    </div>
                    <div className='col  menu-col'>
                        <h3 className='menu-heading'>Beverages</h3>
                        <Filter name='drinks' arr={menuObj.drinksArr} handleChange={handleChange} />
                        {getMenu(filteredDrinks)}

                    </div>
                </div>

            </div>


        </div>
    );
}

export default Menu;