import React from 'react';
import SideNavbar from '../../../Component/Shared/SideNavbar/SideNavbar';
import Form from '../../../Component/AuthorComponent/PaperSubmission/Form'

const SubmitPaperForm = () => {
    return (
        <div className='row'>
            <div className='col-md-2'>
                <SideNavbar></SideNavbar>
            </div>
            <div className='col-md-10'>
               <Form></Form>
            </div>
        </div>
    );
};

export default SubmitPaperForm;