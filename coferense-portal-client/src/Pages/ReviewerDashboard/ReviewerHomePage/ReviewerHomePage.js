import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsArrowUpCircleFill } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import './ReviewerHomePage.css'
import ReactPaginate from 'react-paginate';
const ReviewerHomePage = () => {

    const papers = useLoaderData()
    const [PaperList, setPaperList] = useState(papers.data)
    const [open, setOpen] = useState(false);
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
                        <h6 class="card-subtitle text-muted">{paper.description}</h6>
                        <div className='text-end'>
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>



                {/* <!-- Modal --> */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen pe-4">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">{paper.title}</h5>
                                <button type="button" class="btn-close bg-danger p-3" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div style={{ height: "1200px" }}>
                                <iframe title={index} style={{ width: "100%", height: "99%" }} src={`http://localhost:8080/${paper.fileURL}`}></iframe>
                            </div>
                            <div class={`container d-flex  justify-content-between align-items-center ${open ? "d-none" : ""}`} >


                                <div class="text-center d-flex align-items-center my-2">
                                    <div>
                                        <textarea style={{ width: "600px", height: "80px" }} class="form-control me-3 required" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-outline-info"> Add Comment</button>
                                    </div>
                                </div>
                                {/* <div>
                                    <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                                </div> */}
                            </div>
                            <div className='container text-end'>
                                <button onClick={renderOpenClose} type="submit" class="btn btn-outline-dark "> {open? <BsArrowUpCircleFill /> : <BsArrowDownCircle />} </button>
                            </div>
                        </div>
                    </div>
                </div>
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