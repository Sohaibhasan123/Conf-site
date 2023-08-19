import React from "react";
import PaperDomainFakeData from '../../../asset/FakeData/PaperDomain.json'

function FilesUpload({ formData, setFormData }) {
  return (
    <div className="input-group m-5 d-flex align-items-center">
      <div className="d-flex align-items-center">
        <label className="mt-3 text-dark me-4"><strong>Upload Paper : </strong></label>
        <input type='file'
          required
          className="form-control w-50"
          onChange={(e) => {
            setFormData({ ...formData, fileURL: e.target.files[0] })
          }} />
      </div>
      <div>
        <div className="d-flex align-items-center">
          <label className="mt-3 text-dark me-4"><strong>Paper Domain : </strong></label>
          <select id="paperDomain" class="form-select w-50" aria-label="Default select example"
          onChange={(e) => {
            var strUser = document.getElementById("paperDomain").value;
            
            setFormData({ ...formData, paperDomain: strUser })
            console.log('2111111111111111111111', formData);
          }}
          >
            <option selected>Open this select menu</option>
            {
              PaperDomainFakeData.map(domain => <option key={domain.id} value={domain.field}>{domain.field}</option>)
            }
          </select>
          
        </div>
      </div>
    </div>
  );
}

export default FilesUpload;
