import React from 'react';
// import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function CreatePoll() {
    return (
        <>
            <Header />
            <section className="container-fluid hero hero--register d-flex flex-grow-1 justify-content-center align-items-center">
                <section className="container">
                    <div className="row justify-content-center align-items-center">
                        <form className="col-md-6 bg-white p-5 rounded">
                            <div className="form-group">
                                <label htmlFor="questions">Questions</label>
                                <input type="text" className="form-control" id="questions" name="questions" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="anwser">Anwser</label>
                                <input type="text" className="form-control" id="anwser" name="anwser" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="validation">Validation</label>
                                <input type="text" className="form-control" id="validation" name="validation" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="deadline">Deadline</label>
                                <input type="date" className="form-control" id="deadline" name="deadline" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export { CreatePoll }