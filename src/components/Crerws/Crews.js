import React, { useState, useEffect } from 'react'
import data from '../../assets/data/data.json'
import './Crews.css';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import Navbar from '../navbar/Navbar';

function Crews() {
    const crewsData = data.crew;
    const [index, setIndex] = useState(0);
    const [crews] = useState(crewsData);

    useEffect(() => {
        let slider = setInterval(() => {
            if (index + 1 > crews.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1)
            }
        }, 5000);
        return () => clearInterval(slider);
    }, [index, crews])

    return (
        <div className='App-crew'>
            <Navbar />
            <h2 className='hearder'>02 MEET YOUR CREW</h2>
            <div className='crew-container'>
                <div className='crew-bio'>
                    <div className='role'>
                        <h4>{crews[index].role}</h4>
                    </div>
                    <div className='name'>
                        <h2>{crews[index].name}</h2>
                    </div>
                    <div className='bio'>
                        <p>{crews[index].bio}</p>
                    </div>

                    <div className='dot'>
                        {
                            crews.map((item, idex) => {
                                if (idex === index) {
                                    return <RxDotFilled className='shink' key={idex} onClick={() => setIndex(idex)} />
                                } else {
                                    return <RxDot key={idex} onClick={() => setIndex(idex)} />
                                }
                            })
                        }
                    </div>
                </div>
                <div className='crew-image'>
                    <span><img src={require(`../../assets/images/crew/${crews[index].images.png}`)} alt={crews[index].name} /></span>
                </div>
            </div>
        </div>
    )
}

export default Crews
