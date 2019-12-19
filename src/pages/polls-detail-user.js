import React, { useRef } from 'react';
// import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsDetailUserView() {
   
    return (
        <>
            <Header 
                user={true}
            />

            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 text-white">Vote</h1>
                </section>
            </section>
            <section className="container bg-white h-100">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <h2 className="">How many day a week should we work.?</h2>
                        <form className="">
                            <div className="form-check p-3">
                                <input className="form-check-input" type="radio" name="answers" id="exampleRadios1" value="option1" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios1">We should have only 6 days work a week</label>
                            </div>
                            <div className="form-check p-3">
                                <input className="form-check-input" type="radio" name="answers" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" htmlFor="exampleRadios2">We should have only 3 days work a week</label>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="validation">Email</label>
                                <input type="email" className="form-control" id="validation" name="validation" placeholder="example@example.com" />
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="validation">Enter Validation Key</label>
                                <input type="text" className="form-control" id="validation" name="validation" placeholder="Secret Key" />
                            </div>
                            <p className="">Poll closes in: (time)</p>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary">Submit Vote</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export { PollsDetailUserView }