import React from "react";

function AuthorInfo({ formData, setFormData, index}) {

  return (
    <div className="authorForm">

      <div className="authorContainer border border-secondary pb-5">
        <h4 className=" text-center my-3">Author {index + 1}</h4>
        <div className="d-flex justify-content-around">
          <div>
            <label className="mt-3 text-dark"><strong>First Name : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="First Name..."
              name="firstName"
              value={formData['author'][index]['firstName']}
              onChange={event => {
                let data = [...formData['author']];
                data[index][event.target.name] = event.target.value 
                setFormData(
                  {...formData, author: data}
                )
              }}
            />
          </div>
          <div>
            <label className="mt-3 text-dark"><strong>Last Name : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="Last Name..."
              name="lastName"
              value={formData['author'][index]['lastName']}
              onChange={event => {
                let data = [...formData['author']];
                data[index][event.target.name] = event.target.value
                setFormData(
                  {...formData, author: data}
                )
              }}
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
              value={formData['author'][index]['email']}
              onChange={event => {
                let data = [...formData['author']];
                data[index][event.target.name] = event.target.value
                setFormData(
                  {...formData, author: data}
                )
              }}
            />
          </div>
          <div>
            <label className="mt-3 text-dark"><strong>Affiliation : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="Affiliation...."
              name="affiliation"
              value={formData['author'][index]['affiliation']}
              onChange={event => {
                let data = [...formData['author']];
                data[index][event.target.name] = event.target.value
                setFormData(
                  {...formData, author: data}
                )
              }}
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
              value={formData['author'][index]['country']}
              onChange={event => {
                let data = [...formData['author']];
                data[index][event.target.name] = event.target.value
                setFormData(
                  {...formData, author: data}
                )
              }}
            />
          </div>
          <div>
            <label className="mt-3 text-dark"><strong>Address : </strong> </label>
            <input
              className='form-control'
              type="text"
              placeholder="Enter Your Address...."
              name="address"
              value={formData['author'][index]['address']}
              onChange={event => {
                let data = [...formData['author']];
                data[index][event.target.name] = event.target.value
                setFormData(
                  {...formData, author: data}
                )
              }}
            />
          </div>
        </div>
      </div>



    </div>
  );
}

export default AuthorInfo;
