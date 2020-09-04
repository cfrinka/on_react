import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className="register-container">

            <Link className="router-links" to="/regpatient">

                <div className="register-button">
                    Paciente
                </div>
            </Link>

            <Link className="router-links" to="/regprofessional">

            <div className="register-button">
                    Profissional
                </div>
            </Link>
        </div>
    )
}

export default Register