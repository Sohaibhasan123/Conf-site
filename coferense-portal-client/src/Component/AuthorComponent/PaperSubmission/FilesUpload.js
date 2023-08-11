import React from "react";

function FilesUpload({ formData, setFormData }) {
  return (
    <div className="input-group m-5 d-flex align-items-center w-50">
      <label className="mt-3 text-dark me-4"><strong>Upload your Paper : </strong></label>
      <input type='file'
      className="form-control"
        onChange={(e) => {
          setFormData({ ...formData, fileURL: e.target.files[0] })
        }} />
    </div>
  );
}

export default FilesUpload;
