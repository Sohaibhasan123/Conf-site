import React from 'react';
import AuthorHome from '../../../Component/AuthorComponent/AuthorHome/AuthorHome';
import SideNavbar from '../../../Component/Shared/SideNavbar/SideNavbar';

const AuthorHomePage = () => {
    return (
        <div className='row'>
            <div className='col-md-2'>
                <SideNavbar></SideNavbar>
            </div>
            <div className='col-md-10'>
               <AuthorHome></AuthorHome>
            </div>
        </div>
    );
};

export default AuthorHomePage;