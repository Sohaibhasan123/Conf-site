import React, { useContext } from 'react';
import AuthorHome from '../../../Component/AuthorComponent/AuthorHome/AuthorHome';
import SideNavbar from '../../../Component/Shared/SideNavbar/SideNavbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Component/Context/AuthProvider/AuthProvider';
import items from '../../../asset/FakeData/SideNavbar.json'
import SideBarMain from '../../../Component/Shared/SideNavbar/SideBarMain';

const AuthorHomePage = () => {
    const { reviewer } = useContext(AuthContext);
    return (
        <div className='row'>
            <div className='col-md-2'>
                <div className="sidebar">
                    {items.map((item, index) => <SideBarMain key={index} item={item} />)}
                    {reviewer?.length ? '' : <div
                        className="px-2 d-flex align-items-center" >
                        <i className='bi bi-person-dash'></i>
                        <span className="m-0 p-2"> <Link to='/reviewer-qualification' className='sidebar-item plain'>Be Reviewer</Link> </span>
                    </div>}
                    
                </div>
            </div>
            <div className='col-md-10'>
                <AuthorHome></AuthorHome>
            </div>
        </div>
    );
};

export default AuthorHomePage;