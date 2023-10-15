import React, { useState } from 'react'
import "./Home.scss"
import { Link, useLocation ,useNavigate } from 'react-router-dom'

//import { useDropzone } from 'react-dropzone';
//import htmlToDocx from 'html-to-docx';
// import saveAs from 'file-saver';


const Home = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const [wordOutput, setWordOutput] = useState('');

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const convertToWord = () => {
    const convertedWord = 'Converted Word Document Content';
    setWordOutput(convertedWord);
  };
  

  return (
    <>
    <div className='links'>
         {!currentUser && (
            <Link to="/login" className='link'>Sign In</Link>
          )}
        
        {!currentUser && <Link to="/register" className='link'>Register</Link>}
        {currentUser && (
            <Link className='link' onClick={handleLogout}>Logout</Link>
          )}
    </div>
    <div className="container">
      <h1>HTML to Word Converter</h1>
      <div className="converter">
        <div className="input-section">
          <h2>HTML Input</h2>
          <textarea
            value={htmlInput}
            onChange={(e) => setHtmlInput(e.target.value)}
            placeholder="Paste your HTML here..."
          />
          <button onClick={convertToWord}>Convert to Word</button>
        </div>
        <div className="output-section">
          <h2>Word Output</h2>
          <div className="word-output">{wordOutput}</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home