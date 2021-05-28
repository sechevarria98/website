import {useState} from 'react';
import {Document, Page } from 'react-pdf';
import {pdfjs} from 'react-pdf';
import Button from '../utils/Button';

import '../../App.css';
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
            <Document
                className = "docs"
                file="/website/assets/docs/Echevarria_Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
                <Button href = "/website/assets/docs/Echevarria_Resume.pdf" target="_blank"/>
            </Document>
            <p className="pagenum">Page {pageNumber} of {numPages}</p>
        </div>
    );  
}

export default Resume;