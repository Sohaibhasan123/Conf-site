import React, { useState } from 'react';
import './manageCommittee.css'
import { AiOutlineUserAdd } from 'react-icons/ai'

const ManageCommittee = () => {
    const [formData, setFormData] = useState({
        committeeName: "",
        members: [{
            name: '',
            affiliation: '',
            email: '',
            designation: "",
        }],

    });
    const [subcommittee, setSubCommittee] = useState({
        subCommitteeName: "",
        subCommitteeMembers: []
    })
    const addFields = () => {
        let object = {
            name: '',
            affiliation: '',
            email: '',
            designation: ""
        }
        let members = [...formData['members'], object]
        setFormData({ ...formData, members })
        console.log(formData);
    }
    const addSubCommittee = () => {
        let object = {
            name: '',
            affiliation: '',
            email: '',
            designation: ""
        }
        let subCommitteeMembers = [...subcommittee['subCommitteeMembers'], object]
        setSubCommittee({ ...subcommittee, subCommitteeMembers })
        console.log(subcommittee);
    }
    const handleFormChange = (event, index) => {

        let data = [...formData['members']];
        data[index][event.target.name] = event.target.value;
        console.log(data);
    }
    return (
        <div>
            <h1 className='text-center'>Create Committee Here</h1>
            <div>
                {

                    formData.members.map((val, index) => {
                        return (
                            <section className='sectionContainer'>
                                <label for="name">Name : </label>
                                <input type="text" id="name" name="name" onChange={(e) => handleFormChange(e, index)} />
                                <label for="affiliation">Affiliation : </label>
                                <input type="text" id="affiliation" name="affiliation" onChange={(e) => handleFormChange(e, index)} />
                                <label for="email">Email : </label>
                                <input type="email" id="email" name="email" onChange={(e) => handleFormChange(e, index)} />
                                <label for="designation">Designation : </label>
                                <input type="text" id="designation" name="designation" onChange={(e) => handleFormChange(e, index)} />
                            </section>
                        );
                    })

                }


                <button onClick={addFields} className="add btn btn-outline-secondary d-flex align-items-center"><AiOutlineUserAdd className="fs-4" /> <strong className="mx-2">Add More Author</strong></button>
            </div>


            <button onClick={addSubCommittee} className="add btn btn-outline-secondary d-flex align-items-center"><AiOutlineUserAdd className="fs-4" /> <strong className="mx-2">Add SubCommittee</strong></button>


            <div>
                <button onClick={addFields} className="add btn btn-outline-secondary d-flex align-items-center"><AiOutlineUserAdd className="fs-4" /> <strong className="mx-2">Add More Author</strong></button>
                {

                    subcommittee.subCommitteeMembers.map((val, index) => {
                        return (
                            <section className='sectionContainer'>
                                <label for="name">Name : </label>
                                <input type="text" id="name" name="name" onChange={(e) => handleFormChange(e, index)} />
                                <label for="affiliation">Affiliation : </label>
                                <input type="text" id="affiliation" name="affiliation" onChange={(e) => handleFormChange(e, index)} />
                                <label for="email">Email : </label>
                                <input type="email" id="email" name="email" onChange={(e) => handleFormChange(e, index)} />
                                <label for="designation">Designation : </label>
                                <input type="text" id="designation" name="designation" onChange={(e) => handleFormChange(e, index)} />
                            </section>
                        );
                    })

                }



            </div>
        </div>
    );
};

export default ManageCommittee;