import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsList({ token, loggedIn }) {
    loggedIn = loggedIn.slice(1, loggedIn.length - 1);
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
                    const response = await fetch('http://localhost:8080/api/poll/list/' + loggedIn, {
                        method: 'GET', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        headers: {
                            'Content-Type': 'application/json',
                            'auth': `Bearer ${token}`
                        },
                        // body: null // body data type must match "Content-Type" header
                    });
                    const { data } = await response.json();
                    console.log("------", data)
                    setPolls(data);
                } catch (error) {
                    console.error('Error:', error);
                }
            })();
        }
    }, [polls]);


    const deletePollById = async (id) => {
        try {
            const response = await fetch('http://localhost:8080/api/poll/delete/' + id, {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json',
                    'auth': `Bearer ${token}`
                },
            });
            const { data } = await response.json();
            console.log("------", data)
            setPolls(data);
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return (
        <>
            {polls ? <>
                <Header
                    list={true}
                    admin={token ? true : false}
                />
                <section className="container-fluid bg-primary">
                    <section className="container">
                        <h1 className="display-2 text-white">My Polls</h1>
                    </section>
                </section>

                <section className="container h-100">
                    <div className="row">
                        <ul className="col-sm-12 col-md-8 my-5 list-group">
                            {polls.length && polls.map(poll =>
                                <li className="list-group-item d-flex justify-content-between align-items-center rounded-0 border-top-0 border-left-0 border-right-0 border-primary" key={poll._id}>
                                    <Link to={'/polls/detail/?' + poll._id} className="d-block text-dark text-decoration-none p-2" >
                                        {poll.questions}
                                        <span className="btn btn-sm btn-link text-decoration-none">&rarr;</span>
                                    </Link>
                                    <span className="btn btn-sm btn-link text-decoration-none" onClick={() => deletePollById(poll._id)}>&#10008;</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </section>

                <Footer />
            </> : <div className="d-fex vh-100 justify-content-center align-item-center spinner"></div>}
        </>
    );
}

export { PollsList }