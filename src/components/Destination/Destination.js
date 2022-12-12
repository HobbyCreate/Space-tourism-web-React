import React, { useState } from 'react'
import data from '../../assets/data/data.json';
import Navbar from '../navbar/Navbar';
import './Destination.css';

function Destination() {
    const destinations = data.destinations;
    // const [destination] = useState(destinations);
    const [index, setIndex] = useState(0);

    const onClickHandler = (e) => {
        setIndex(e.target.value);
    };

    return (
        <div className='App-dest'>
            <Navbar />
            <div className='destination-container'>
                <div className='destination-image'>
                    <h2>01 PICK YOUR DESTINATION</h2>
                    <span><img src={require(`../../assets/images/destination/${destinations[index].images.png}`)} alt='a' /></span>
                </div>
                <div className='destination-detail'>
                    <div className='destinations-menu'>
                        {
                            destinations.map((item, idex) =>
                                <button
                                    className='menu' value={idex} key={idex} onClick={onClickHandler}>{item.name}
                                </button>)
                        }
                    </div>
                    <div className='destination-name'>
                        <h1>{destinations[index].name}</h1>
                    </div>
                    <div className='destination-description'>
                        <h4>{destinations[index].description}</h4>
                    </div>
                    <div className='distance-travel'>
                        <h4>{destinations[index].distance}</h4>
                        <h4>{destinations[index].travel}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
