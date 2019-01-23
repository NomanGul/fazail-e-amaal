import React, { Component } from "react";
import "./App.css";
import { pdfjs } from "react-pdf";
import { Search } from "./components/Search";
import { Navigation } from "./components/Navigation";
import { PDF } from "./components/PDF";
import { Footer } from "./components/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    searchValue: ""
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  onChangeSearchHandler = e => {
    this.setState({ searchValue: e.target.value });
  };

  search = () => {
    this.setState(state => ({ pageNumber: +state.searchValue }));
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div className="wrap">
          <Search
            searchValue={this.state.searchValue}
            onChangeSearchHandler={this.onChangeSearchHandler}
            search={this.search}
          />
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <Navigation
            goToPrevPage={this.goToPrevPage}
            goToNextPage={this.goToNextPage}
            pageNumber={pageNumber}
          />
        </div>

        <div className="center-pdf">
          <PDF
            onDocumentLoadSuccess={this.onDocumentLoadSuccess}
            pageNumber={pageNumber}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
