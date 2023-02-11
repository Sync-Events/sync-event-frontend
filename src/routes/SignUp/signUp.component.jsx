import './signUp.styles.css'
import { useState } from 'react';
import SocietyForm from './societyForm.component';
import StudentForm from './studentForm.component';

function SignUp() {

    const [selectedValue, setSelectedValue] = useState('student');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
        //   console.log(event.target.value)
    };

    return (
        <div className="signup-entire">

            <div className="wrapperme">
                <div className="title">
                    <h1>Signup Form</h1>
                    <div className="btn-group btn-group-toggle ustubutton" data-toggle="buttons">
                        <label className="btn btn-secondary active" htmlFor="student">
                            <input
                                type="radio"
                                name="options"
                                id="student"
                                value="student"
                                autoComplete="off"
                                checked={selectedValue === 'student'}
                                onChange={handleRadioChange} /> as a student
                        </label>
                        <label className="btn btn-secondary" htmlFor="society">
                            <input
                                type="radio"
                                name="options"
                                id="society"
                                value="society"
                                autoComplete="off"
                                checked={selectedValue === 'society'}
                                onChange={handleRadioChange}
                            />as a Society
                        </label>
                    </div>
                </div>

                {selectedValue === "student" ? <StudentForm /> : <SocietyForm />}
            </div>
        </div>
    )
}

export default SignUp