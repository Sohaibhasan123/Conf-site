import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ReviewerHomePage.css'
import ReactPaginate from 'react-paginate';
const ReviewerHomePage = () => {
    const papers = useLoaderData()
    const [PaperList, setPaperList] = useState(papers.data)
    const [pageNumber, setPageNumber] = useState(0);
    const papersPerPage = 8;
    const paperVisited = pageNumber * papersPerPage;
    const paginatePaper = PaperList.slice(paperVisited, paperVisited + papersPerPage);
    const displayPaper = paginatePaper.map((paper) => {
        return (
            <div class="card p-2 m-2" style={{width: "48%"}}>
                <div class="card-block">
                    <h4 class="card-title text-center">{paper.title}</h4>
                    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                    <p class="card-text p-y-1">{paper.description}</p>
                   <div className='text-end'>
                    <Link to={`http://localhost:8080/${paper.fileURL}`}>Explore</Link>
                   </div>
                </div>
            </div>
        )
    });
    const pageCount = Math.ceil(PaperList.length / papersPerPage);
    const handlePageClick = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div >
            <div className='container row ms-1'>
                {displayPaper}
            </div>
            <div className='ul-center my-3'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="NEXT >>"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousLabel="<< previous"
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"PreviousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}

                />
            </div>
        </div>
    );
};

export default ReviewerHomePage;