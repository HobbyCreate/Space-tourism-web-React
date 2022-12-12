import React from 'react'
import Navbar from '../navbar/Navbar';
import './Home.css';

function Home() {
    return (
        <div className="App-home">
            <Navbar />
            <div className='home-container'>
                <div className='grid-one'>
                    <h4>So, you want to travel to</h4>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className='grid-two'>
                    <div className='circle'>
                        <h3>Explore</h3>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
