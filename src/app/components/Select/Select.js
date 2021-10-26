import React from 'react';
import './Select.css'

const Select = ({id, label, options, onChange}) => {

    const items = options.map(el => <option key={el+id} value={el}>{el}</option>)

    return (
        <div className="input-field select-wrapper">
            <select
                id={id}
                onChange={onChange}
            >
                {items}
            </select>
            <label className={'select-label'}>{label}</label>
        </div>
    );
};

export default Select;