import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import reviewerServices from '../../../Services/reviewerServices';

const ManageReviewer = () => {
    const loadedUser = useLoaderData();
    const [reviewersList, setReviewersList] = useState(loadedUser.data)
    const removeReviewer = async (email) =>{


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await reviewerServices.deleteSelectedReviewerByEmail(email);

                if (res) {
                    Swal.fire(
                        'Deleted!',
                        'Successfully Submitted!',
                        'success'
                    )
                    const remainingUsers = reviewersList.filter(user => user.email !== email)
                    setReviewersList(remainingUsers)

                } else {
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
        <>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>{
                    reviewersList.map((reviewer, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{reviewer.name}</td>
                                <td>{reviewer.email}</td>
                                <td><button type="button" class="btn btn-danger" onClick={()=>removeReviewer(reviewer.email)}> Assign </button></td>
                            </tr>
                        )

                    })
                }

                </tbody>
            </table>

        </>
    );
};

export default ManageReviewer;