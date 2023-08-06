import React from 'react';
import SideNavbar from '../../../Component/Shared/SideNavbar/SideNavbar';
import AuthorSubmitForm from '../../../Component/AuthorComponent/AuthorSubmitForm/AuthorSubmitForm';

const SubmitPaperForm = () => {
    return (
        <div className='row'>
            <div className='col-md-2'>
                <SideNavbar></SideNavbar>
            </div>
            <div className='col-md-10'>
               <AuthorSubmitForm></AuthorSubmitForm>
            </div>
        </div>
    );
};

export default SubmitPaperForm;