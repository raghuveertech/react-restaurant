import React, { useState } from "react";
import { StyledCheckoutPopup } from "./CheckoutPopup.styles";
import { StyledButton } from "../UI/Components/Button.styles";

const CheckoutPopup = (props) => {
  const { countries } = props;

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "India",
  });

  const formFieldsHandler = (e) => {
    setFormFields((prevFormFields) => {
      return {
        ...prevFormFields,
        [e.target.id]: e.target.value,
      };
    });
  };

  const placeOrder = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log(formFields);
  };

  return (
    <StyledCheckoutPopup>
      <div className="popup-inner">
        <h2>Checkout</h2>
        <a className="popup-close">&times;</a>
        <div className="checkout-items">
          <form className="checkout-form" onSubmit={placeOrder}>
            <div className="row">
              <div className="form-group half-width">
                <label htmlFor="firstName">First Name</label>
                <input
                  type={"text"}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formFields.firstName}
                  onChange={formFieldsHandler}
                />
              </div>
              <div className="form-group half-width">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type={"text"}
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formFields.lastName}
                  onChange={formFieldsHandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group full-width">
                <label htmlFor="email">Email</label>
                <input
                  type={"email"}
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formFields.email}
                  onChange={formFieldsHandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group full-width">
                <label htmlFor="phone">Phone</label>
                <input
                  type={"phone"}
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formFields.phone}
                  onChange={formFieldsHandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group half-width">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  onChange={formFieldsHandler}
                  value={formFields.country}
                >
                  <option>Select Country</option>
                  {countries.map((country) => {
                    return (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="cart-footer">
          <div className="total-price">Total: ₹{"200"}</div>
          <div className="cart-footer-buttons">
            <StyledButton
              className="bordered"
              // onClick={() => setShowCheckoutPopup(false)}
            >
              Close
            </StyledButton>
            <StyledButton className="inverse" onClick={() => placeOrder()}>
              Order
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledCheckoutPopup>
  );
};

export default CheckoutPopup;
