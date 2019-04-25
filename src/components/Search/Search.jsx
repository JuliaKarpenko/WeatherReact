import React from 'react';
import style from './Search.module.css';

const Search = ({getInput}) => (
    <div>
        <form onSubmit={getInput}>
            <input type="search" name="city" placeholder="Enter city"/> 
            <input className ={style.search} type="submit" value="Найти" />
        </form>
    </div>
)

export default Search;
