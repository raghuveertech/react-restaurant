import React, { useEffect, useState } from "react";
import { StyledCheckoutWrapper } from "./CheckoutPopup.styles";
import Popup from "../UI/Components/Popup";

const CheckoutPopup = (props) => {
  const {
    countries,
    backToCart,
    setShowCheckoutPopup,
    cartItems,
    setCartItems,
  } = props;

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);

  let cartTotal = 0;
  cartItems.forEach((cartItem) => {
    cartTotal += cartItem.qty * cartItem.price;
  });

  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  });

  const [formFieldsErrors, setFormFieldsErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    phoneError: "",
    countryError: "",
  });

  const [isFormTouched, setIsFormTouched] = useState(false);

  const formFieldsHandler = (e) => {
    setIsFormTouched(true);
    setFormFields((prevFormFields) => {
      return {
        ...prevFormFields,
        [e.target.id]: e.target.value,
      };
    });
  };

  const validateFormFields = () => {
    let isValid = true;
    for (let formField in formFields) {
      switch (formField) {
        case "firstName":
          {
            if (formFields[formField] === "") {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  firstNameError: "Please Enter First Name",
                };
              });
              isValid = false;
            } else {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  firstNameError: "",
                };
              });
            }
          }
          break;
        case "lastName":
          {
            if (formFields[formField] === "") {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  lastNameError: "Please Enter Last Name",
                };
              });
              isValid = false;
            } else {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  lastNameError: "",
                };
              });
            }
          }
          break;
        case "email":
          {
            let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (
              formFields[formField] === "" ||
              !emailRegEx.test(formFields[formField])
            ) {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  emailError: "Please Enter a Valid Email Address",
                };
              });
              isValid = false;
            } else {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  emailError: "",
                };
              });
            }
          }
          break;
        case "phone":
          {
            let phoneRegEx =
              /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            if (
              formFields[formField] === "" ||
              !phoneRegEx.test(formFields[formField])
            ) {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  phoneError: "Please Enter a Valid Phone Number",
                };
              });
              isValid = false;
            } else {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  phoneError: "",
                };
              });
            }
          }
          break;
        case "country":
          {
            if (formFields[formField] === "") {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  countryError: "Please Select a Country",
                };
              });
              isValid = false;
            } else {
              setFormFieldsErrors((prevFormFieldsErrors) => {
                return {
                  ...prevFormFieldsErrors,
                  countryError: "",
                };
              });
            }
          }
          break;
      }
    }
    return isValid;
  };

  const placeOrder = (e) => {
    if (e) {
      e.preventDefault();
    }

    let isFormValid = validateFormFields();
    if (isFormValid) {
      let checkoutObj = {
        userInfo: formFields,
        itemsInfo: cartItems,
        cartTotal: cartTotal,
      };

      fetch(
        "https://react-restaurant-app-3a1e9-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(checkoutObj),
        }
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((data) => {
          if (data.name) {
            setOrderSuccess(true);
            setCartItems([]);
            setHideButtons(true);
          }
        });
    }
  };

  return (
    <Popup
      closeBtnAction={() => {
        setShowCheckoutPopup(false);
      }}
      mainHeading={"Checkout"}
      btn1Text={"Back To Cart"}
      btn1Action={() => backToCart()}
      btn2Text={"Place Order"}
      btn2Action={() => placeOrder()}
      hideButtons={hideButtons}
    >
      <StyledCheckoutWrapper>
        {orderSuccess ? (
          <p className="orderSuccess">
            Thank you for ordering. Our team will contact you soon.
          </p>
        ) : (
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
                {formFieldsErrors.firstNameError ? (
                  <p className="error">{formFieldsErrors.firstNameError}</p>
                ) : null}
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
                {formFieldsErrors.lastNameError ? (
                  <p className="error">{formFieldsErrors.lastNameError}</p>
                ) : null}
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
                {formFieldsErrors.emailError ? (
                  <p className="error">{formFieldsErrors.emailError}</p>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="form-group full-width">
                <label htmlFor="phone">Phone</label>
                <input
                  type={"text"}
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formFields.phone}
                  onChange={formFieldsHandler}
                />
                {formFieldsErrors.phoneError ? (
                  <p className="error">{formFieldsErrors.phoneError}</p>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="form-group full-width">
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
                {formFieldsErrors.countryError ? (
                  <p className="error">{formFieldsErrors.countryError}</p>
                ) : null}
              </div>
            </div>
          </form>
        )}
      </StyledCheckoutWrapper>
    </Popup>
  );
};

export default CheckoutPopup;
