import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsDetailUserView() {
    const [optionVal, setOptionVal] = useState('');
    const [pollDetail, setPollDetail] = useState(false);
    const [notVoted, setNotVoted] = useState(false);
    const email = useRef();
    const validation = useRef();
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        if (!pollDetail) {
            (async () => {
                try {
                    const response = await fetch('https://final-project-86.herokuapp.com/api/poll/user/' + id, {
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

    const submitVote = async _ => {
        const voteObj = {
            text: optionVal,
            email: email.current.value,
            validation: validation.current.value
        }

        try {
            const response = await fetch('https://final-project-86.herokuapp.com/api/poll/vote/' + id, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(voteObj)
            });

            const { data } = await response.json()
            setNotVoted(data)
        } catch (error) {

            console.error('Error:', error);
        }
    }



    return (
        <>
            <Header
                user={true}
            />

            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 py-2 text-white">Vote</h1>
                </section>
            </section>
            {!notVoted ? <>
                <section className="container flex-grow-1">
                    <div className="row">
                        {pollDetail && <>
                            <div className="col-md-6 p-5">
                                <h2 className="">{pollDetail.questions}</h2>
                                <form className="">
                                    {pollDetail.anwser.map((anwser, i) =>
                                        <div className="form-check p-3" key={i}>
                                            <input className="form-check-input" type="radio" name="answers" id="exampleRadios1" value={anwser.text} onChange={(e) => setOptionVal(e.target.value)} />
                                            <label className="form-check-label" htmlFor="exampleRadios1">{anwser.text}</label>
                                        </div>
                                    )}
                                    <div className="form-group mt-4">
                                        <label htmlFor="validation">Email</label>
                                        <input type="email" className="form-control" id="validation" name="validation" placeholder="example@example.com" ref={email} />
                                    </div>
                                    <div className="form-group mt-4">
                                        <label htmlFor="validation">Enter Validation Key</label>
                                        <input type="text" className="form-control" id="validation" name="validation" placeholder="Secret Key" ref={validation} />
                                    </div>
                                    <p className="">{new Date().toDateString() === new Date(pollDetail.deadline).toDateString() ? `Poll is closed.` : `Poll closes on: ${new Date(pollDetail.deadline).toDateString()}`}</p>
                                    {new Date().toDateString() === new Date(pollDetail.deadline).toDateString() ? `` :
                                        <div className="d-flex justify-content-end">
                                            <button type="button" className="btn btn-primary" onClick={(e) => {
                                                e.preventDefault();
                                                submitVote();
                                            }}>Submit Vote</button>
                                        </div>
                                    }
                                </form>
                            </div>
                        </>}
                    </div>
                </section>
            </> : <>
                    <div className="vh-100 bg-light" id="exampleModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-success text-center m-4 p-5">Your Vote has been successful submited.</h5>
                                    <button type="button" className="close">
                                        <span onClick={(e) => {
                                            e.preventDefault();
                                            window.location.replace("/");
                                        }}>&times;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
            <Footer />
        </>
    );
}

export { PollsDetailUserView }