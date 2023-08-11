import React from "react";

function AuthorInfo({ formData, setFormData, index, handleFormChange }) {

  return (
    <div className="authorForm">

      <div className="authorContainer pb-5">
        <h4 className=" text-center my-3">Author {index + 1}</h4>
        <div className="d-flex justify-content-around">
          <div>
            <label className="mt-3 text-dark"><strong>First Name : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="First Name..."
              name="firstName"
              value={formData.firstName}
              onChange={event => handleFormChange(event, index)}
            />
          </div>
          <div>
            <label className="mt-3 text-dark"><strong>Last Name : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="Last Name..."
              name="lastName"
              value={formData.lastName}
              onChange={event => handleFormChange(event, index)}
            />
          </div>
        </div>


        <div className="d-flex justify-content-around">
          <div>
            <label className="mt-3 text-dark"><strong>Email : </strong> </label>
            <input
              className='form-control'
              type="email"
              placeholder="Enter Your Email...."
              name="email"
              value={formData.email}
              onChange={event => handleFormChange(event, index)}
            />
          </div>
          <div>
            <label className="mt-3 text-dark"><strong>Affiliation : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="Affiliation...."
              name="affiliation"
              value={formData.affiliation}
              onChange={event => handleFormChange(event, index)}
            />
          </div>
        </div>

        <div className="d-flex justify-content-around">
          <div>
            <label className="mt-3 text-dark"><strong>Country : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="Enter Your Country Name...."
              name="country"
              value={formData.country}
              onChange={event => handleFormChange(event, index)}
            />
          </div>
          <div>
            <label className="mt-3 text-dark"><strong>Address : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="Enter Your Address...."
              name="address"
              value={formData.address}
              onChange={event => handleFormChange(event, index)}
            />
          </div>
        </div>
      </div>



    </div>
  );
}

export default AuthorInfo;
