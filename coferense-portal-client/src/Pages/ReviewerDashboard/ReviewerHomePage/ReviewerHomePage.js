import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsArrowUpCircleFill } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import './ReviewerHomePage.css'
import ReactPaginate from 'react-paginate';
import OpenModalByReviewer from '../OpenModalByReviewer/OpenModalByReviewer';
const ReviewerHomePage = () => {

    const papers = useLoaderData()
    const [PaperList, setPaperList] = useState(papers.data)
    const [open, setOpen] = useState(false);
    const [link , setLink] = useState('');
    const renderOpenClose = () => {
        setOpen(!open)
    }
    const [pageNumber, setPageNumber] = useState(0);
    const papersPerPage = 8;
    const paperVisited = pageNumber * papersPerPage;
    const paginatePaper = PaperList.slice(paperVisited, paperVisited + papersPerPage);
    const displayPaper = paginatePaper.map((paper, index) => {
        return (

            <>
                <div class="card p-2 m-2" style={{ width: "48%" }}>
                    <div class="card-block">
                        <h4 class="card-title text-center">{paper.title}</h4>
                        <h6 class="card-subtitle text-muted">{paper.abstract}</h6>
                        <div className='text-end'>
                            {/* <!-- Button trigger modal --> */}
                            <Link to={`/reviewer/add-review/${paper._id}`}  state = {{
                                    paper : paper
                                }} class="btn btn-outline-info">
                                Add Review
                            </Link>
                            <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>setLink(paper.fileURL)}>
                                Open PDF
                            </button>
                        </div>
                    </div>
                </div>



                {/* <!-- Modal --> */}
                <OpenModalByReviewer paper={paper} link = {link}></OpenModalByReviewer>
            </>
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