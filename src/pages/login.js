import React from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function LogIn({ loggedIn }) {
    if (loggedIn) {
        window.location.replace("/")
        return;
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
                                <input type="email" className="form-control" id="userEmail" name="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userPassword">Password</label>
                                <input type="password" className="form-control" id="userPassword" name="" />
                            </div>
                            <div className="d-flex">
                                <p>
                                    You don't have an account yet?
                                    <Link to="/signup" className="mx-2">Sign Up</Link>
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

export { LogIn }