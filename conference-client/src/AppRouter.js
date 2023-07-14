import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './Conponent/Home/TopBanner/TopBanner';
import Footer from './Conponent/Shared/Footer/Footer';
import HomeNavBar from './Conponent/Shared/HomeNavBar/HomeNavBar';
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));

const AppRouter = () => {
    return (
        <Router>
            <div className=''>
                <div>
                    <TopBanner />
                    <HomeNavBar />
                </div>
            </div>
            <div>
                <div className='text-dark mainLayout'>
                    <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                    </Suspense>
                </div>

            </div>
<div>
    <Footer />
</div>
  </Router>
    );
};

export default AppRouter;