import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import linkIcon from '../images/link.png';
import keyIcon from '../images/key.png';

function PollsDetailView({ token }) {
    const [pollDetail, setPollDetail] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        if (!token) {
            window.location.replace('/signup');
            return;
        }
        token = token.slice(1, token.length - 1);
        if (!pollDetail) {
            (async () => {
                try {
                    const response = await fetch('https://final-project-86.herokuapp.com/api/poll/' + id, {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        headers: {
                            'Content-Type': 'application/json',
                            'auth': `Bearer ${token}`
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
            <Header
                admin={token ? true : false}
            />
            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 py-2 text-white">{pollDetail.questions}</h1>
                </section>
            </section>

            <section className="container flex-grow-1">
                <div className="row">
                    <div className="col-12">
                        {pollDetail && <>
                            <div className="py-5">
                                {pollDetail.anwser.length && pollDetail.anwser.map((anwser, i) => (
                                    <div className=" border-0 my-2" key={i}>
                                        <div className="">
                                            <h2 className="mb-0">
                                                Anwser: {anwser.text}
                                            </h2>
                                            <p>Votes: {anwser.votes}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>}
                        <div>
                            <label>Share link and validation with voter to be able to vote:</label>
                            <p className="text-dark">
                                <span className="rounded-circle border border-secondary icon mr-2">
                                    <img src={linkIcon} />
                                </span>
                                https://polls-frontend.shalanazim.now.sh/polls/user/detail/{pollDetail._id}  
                            </p>

                            <p className="text-dark">
                            <span className="rounded-circle border border-secondary icon mr-2">
                                    <img src={keyIcon} />
                                </span>
                                {pollDetail.validation}  
                            </p>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">
                            
                                {
                                    new Date().toDateString() === new Date(pollDetail.deadline).toDateString() ? 
                                    <p className="mr-3">
                                    Poll is closed.
                                    </p> :
                                    <div className="mr-3">
                                        <div className="text-muted small text-left">
                                            This Poll is Active until:
                                        </div>
                                        <span>{new Date(pollDetail.deadline).toDateString()}</span>
                                    </div>
                                }
                            
                            {/* <p className="text-muted mr-3">|</p> */}

                            <div className="border-left pl-3 text-right">
                                <div className="text-muted small text-left">
                                    Date of creation: 
                                </div>
                                <span>
                                    {new Date(pollDetail.createdAt).toDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export { PollsDetailView }