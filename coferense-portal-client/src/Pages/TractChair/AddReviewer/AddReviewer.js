import React, { useEffect, useState } from 'react';
import reviewerServices from '../../../Services/reviewerServices';
import Swal from 'sweetalert2'
import ReviewerList from './ReviewerList';
const AddReviewer = () => {
    const [requestedReviewerList, setRequestedReviewerList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/reviewer")
            .then(res => res.json())
            .then(data => {
                setRequestedReviewerList(data?.data)
            })
    }, [])

    const makeReviewer = (email) =>{
        
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#008000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes !'
      }).then( async (result) => {
        if (result.isConfirmed) {
            const res = await reviewerServices.postSelectedReviewer({'email' : email});
          
            if(res){
                Swal.fire(
                    'Uploaded!',
                    'Successfully Submitted!',
                    'success'
                  )
            console.log(res);
              await reviewerServices.deleteReviewerById(email);
            }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Paper Submission Failed',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          
        }
      })



    }


    return (
        <div className='text-center'>
            <h1 className=''>Make Reviewer here</h1>
            
            <table class="table table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        requestedReviewerList.map((reviewer, index) => <ReviewerList key={index} reviewer={reviewer} index={index} makeReviewer={makeReviewer} />)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AddReviewer;