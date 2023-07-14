import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import  {FaUser} from 'react-icons/fa';
import  {MdOutlineRateReview} from 'react-icons/md';
import  {RiAdminFill} from 'react-icons/ri';
import  {FaUserShield} from 'react-icons/fa';
import  {HiOutlineHome} from 'react-icons/hi';
import  {ImPhone} from 'react-icons/im';


const SideBar = () => {
    return (
        <div>

            <div className='sidebar'>
                {
                    <nav className="overflow-auto forRightScroll">
                        <h6 className='text-center'><button type="button" class="btn btn-outline-primary">Submit Paper</button></h6>
                        <h6>
                        <Link to='/' className="text-dark"><HiOutlineHome /> Home Page</Link>
                        </h6>
                        <h6>
                            <Link to='/admin/orderList' className="my-4 text-dark"><FaUser />Author LogIn </Link>
                        </h6>

                        <h6>
                        <Link to='/addService' className="mb-4 text-dark"><MdOutlineRateReview/> Reviewer LogIn </Link>
                        </h6>
                        <h6>
                        <Link to='/manageService' className="mb-4 text-dark"><FaUserShield/> Admin LogIn</Link>
                        </h6>
                        <h6>
                        <Link to='/' className="text-dark"><RiAdminFill />  TPC Chair Login</Link>
                        </h6>
                        <h6>
                        <Link to='/' className="text-dark"><ImPhone />  Support</Link>
                        </h6>

                    </nav>
                }

            </div>
        </div>
    );
};

export default SideBar;