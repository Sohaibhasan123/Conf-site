import React, { useState } from "react";
import  "./Form.css";
import PaperInfo from "./PaperInfo";
import FilesUpload from "./FilesUpload";
import AuthorInfo from "./AuthorInfo";
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io'
import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from "axios";


function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    keywords: "",
    fileURL: "",
    author: [{
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      address: "",
      affiliation: '',
    }],

  });

  const FormTitles = ["Provide Paper Info", "Provide Author Info", "Uploads Your Files"];
  let navigate = useNavigate();
  const addFields = () => {
    let object = {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      address: "",
      affiliation: '',
    }
    let author = [...formData['author'],object]
     setFormData({...formData,author})
    console.log(formData);
  }
  const handleFormChange = (event, index) => {
    
     let data = [...formData['author']];
     data[index][event.target.name] = event.target.value;
     console.log(data);
  }
  const PageDisplay = () => {
    if (page === 0) {
      return <PaperInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <>
          {formData?.author?.map((specific, index) => <AuthorInfo key={index} formData={formData} setFormData={setFormData} specific={specific} index={index} handleFormChange={handleFormChange} />
          )}

          <button onClick={addFields} className="add btn btn-outline-secondary">Add More Author+</button>
        </>


      )



    } else {
      return <FilesUpload formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form-container container m-4">
      
      <div className="">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
          <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer my-4">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
          <IoIosArrowBack />  Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                const proceed = window.confirm("Are You Sure? You Want To Submit")

                if(proceed){
                  const Data = new FormData();

                  Data.append( 'title', formData.title)
                  Data.append( 'abstract', formData.abstract)
                  Data.append( 'keywords', formData.keywords)
                  Data.append( 'fileURL', formData.fileURL)
                  formData.author.forEach(function (element,index) {
                    Data.append(`author[${index}][firstName]`, element.firstName);
                    Data.append(`author[${index}][lastName]`, element.lastName);
                    Data.append(`author[${index}][email]`, element.email);
                    Data.append(`author[${index}][country]`, element.country);
                    Data.append(`author[${index}][address]`, element.address);
                    Data.append(`author[${index}][affiliation]`, element.affiliation);
                })
                  // Data.append( 'author', JSON.stringify(formData.author))

                    axios.post('http://localhost:8080/api/v1/submit', Data)
                    .then(function (response) {
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Reviewer Added SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                        navigate('/history');
                    })
                    .catch(function (error) {
                        console.log(error);
                        Swal.fire({
                          position: 'top-end',
                          icon: 'error',
                          title: 'Paper Submission Failed!',
                          showConfirmButton: false,
                          timer: 1500
                        })
                    });
                }
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : <>Next <MdOutlineArrowForwardIos/></>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
