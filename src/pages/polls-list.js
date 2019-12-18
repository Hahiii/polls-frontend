import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsList() {
    const [polls, setPolls] = useState(false);
    useEffect(() => {
        if (!polls) {
            (async () => {
                try {
                    const response = await fetch('http://localhost:8080/api/poll', {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        // body: null // body data type must match "Content-Type" header
                    });
                    const { data } = await response.json();
                    setPolls(data);
                } catch (error) {
                    console.error('Error:', error);
                }
            })();
        }
    }, [polls]);
    console.log(polls);
    
    return (
        <>
            <Header />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="card col-6 p-0">
                            <div className="card-header text-center p-5">My Polls</div>
                            <div className="card-body">
                                <div className="list-group list-group-flush">
                                    {polls.length && polls.map(poll => 
                                        <Link to={'/polls/detail/'+poll._id} className="list-group-item list-group-item-action" key={poll._id}>{poll.questions}</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export { PollsList }