import React from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function SignUp() {
    return (
        <>
            <Header />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-end align-items-center">
                        <h1 className="col-md-6 text-white mb-4">Sign up</h1>
                    </div>
                    <div className="row justify-content-end align-items-center">
                        <form className="col-md-6 bg-white p-5 rounded">
                            <div className="form-group">
                                <label for="userFirstname">First Name</label>
                                <input type="email" className="form-control" id="userFirstname" name="firstname" />
                            </div>
                            <div className="form-group">
                                <label for="userLastname">Last Name</label>
                                <input type="email" className="form-control" id="userLastname" name="lastname" />
                            </div>
                            <div className="form-group">
                                <label for="userEmail">Email address</label>
                                <input type="email" className="form-control" id="userEmail" name="email" />
                            </div>
                            <div className="form-group">
                                <label for="userPassword">Password</label>
                                <input type="password" className="form-control" id="userPassword" name="password" />
                            </div>


                            <div className="d-flex">
                                <p>
                                    You already have an account?
                                    <Link to="/login" className="mx-2">Log in</Link>
                                </p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary">Submit</button>
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