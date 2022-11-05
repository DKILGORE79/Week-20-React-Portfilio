import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src=""
            class="pr-4 pb-3 img-fluid"
            alt="Derek Kilgore"
          />
          <h4>
          info
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:816-682-3872">
            <MDBIcon icon="phone-alt" /> 816-682-3872
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:Derek.kilgore@gmail.com">
            <MDBIcon icon="envelope" /> Derek.kilgore@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
