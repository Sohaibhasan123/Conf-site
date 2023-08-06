import React from 'react';
import reviewerServices from '../../../Services/reviewerServices';
import Swal from 'sweetalert2'
const AddReviewer = () => {
    const handleForm = async (event) =>{
        event.preventDefault();
            const form = event.target
            const email =form.email.value;
    
            const contact ={
                
                email
       
            }
    
    
            const res = await reviewerServices.postReviewer(contact)
            if(res){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Reviewer Added SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
    } 

    return (
        <div className='text-center'>
            <h1>Add Reviewer here</h1>
            <form onSubmit={handleForm}>
                        <input className="inputField" type="email" name="email" placeholder="Enter Reviewer email" required />
                        <br />

                        <input className="btn btn-outline-secondary" type="submit" value="Make Reviewer" />

                    </form>
        </div>
    );
};

export default AddReviewer;