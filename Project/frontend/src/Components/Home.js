import React, { useState } from 'react'
import "./Home.css"
// import { useNavigate } from 'react-router-dom'

import { useDropzone } from 'react-dropzone';
//import htmlToDocx from 'html-to-docx';
// import saveAs from 'file-saver';


const Home = () => {


  //const [uploadedHTML, setUploadedHTML] = useState(null);

  // const onFileUpload = async (event) => {
  //   const formData = new FormData();
  //   formData.append('file', event.target.files[0]);

  //   try {
  //     const response = await fetch('http://localhost:5000/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const blob = await response.blob();
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = 'converted.docx';
  //       a.click();
  //       window.URL.revokeObjectURL(url);
  //     } else {
  //       console.error('File upload failed');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // return (
  //   <div className="Home">
  //     <header className="Home-header">
  //       <h1>HTML+CSS File Upload</h1>
  //       <input type="file" accept=".html, .css" onChange={onFileUpload} />
  //     </header>
  //   </div>
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Handle success
          console.log('File uploaded successfully.');
        } else {
          // Handle errors
          console.error('File upload failed. Server responded with status:', response.status);
        }
      } catch (error) {
        console.error('File upload failed. Network error:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept=".html, .css" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
}

export default Home