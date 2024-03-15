import React from 'react';
import './Register.css';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Register.css'
function Register() {
  return (
   
    <MDBContainer fluid className="p-3 my-11">
      
        <MDBCardBody className="d-flex justify-content-between align-items-center px-5">

          <div className="register-form">
            <h2 className="text-uppercase text-center mb-6">Create an account</h2>
            <MDBInput wrapperClass="mb-4" label="Your Name" id="form1" type="text" size="lg" />
            <MDBInput wrapperClass="mb-4" label="Your Email" id="form2" type="email" size="lg" />
            <MDBInput wrapperClass="mb-4" label="Password" id="form3" type="password" size="lg" />
            <MDBInput wrapperClass="mb-4" label="Repeat your password" id="form4" type="password" size="lg" />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="I agree all statements in Terms of service" />
            </div>
            <MDBBtn className="mb-4 w-80"  size="lg">Register</MDBBtn>
          </div>

          <div className="register-image">
            <img src="https://pluspng.com/img-png/free-png-hd-birthday-birthday-party-png-clipart-picture-6410.png" alt="Registration Image" className="img-fluid" />
          </div>

        </MDBCardBody>
      
    </MDBContainer>
  );
}

export default Register;
