import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import data from '../../assets/data/data.json';
import './Technology.css';

function Technology() {
    const technology = data.technology;
    const [index, setIndex] = useState(0);

    const onClickHandler = (e) => {
        setIndex(e.target.value);
    };

    return (
        <div className='App-tech'>
            <Navbar />
            <h2 className='hearder'>03 SPACE LUNCH 101</h2>
            <div className='tech-container'>
                <div className='tech-Btn'>
                    {
                        technology.map((item, idex) =>
                            <button
                                onClick={onClickHandler} value={idex} key={idex}>{idex + 1}
                            </button>)
                    }
                </div>
                <div className='tech-detail'>
                    <p className='tech-head'>The Technology</p>
                    <h1 className='tech-name'>{technology[index].name}</h1>
                    <p className='tech-dest'>{technology[index].description}</p>
                </div>
                <div className='tech-image'>
                    <span><img src={require(`../../assets/images/technology/${technology[index].images.portrait}`)} alt={technology[index].name} /></span>
                </div>
            </div>
        </div>
    )
}

export default Technology
