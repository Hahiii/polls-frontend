import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import linkIcon from '../images/link.png';
import keyIcon from '../images/key.png';

function CreatePoll({ token, loggedIn }) {
    token = token.slice(1, token.length - 1);
    loggedIn = loggedIn.slice(1, loggedIn.length - 1);
    const questionVal = useRef();
    let [answerCount, setAnswerCount] = useState(2);
    let [poll, setPoll] = useState(false);
    let [error, setError] = useState(false);

    useEffect(() => {

        if (!token) {
            window.location.replace('/signup')
            return;
        }
    }, []);

    let answers = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ];

    const validationVal = useRef();
    const deadlineVal = useRef();

    const createPoll = (async () => {
        try {
            const filteredAnswers = [];

            answers.map((item) => {
                if (item.current && item.current.value) {
                    filteredAnswers.push({
                        text: item.current.value,
                        votes: 0
                    });
                }
            });

            let dataObj = {
                questions: questionVal.current.value,
                anwser: filteredAnswers,
                validation: validationVal.current.value,
                deadline: deadlineVal.current.value,
            }

            const response = await fetch('https://final-project-86.herokuapp.com/api/poll/' + loggedIn, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json',
                    'auth': `Bearer ${token}`
                },
                body: JSON.stringify(dataObj)
            });

            if (!response.ok) {
                const { data } = await response.json();
                setError(data.error);
            }
            
            if (response.ok) {
                const { data } = await response.json();
                setPoll(data);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    });

    const addAnwser = _ => {
        setAnswerCount(answerCount + 1);
    }

    return (
        <>
            <Header
                create={true}
                admin={token ? true : false}
            />

            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 py-2 text-white">Create a new poll</h1>
                </section>
            </section>

            {!poll ?
                <>
                    <section className="container bg-white">
                        <div className="row">
                            <form className="col-md-6 p-5">
                                <div className="form-group">
                                    <label htmlFor="questions">Question</label>
                                    <input type="text" className="form-control" id="questions" name="questions" ref={questionVal} required />
                                    {error.questions && <div className="text-danger"> Please choose a question.</div>}
                                </div>

                                <fieldset className="form-group">
                                    <label htmlFor="anwser">Answers <p className="d-inline small">(Add at least 2 answers)</p></label>

                                    {
                                        answers.map((item, i) => {
                                            if (i < answerCount) {
                                                return (
                                                    <div className="form-group" key={i} >
                                                        <label htmlFor="anwser">{i + 1}. Answer</label>
                                                        <input type="text" className="form-control" id="anwser" name="anwser" ref={answers[i]} required />
                                                    </div>
                                                )
                                            } else {
                                                return (null);
                                            }
                                        })
                                    }

                                    <button type="button" className="btn btn-outline-primary" onClick={(e) => {
                                        e.preventDefault();
                                        addAnwser();
                                    }}>+ Add answer</button>

                                </fieldset>

                                <div className="form-group">
                                    <label htmlFor="validation">Validation</label>
                                    <input type="text" className="form-control" id="validation" name="validation" ref={validationVal} required />
                                    {error.validation && <div className="text-danger">Please choose a validation key.</div>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="deadline">Deadline</label>
                                    <input type="date" className="form-control" id="deadline" name="deadline" ref={deadlineVal} required />
                                    {error.deadline && <div className="text-danger">Please choose a deadline.</div>}
                                </div>

                                <div className="d-flex justify-content-end">
                                    <Link to="/" className="btn btn-outline-secondary mr-3">Cancel</Link>
                                    <button type="button" className="btn btn-primary" onClick={(e) => {
                                        e.preventDefault();
                                        createPoll();
                                    }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </> : <>
                    <div className="vh-100 bg-light" id="exampleModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Poll successfully created.</h5>
                                    <button type="button" className="close">
                                        <span onClick={(e) => {
                                            e.preventDefault();
                                            window.location.replace("/");
                                        }}>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <label>Share link and validation with voter to be able to vote:</label>
                                    <p className="text-dark">
                                        <span className="rounded-circle border border-secondary icon mr-2">
                                            <img src={linkIcon} />
                                        </span>
                                        https://polls-frontend.shalanazim.now.sh/polls/user/detail/{poll._id}
                                    </p>

                                    <p className="text-dark">
                                        <span className="rounded-circle border border-secondary icon mr-2">
                                            <img src={keyIcon} />
                                        </span>
                                        {poll.validation}
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={(e) => {
                                        e.preventDefault();
                                        window.location.replace("/");
                                    }}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            <Footer />
        </>
    );
}

export { CreatePoll }