import { useEffect, useRef, useState } from "react";
import Header from "./components/Layout/Header/Header";
import { GlobalStyles } from "./App.styles";
import MenuSection from "./components/HomeComponents/MenuSection/MenuSection";
import CartPopup from "./components/CartPopup/CartPopup";
import CheckoutPopup from "./components/CheckoutPopup/CheckoutPopup";
import HeroSection from "./components/HomeComponents/HeroSection/HeroSection";
import AboutSection from "./components/HomeComponents/AboutSection/AboutSection";

function App() {
  const menuRef = useRef();
  const aboutRef = useRef();
  const [menu, setMenu] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      console.log([item, ...prevCartItems]);
      return [item, ...prevCartItems];
    });
  };

  const cartQuantityUpdate = (id, newQuantity) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((prevCartItem) => {
        if (prevCartItem.id == id) {
          return {
            ...prevCartItem,
            qty: newQuantity,
          };
        } else {
          return prevCartItem;
        }
      });
      return updatedCartItems;
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter((prevCartItem) => {
        if (prevCartItem.id != id) {
          return prevCartItem;
        }
      });
      if (newCartItems.length === 0) {
        setShowCartPopup(false);
      }
      return newCartItems;
    });
  };

  const incrementQuantity = (id) => {
    const cartItem = cartItems.find((cartItem) => {
      if (cartItem.id === id) {
        return cartItem;
      }
    });
    let existingQty = cartItem.qty;
    let newQuantity = existingQty + 1;
    cartQuantityUpdate(id, newQuantity);
  };

  const decrementQuantity = (id) => {
    const cartItem = cartItems.find((cartItem) => {
      if (cartItem.id === id) {
        return cartItem;
      }
    });
    let existingQty = cartItem.qty;
    let newQuantity = existingQty - 1;
    if (newQuantity === 0) {
      removeItemFromCart(id);
    } else {
      cartQuantityUpdate(id, newQuantity);
    }
  };

  const proceedToCheckout = () => {
    setShowCartPopup(false);
    setShowCheckoutPopup(true);
  };

  const backToCart = () => {
    setShowCartPopup(true);
    setShowCheckoutPopup(false);
  };

  useEffect(() => {
    if (showCartPopup || showCheckoutPopup) {
      document.querySelector("body").classList.add("popup-open");
    } else {
      document.querySelector("body").classList.remove("popup-open");
    }
  }, [showCartPopup, showCheckoutPopup]);

  useEffect(() => {
    fetch(
      "https://react-restaurant-app-3a1e9-default-rtdb.firebaseio.com/menu.json"
    )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        if (response && response.length) {
          setMenu(response);
        }
      });
    fetch(
      "https://react-restaurant-app-3a1e9-default-rtdb.firebaseio.com/countries.json"
    )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        if (response && response.length) {
          setCountries(response);
        }
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header
        cartItems={cartItems}
        setShowCartPopup={setShowCartPopup}
        aboutRef={aboutRef}
      />
      <HeroSection menuRef={menuRef} />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={menuRef}>
        <MenuSection
          menuItems={menu}
          cartItems={cartItems}
          addToCart={addToCart}
          cartQuantityUpdate={cartQuantityUpdate}
          removeItemFromCart={removeItemFromCart}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
      </div>
      {showCartPopup ? (
        <CartPopup
          removeItemFromCart={removeItemFromCart}
          cartItems={cartItems}
          setShowCartPopup={setShowCartPopup}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          proceedToCheckout={proceedToCheckout}
        />
      ) : null}
      {showCheckoutPopup ? (
        <CheckoutPopup
          backToCart={backToCart}
          countries={countries}
          setShowCheckoutPopup={setShowCheckoutPopup}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ) : null}
    </>
  );
}

export default App;
