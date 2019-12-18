import React, { useRef, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function CreatePoll() {
    const [anwserArr, setAnwserArr] = useState([]);
    const [iteration, setIteration] = useState(0);
    const questionVal = useRef();
    const anwserVal = useRef();
    const validationVal = useRef();
    const deadlineVal = useRef();
    console.log(iteration)
    let i = iteration;
    let j = 0
    const arr = [];


    const createPoll = (async () => {
        try {
            let dataObj = {
                questions: questionVal.current.value,
                anwser: anwserVal.current.value,
                validation: validationVal.current.value,
                deadline: deadlineVal.current.value,
            }
            // const body = JSON.stringify(dataObj)
            const response = await fetch('http://localhost:8080/api/poll/', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json',
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
        i++
        if (i <= 10) {
            setIteration(i)
            while (j < i) {
                arr.push(j)
                j++;
            }
            setAnwserArr(arr);
        }
    }

    return (
        <>
            <Header />

            <section className="container-fluid bg-primary">
                <section className="container">
                    <h1 className="display-2 text-white">Create a new poll</h1>
                </section>
            </section>

            <section className="container">
                <div className="row">
                    <form className="col-md-6 bg-white p-5 rounded">
                        <div className="form-group">
                            <label htmlFor="questions">Question</label>
                            <input type="text" className="form-control" id="questions" name="questions" ref={questionVal} />
                        </div>

                        <fieldset className="form-group">
                            <label htmlFor="anwser">Answers <p className="d-inline small">(Add at least 2 answers)</p></label>

                            <div className="form-group">
                                <label htmlFor="anwser">1. Answer</label>
                                <input type="text" className="form-control" id="anwser" name="anwser" ref={anwserVal} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="anwser">2. Answer</label>
                                <input type="text" className="form-control" id="anwser" name="anwser" ref={anwserVal} />
                            </div>

                            {anwserArr.length ? anwserArr.map((anwser, i) => (
                                <div className="form-group">
                                    <label htmlFor="anwser">{i + 3}. Answer</label>
                                    <input type="text" className="form-control" id="anwser" name="anwser" ref={anwserVal} key={anwser} />
                                </div>
                            )) : ''}

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
                            <button type="submit" className="btn btn-outline-secondary mr-3" onClick={(e) => {
                                e.preventDefault();
                                createPoll(e);
                            }}>Cancel</button>
                            <button type="submit" className="btn btn-primary" onClick={(e) => {
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