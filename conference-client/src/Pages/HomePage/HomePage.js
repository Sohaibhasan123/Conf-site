import React from 'react';
import Carousel from '../../Conponent/Home/Carousel/Carousel';
import HomeContent from '../../Conponent/Home/HomeContent/HomeContent';
import SideBar from '../../Conponent/Shared/SideBar/SideBar';

const HomePage = () => {
    return (
        <div>
            <Carousel />
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-9'>
                        <HomeContent />
                    </div>
                    <div className='col-md-3 border border-bottom-0 border-end-0 h-75 align-items-center'>
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;