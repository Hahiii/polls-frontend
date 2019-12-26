import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function LogIn({ loggedIn }) {
    let [error, setError] = useState(false);
    const email = useRef();
    const password = useRef();

    if (loggedIn) {
        window.location.replace("/")
        return null;
    }

    const submitLogIn = async _ => {
        const dataObj = {
            email: email.current.value,
            password: password.current.value
        }

        try {
            const response = await fetch('https://final-project-86.herokuapp.com/api/user/login', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObj)
            });
            const { data } = await response.json();

            /* Save Token on local Storage */
            if (!response.ok) {
                setError(data.error);
                return null;
            }
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('id', JSON.stringify(data.userId));
            if (localStorage.getItem('id')) {
                window.location.replace('/');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <>
            <Header
                login={true}
            />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-end align-items-center">
                        <h1 className="col-md-6 text-white mb-4">Login</h1>
                    </div>
                    <div className="row justify-content-end align-items-center">
                        <form className="col-md-6 bg-white p-5 rounded">
                            <div className="form-group">
                                <label htmlFor="userEmail">Email address</label>
                                <input type="email" className="form-control" id="userEmail" name="email" ref={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword">Password</label>
                                <input type="password" className="form-control" id="userPassword" name="passwrod" ref={password} />
                            </div>
                            <div className="d-flex">
                                <p>
                                    You don't have an account yet?
                                    <Link to="/signup" className="mx-2">Sign Up</Link>
                                </p>
                            </div>
                            {error && <div className="text-danger">Wrong credentials.</div>}
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault();
                                    submitLogIn();
                                }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export { LogIn }