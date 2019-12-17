import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function PollsDetailUserView() {
    const headingOne = useRef();
    const headingTwo = useRef();


    const showAnwsersVote = param => {
        if (param.current.className.indexOf("show") >= 0) {
            param.current.classList.remove("show");
            return;
        }
        param.current.classList.add("show");
    }



    return (
        <>
            <Header />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-center align-items-center">
                        <div class="card col-6 p-0">
                            <div class="card-header p-4">Poll</div>
                            <div class="card-body">
                                <h5 class="card-title">How many day a week should we work.?</h5>
                                <form className="col-md-12 bg-white p-0 rounded">
                                    <div class="form-check p-3">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                        <label class="form-check-label" for="exampleRadios1">We should have only 6 days work a week</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label class="form-check-label" for="exampleRadios2">We should have only 3 days work a week</label>
                                    </div>
                                    <div className="form-group mt-4">
                                        <label for="validation">Email</label>
                                        <input type="email" className="form-control" id="validation" name="validation" placeholder="example@example.com"/>
                                    </div>
                                    <div className="form-group mt-4">
                                        <label for="validation">Enter Validation Key</label>
                                        <input type="text" className="form-control" id="validation" name="validation" placeholder="Secret Key"/>
                                    </div>
                                    <p className="">Poll closes in: (time)</p>
                                    <button type="submit" className="btn btn-primary">Submit Vote</button>
                                </form>
                            </div>
                            <div className="card-footer text-muted d-flex justify-content-between">
                                <p className="p-0 m-0">Last modified:  2 days ago</p>
                                <p className="p-0 m-0">Created By: </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export { PollsDetailUserView }