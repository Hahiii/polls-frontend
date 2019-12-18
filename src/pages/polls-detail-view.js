import React, { useRef } from 'react';
// import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsDetailView() {
    const headingOne = useRef();
    const headingTwo = useRef();


    const showAnwsersVote = param => {
        if (param.current.className.indexOf("show") >= 0) {
            param.current.classList.remove("show");
            return;
        }
        param.current.classList.add("show");
    }



    return (
        <>
            <Header />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="card col-6 p-0">
                            <div className="card-header text-center p-4">My Poll</div>
                            <div className="card-body">
                                <h5 className="card-title p-1">Poll question</h5>
                                <div className="container p-5">
                                    <div className="card border-0 m-2">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link" type="button" aria-expanded="false"
                                                    onClick={(e) => showAnwsersVote(headingOne)}>Anwser A</button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse" ref={headingOne}>
                                            <div className="card-body">258 Votes</div>
                                        </div>
                                    </div>
                                    <div className="card border-0 m-2">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link" type="button" aria-expanded="false"
                                                    onClick={(e) => showAnwsersVote(headingTwo)}>Anwser B</button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" ref={headingTwo}>
                                            <div className="card-body">28 Votes</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text">This Poll is still Active</p>
                                <button className="btn btn-primary">Edit Poll</button>
                            </div>
                            <div className="card-footer text-muted">Last modified:  2 days ago</div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export { PollsDetailView }