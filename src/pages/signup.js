import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function SignUp() {
    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const password = useRef();
    const submitRegistration = async _ => {

        const dataObj = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            password: password.current.value
        }

        try {
            const response = await fetch('http://localhost:8080/api/user/register', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObj)
            });
            const { data } = await response.json();

            /* Save Token on local Storage */
            localStorage.setItem('token', JSON.stringify(data.token));
            window.location.replace('/');
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <>
            <Header 
                login={false}
            />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-end align-items-center">
                        <h1 className="col-md-6 text-white mb-4">Sign up</h1>
                    </div>
                    <div className="row justify-content-end align-items-center">
                        <form className="col-md-6 bg-white p-5 rounded">
                            <div className="form-group">
                                <label htmlFor="userFirstname">First Name</label>
                                <input type="text" className="form-control" id="userFirstname" name="firstname" ref={firstname} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userLastname">Last Name</label>
                                <input type="text" className="form-control" id="userLastname" name="lastname" ref={lastname} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userEmail">Email address</label>
                                <input type="email" className="form-control" id="userEmail" name="email" ref={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword">Password</label>
                                <input type="password" className="form-control" id="userPassword" name="password" ref={password} />
                            </div>

                            <div className="d-flex">
                                <p>
                                    You already have an account?
                                    <Link to="/login" className="mx-2">Log in</Link>
                                </p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={((e) => {
                                    e.preventDefault();
                                    submitRegistration();
                                })}>Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export { SignUp }