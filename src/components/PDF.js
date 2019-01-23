import React from "react";
import { Document, Page } from "react-pdf";
import pdffa from "../FAZAIL_E_AAMAAL.pdf";

export const PDF = ({ onDocumentLoadSuccess, pageNumber }) => {
  return (
    <Document
      file={pdffa}
      onLoadSuccess={onDocumentLoadSuccess}
      className="center-pdf"
    >
      <Page pageNumber={pageNumber} />
    </Document>
  );
};
