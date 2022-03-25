import { Stepper } from '@mui/material'
import React from 'react'
import './FormUI.css'

const FormUI = () => {
    const dataJson = {
        question1: {
            question: 'Have you been diagnosed with this problem?',
            answer: ""
        },
        question2: {
            question: 'Did the problem start after a physical trauma?',
            answer: ""
        },
        question3: {
            question: 'Did the problem start after a mental trauma?',
            answer: "",
        },

        question4: {
            question: 'How often do you experience the problem?',
            answer: ""
        },
        question5: {
            question: 'When do you experience the problem',
            answer: {

                check: [],
                text: ''
            },
        },

        question6: {
            question: 'How intense is the experience of the problem on average on a 0-10 scale',
            answer: ""
        },

    }

    const [state, setState] = React.useState([dataJson])
    // console.log("dataJson",Object.keys(state[0])?.map((v)=>state[0][v]?.question))
    // material ui state managment

    const [activeStep, setActiveStep] = React.useState(0);


    const containerStyle = {
        padding: 20,
        display: 'block',
        margin: 'auto'
    }

    const addNewForm = () => {
        setState([...state, dataJson])
    }

    const removeForm = (index) => {
        const newArray = state.filter((v, i) => i !== index)
        setState(newArray)
    }

    const changeHandler = (question, answer, index) => {
        let data = [...state]
        if (question == 'question5') {
            if (answer?.check) {
                let exists = data[index][question].answer?.check?.filter(val => val == answer?.check)
                if (exists?.length > 0) {
                    //exits data
                    //then remove it
                    let newCheckArray = data[index][question].answer.check.filter(val => val !== answer?.check)
                    data[index][question].answer.check = newCheckArray
                } else {
                    //add that check
                    data[index][question].answer?.check.push(answer?.check)
                }
            } else {
                data[index][question].answer.text = answer.text
            }
        } else {
            //any other question
            data[index][question].answer = answer
        }
        console.log("updated", data)
        setState(data)
    }

    const FormPage = ({ value, index }) => {
        return (
            <div >
                <div className="container my-4" >
                    <h3 className='text-center text-info b-1 '><strong>Pain & Functional Description</strong></h3>
                    <div className='container' style={{ lineHeight: 0.8 }}>
                        <p className="text-center">The description of the situation gives your Optimum</p>
                        <p className="text-center">Trainer a picture of and clues to the underlying causes of yours</p>
                        <p className="text-center">problems</p>
                    </div>
                    <div className='container' style={{ lineHeight: 0.8, marginTop: 10 }}>
                        <p className="text-center">If you have problems with pain/aches, stifness, weakness or functional problems, describe</p>
                        <p className="text-center">this/these below.(List the symptoms in descending order with the most troublesome first)</p>

                    </div>

                    <form>
                        <div className="form-group">
                            <textarea name="desc1" cols="30" rows="3" readOnly className='form-control'></textarea>
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 400 }}>Have you been diagnosed with this problem?</label>{"   "}
                            <input type="radio" name="option1" value={'Not relevent'} checked={value?.question1?.answer=="Not relevent"} onClick={(e) => changeHandler('question1', e.target.value, index)} /> Not relvent
                            {" "}<input type="radio" name="option1" value={"Yes"} checked={value?.question1?.answer=="Yes"} onClick={(e) => changeHandler('question1', e.target.value, index)} /> Yes
                            {" "}<input type="radio" name="option1" value={"No"} checked={value?.question1?.answer=="No"} onClick={(e) => changeHandler('question1', e.target.value, index)} /> No
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 400 }}>Did the problem start after a physical trauma?</label>{" "}
                            <input type="radio" name="option2" value={'Not relevent'} checked={value?.question2?.answer=="Not relevent"} onClick={(e) => changeHandler('question2', e.target.value, index)} /> Not relvent
                            {" "}<input type="radio" name="option2" value={'Yes'} checked={value?.question2?.answer=="Yes"} onClick={(e) => changeHandler('question2', e.target.value, index)} /> Yes
                            {" "}<input type="radio" name="option2" value={'No'} checked={value?.question2?.answer=="No"} onClick={(e) => changeHandler('question2', e.target.value, index)} /> No
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 400 }}>Did the problem start after a mental trauma?</label>{" "}
                            <input type="radio" name="option3" value={'Not relevent'} checked={value?.question3?.answer=="Not relevent"} onClick={(e) => changeHandler('question3', e.target.value, index)} /> Not relvent
                            {" "}<input type="radio" name="option3" value={'Yes'} checked={value?.question3?.answer=="Yes"} onClick={(e) => changeHandler('question3', e.target.value, index)} /> Yes
                            {" "}<input type="radio" name="option3" value={'No'} checked={value?.question3?.answer=="No"} onClick={(e) => changeHandler('question3', e.target.value, index)} /> No
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 400 }}>How often do you experience the problem?</label> <br />
                            <span style={{ marginRight: 20 }}><input type="radio" name="option4" value={'Not relevent'} checked={value?.question4?.answer=="Not relevent"} onClick={(e) => changeHandler('question4', e.target.value, index)} /> Not relvent{" "}</span>
                            <span style={{ marginRight: 20 }}><input type="radio" name="option4" value={'Daily'} checked={value?.question4?.answer=="Daily"} onClick={(e) => changeHandler('question4', e.target.value, index)} /> Daily{" "}</span>
                            <span style={{ marginRight: 20 }}><input type="radio" name="option4" value={'Several times/week'} checked={value?.question4?.answer=="Several times/week"} onClick={(e) => changeHandler('question4', e.target.value, index)} /> Several times/week{" "}</span>
                            <span style={{ marginRight: 20 }}><input type="radio" name="option4" value={'A few times/month'} checked={value?.question4?.answer=="A few times/month"} onClick={(e) => changeHandler('question4', e.target.value, index)} /> A few times/month{" "}</span>
                            <span style={{ marginRight: 20 }}><input type="radio" name="option4" value={'A few times/year'} checked={value?.question4?.answer=="A few times/year"} onClick={(e) => changeHandler('question4', e.target.value, index)} /> A few times/year{" "}</span>
                        </div>
                        <div className="form-group">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <label style={{ fontWeight: 400 }}>When do you experience the problem</label> <br /> {" "}
                                    <span style={{ marginRight: 20 }}><input type="checkbox" checked={value?.question5?.answer?.check?.includes('Not relevant')} onClick={(e) => changeHandler('question5', { check: "Not relevant" }, index)} /> Not relevant{" "}</span><br /><br />
                                    <span style={{ marginRight: 20 }}><input type="checkbox" checked={value?.question5?.answer?.check?.includes('When lying down')} onClick={(e) => changeHandler('question5', { check: "When lying down" }, index)} /> When lying down{" "}</span><br /><br />
                                    <span style={{ marginRight: 20 }}><input type="checkbox" checked={value?.question5?.answer?.check?.includes('When sitting')}  onClick={(e) => changeHandler('question5', { check: "When sitting" }, index)} /> When sitting{" "}</span><br /><br />
                                    <span style={{ marginRight: 20 }}><input type="checkbox" checked={value?.question5?.answer?.check?.includes('Under standing')} onClick={(e) => changeHandler('question5', { check: "Under standing" }, index)} /> Under standing{" "}</span><br /><br />
                                    <span style={{ marginRight: 20 }}><input type="checkbox" checked={value?.question5?.answer?.check?.includes('In walking')} onClick={(e) => changeHandler('question5', { check: "In walking" }, index)} /> In walking{" "}</span><br /><br />
                                </div>
                                <div className='col-lg-6'>
                                    <textarea name="desc1" cols="5" rows="3" placeholder='ghdfxdgdxgd' value={value?.question5?.answer?.text} onChange={(e) => console.log(e.target.value)} className='form-control'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 400 }}>How intense is the experience of the problem on average on a 0-10 scale</label> <br /> {" "}
                            <span style={{ marginRight: 20 }}>1 <input type="radio" name="option6" value={'1'} checked={value?.question6?.answer == '1'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                            <span style={{ marginRight: 20 }}>3 <input type="radio" name="option6" value={'2'} checked={value?.question6?.answer == '2'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                            <span style={{ marginRight: 20 }}>2 <input type="radio" name="option6" value={'3'} checked={value?.question6?.answer == '3'} onClick={(e) => changeHandler('question6', e.target.value, index)} />{" "}</span>
                            <span style={{ marginRight: 20 }}>4 <input type="radio" name="option6" value={'4'} checked={value?.question6?.answer == '4'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                            <span style={{ marginRight: 20 }}>5 <input type="radio" name="option6" value={'5'} checked={value?.question6?.answer == '5'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                            <span style={{ marginRight: 20 }}>6 <input type="radio" name="option6" value={'6'} checked={value?.question6?.answer == '6'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                            <span style={{ marginRight: 20 }}>7 <input type="radio" name="option6" value={'7'} checked={value?.question6?.answer == '7'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                            <span style={{ marginRight: 20 }}>8 <input type="radio" name="option6" value={'8'} checked={value?.question6?.answer == '8'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                            <span style={{ marginRight: 20 }}>9 <input type="radio" name="option6" value={'9'} checked={value?.question6?.answer == '9'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                            <span style={{ marginRight: 20 }}>10 <input type="radio" name="option6" value={'10'} checked={value?.question6?.answer == '10'} onClick={(e) => changeHandler('question6', e.target.value, index)} /> {" "}</span>
                        </div>
                    </form>
                </div>
                <hr style={{ boxShadow: '0px 0px 0.5px rgb(92 89 89)' }} />
                {index == state?.length - 1 ? <div className="text-center">
                    <button className='btn btn-primary' onClick={() => addNewForm()} style={{ backgroundColor: '#4a90ff' }}><i className='fa fa-plus'></i></button>
                </div> : <div className="text-center">
                    <button className='btn btn-primary' onClick={() => removeForm(index)} style={{ backgroundColor: '#4a90ff' }}><i className='fa fa-minus'></i></button>
                </div>}
            </div>
        )
    }

    const TableUi = ()=>{
        return (
            <div className='table-responsive'>
                <table className='table' border="1">
                    <tr>
                        {state?.length>0 && Object.keys(state[0])?.map((v,i)=><th style={{padding:"5px"}} key={i}>{state[0][v]?.question}</th>)}
                    </tr>
                  
                
                        {
                            state?.length>0?state?.map((values,i)=>{
                               return (
                                   <tr key={i}>
                                       {Object.keys(values)?.map((ques,j)=>{
                                           return (
                                               <td key={j}>
                                                   {ques=='question5'?values[ques]?.answer?.check?.join(", "):values[ques]?.answer}
                                               </td>
                                           )
                                       })}
                                   </tr>
                               )
                            }):null
                        }
                                {/* i==4?<tr key={i}><td>{values[`question${i+1}`]?.answer?.check?.join(", ")}{", "}{values[`question${i+1}`]?.answer?.text}</td></tr>:<tr key={i}><td>{values[`question${i+1}`]?.answer}</td></tr> */}
                    
                </table>
            </div>
        )
    }


    return (
        <div style={containerStyle}>
            <div className="row">
                <div className="d-flex justify-content-center">

                    { activeStep==0?state.map((value, index) => <FormPage value={value} index={index} key={index} />):(
                        <TableUi/>
                    )}
                    <div className="text-center" style={{ marginTop: 40 }}>
                        <button className='btn btn-primary' onClick={()=>setActiveStep(0)} style={{ width: 100,  marginLeft: 45, marginRight: 124, backgroundColor: '#4a90ff' }}>Back</button>
                        <button style={{ width: 100, backgroundColor: '#4a90ff' }} onClick={()=>setActiveStep(1)} className='btn btn-primary'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormUI