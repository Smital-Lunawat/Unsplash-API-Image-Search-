//https://api.unsplash.com/search/photos?page=1&query={searchValue}&client_id=${API_KEP}
import React, { useState } from 'react';

function Imageapp() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const API_KEY = 'ryZqGSoyzXRakk5P6Won3WNiknNxseEhAYBzQgGHMqM';

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const myFun = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.results);
        setData(jsonData.results);
    };

    const handleButtonClick = () => {
        myFun();
    };

    console.log(search);

    return (
        <div className='container'>
            <h1>Image Search App</h1>
            <div className='inputs'>
                <input type='text' placeholder='Search Images..' onChange={handleSearch} />
                <button onClick={handleButtonClick}>Search</button>
            </div>
            <div className='images'>
                {data.map((currVal) => (
                    <div className='image-item'key={currVal.id}>
                        <img src={currVal.urls.full} alt={currVal.alt_description} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Imageapp