import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function CreatePoll({ token }) {
    token = token.slice(1, token.length - 1);
    const questionVal = useRef();
    let [answerCount, setAnswerCount] = useState(2);

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

            const response = await fetch('http://localhost:8080/api/poll/', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json',
                    'auth': `Bearer ${token}`
                },
                body: JSON.stringify(dataObj)
            });
            const { data } = await response.json()
            console.log(data)
        } catch (error) {

            console.error('Error:', error);
        }
    });

    const addAnwser = _ => {
        setAnswerCount(answerCount + 1);
    }

    return (
        <>
            <Header
                admin={token ? true : false}
            />

            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 text-white">Create a new poll</h1>
                </section>
            </section>

            <section className="container bg-white h-100">
                <div className="row">
                    <form className="col-md-6 p-5">
                        <div className="form-group">
                            <label htmlFor="questions">Question</label>
                            <input type="text" className="form-control" id="questions" name="questions" ref={questionVal} />
                        </div>

                        <fieldset className="form-group">
                            <label htmlFor="anwser">Answers <p className="d-inline small">(Add at least 2 answers)</p></label>

                            {
                                answers.map((item, i) => {
                                    if (i < answerCount) {
                                        return (
                                            <div className="form-group" key={i} >
                                                <label htmlFor="anwser">{i + 1}. Answer</label>
                                                <input type="text" className="form-control" id="anwser" name="anwser" ref={answers[i]} />
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
                            <input type="text" className="form-control" id="validation" name="validation" ref={validationVal} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="deadline">Deadline</label>
                            <input type="date" className="form-control" id="deadline" name="deadline" ref={deadlineVal} />
                        </div>

                        <div className="d-flex justify-content-end">
                            <Link to="/" className="btn btn-outline-secondary mr-3">Cancel</Link>
                            <button type="button" className="btn btn-primary" onClick={(e) => {
                                e.preventDefault();
                                createPoll(e);
                            }}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
}

export { CreatePoll }