import React from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function LogIn() {
    return (
        <>
            <Header />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-center align-items-center">
                        <form className="col-md-6 bg-white p-5 rounded">
                            <div className="form-group">
                                <label for="userEmail">Email address</label>
                                <input type="email" className="form-control" id="userEmail" name="" />
                            </div>
                            <div className="form-group">
                                <label for="userPassword">Password</label>
                                <input type="password" className="form-control" id="userPassword" name="" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link to="/" className="btn btn-secondary">Sign Up</Link>
                        </form>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export { LogIn }