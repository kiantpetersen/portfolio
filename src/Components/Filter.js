import { useState } from 'react';
import React from 'react';
import '../styles/css/compCss/filter.css'


function Filter(props) {
    const [selectedOption, setSelectedOption] = useState('all');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

        props.handleChange(event.target.value, props.arr, props.name)


    };

    function getOptions(name) {
        let mains = ['halal', 'vegetarian', 'vegan', 'gluten free', 'pescitarian']
        let sides = ['halal', 'vegetarian', 'vegan', 'gluten free', 'pescitarian']
        let drinks = ['soft', 'alcoholic', 'non-alcoholic', 'warm', 'juice', '']

        let options = []
        if (name === 'mains') {
            options = mains

        } else if (name === 'sides') {
            options = sides
        } else {
            options = drinks
        }




        return options.map((el, key) => {
            return <option key={key} value={el}>{el.charAt(0).toUpperCase() + el.slice(1)}</option>
        })
    }

    return (
        <div className="filter-container">
            <label className="filter-label" htmlFor="filter-select">
                Select filter:
            </label>
            <select className="filter-select" id="filter-select" value={selectedOption} onChange={handleOptionChange}>
                <option value="all">All</option>
                {getOptions(props.name)}
                {/* <option value="halal">Halal</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten free">Gluten Free</option>
                <option value="pescitarian">Pescitarian</option> */}
            </select>
        </div>
    );
}


export default Filter;
