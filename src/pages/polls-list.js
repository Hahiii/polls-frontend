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
            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 text-white">My Polls</h1>
                </section>
            </section>

            <section className="container">
                <div className="row">
                    <ul className="col-sm-12 col-md-8 my-5 list-group">
                        {polls.length && polls.map(poll =>
                            <li className="list-group-item rounded-0 border-top-0 border-left-0 border-right-0 border-primary">
                                <Link to={'/polls/detail/?' + poll._id} className="d-block text-dark text-decoration-none p-2" key={poll._id}>
                                    {poll.questions}
                                    <span class="btn btn-sm btn-link text-decoration-none">
                                        &rarr;
                                    </span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    );
}

export { PollsList }