import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsList({ token }) {
    token = token.slice(1, token.length - 1);
    const [polls, setPolls] = useState(false);

    useEffect(() => {
        if (!token) {
            window.location.replace('/signup')
            return;
          }
          
        if (!polls) {
            (async () => {
                try {
                    const response = await fetch('http://localhost:8080/api/poll', {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        headers: {
                            'Content-Type': 'application/json',
                            'auth': `Bearer ${token}`
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

    return (
        <>
            <Header 
                admin={token ? true : false}
            />
            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 text-white">My Polls</h1>
                </section>
            </section>

            <section className="container">
                <div className="row">
                    <ul className="col-sm-12 col-md-8 my-5 list-group">
                        {polls.length && polls.map(poll =>
                            <li className="list-group-item rounded-0 border-top-0 border-left-0 border-right-0 border-primary" key={poll._id}>
                                <Link to={'/polls/detail/?' + poll._id} className="d-block text-dark text-decoration-none p-2" >
                                    {poll.questions}
                                    <span className="btn btn-sm btn-link text-decoration-none">
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