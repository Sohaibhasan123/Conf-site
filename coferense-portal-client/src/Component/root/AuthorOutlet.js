import React, { useContext } from 'react';
import HomeNavBar from '../Shared/HomeNavBar/HomeNavBar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import items from '../../asset/FakeData/SideNavbarForAuthor.json'
import SideBarMain from '../Shared/SideNavbar/SideBarMain';

const AuthorOutlet = () => {
    const { reviewer } = useContext(AuthContext);
    return (
        <div>
            <div className="row">
                <HomeNavBar />
                <div className="col-2">
                    <div className="sidebar">
                        {items.map((item, index) => <SideBarMain key={index} item={item} />)}
                        {reviewer?.length ? '' : <div
                            className="px-2 d-flex align-items-center" >
                            <i className='bi bi-person-dash'></i>
                            <span className="m-0 p-2"> <Link to='/author/reviewer-qualification' className='sidebar-item plain'>Be Reviewer</Link> </span>
                        </div>}

                    </div>

                </div>
                <div className="col-10">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default AuthorOutlet;