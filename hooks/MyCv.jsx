import React from 'react'

export const MyCv = () => {
    const cvFileName = 'Nicolas_CV.pdf';
    const cvFilePath = `/assets/${cvFileName}`;
  
    const handleDownloadCV = () => {
      const downloadLink = document.createElement('a');
      downloadLink.href = cvFilePath;
      downloadLink.download = cvFileName;
      downloadLink.click();
    };
  
    return (
      <>
      <button onClick={handleDownloadCV}>  </button>
      
      </>
        
    );
  };


export default MyCv