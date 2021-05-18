import React, {useState} from 'react';
import '../../App.css';
import {Document, Page} from 'react-pdf';
import {pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <div className="page">
            <h2>RESUME</h2>
            <Document
                className = "docs"
                file="/assets/docs/Echevarria_Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p className="pagenum">Page {pageNumber} of {numPages}</p>
        </div>
    );  
}

export default Resume;