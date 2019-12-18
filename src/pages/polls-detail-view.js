import React, { useRef, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsDetailView() {
    const headingOne = useRef();
    const headingTwo = useRef();

    const [pollDetail, setPollDetail] = useState(false);
    const id = window.location.search.slice(1);
    useEffect(() => {

        if (!pollDetail) {
            (async () => {
                try {
                    const response = await fetch('http://localhost:8080/api/poll/' + id, {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    const { data } = await response.json();
                    setPollDetail(data);
                } catch (error) {
                    console.error('Error:', error);
                }
            })();
        }
    }, [pollDetail]);

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
            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 text-white">{pollDetail.questions}</h1>
                </section>
            </section>

            <section className="container bg-white h-100">
                <div className="row">
                    <div className="col-12">
                        {pollDetail && <>
                            <div className="container p-5">
                                {pollDetail.anwser.length && pollDetail.anwser.map(anwser => (
                                    <>
                                        <div className=" border-0 m-2">
                                            <div className="">
                                                <h2 className="mb-0">
                                                    Anwser: {anwser.text}
                                                </h2>
                                                <p>Votes: {anwser.votes}</p>
                                            </div>
                                        </div>
                                    </>))}
                                {/* <div className="card border-0 m-2">
                                            <div className="card-header" id="headingTwo">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link" type="button" aria-expanded="false"
                                                        onClick={(e) => showAnwsersVote(headingTwo)}>Anwser B</button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse" ref={headingTwo}>
                                                <div className="card-body">28 Votes</div>
                                            </div>
                                        </div> */}
                            </div>

                            {/* Enable edit button */}
                            {/* <button className="btn btn-primary">Edit Poll</button> */}

                        </>}
                        <div className="d-flex justify-content-end align-items-center">
                            <p className="mr-3">This Poll is still Active</p>
                            <p className="text-muted mr-3">|</p>
                            <p className="text-right">Last modified:  2 days ago</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export { PollsDetailView }