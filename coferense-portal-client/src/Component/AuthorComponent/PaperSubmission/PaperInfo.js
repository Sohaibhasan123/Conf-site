import React from "react";

function PaperInfo({ formData, setFormData }) {
  return (
    <div className="w-70 m-auto authorContainer my-5">
      <div>
        <label className="mt-3 text-dark"><strong>Title : </strong> </label>
        <input
        className='form-control'
          type="text"
          placeholder="Title ...."
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
        />
      </div>
      <div>
        <label className="mt-3 text-dark"><strong>Abstract : </strong> </label>
        <textarea
        className='form-control h-100'
          type="text"
          placeholder="Abstract...."
          value={formData.abstract}
          onChange={(event) =>
            setFormData({ ...formData, abstract: event.target.value })
          }
        />
      </div>
      <div>
        <label className="mt-3 text-dark"><strong>Keywords : </strong> </label>
        <input
        className='form-control'
          type="text"
          placeholder="Keywords...."
          value={formData.keywords}
          onChange={(event) =>
            setFormData({ ...formData, keywords: event.target.value })
          }
        />
      </div>

    </div>
  );
}

export default PaperInfo;
