// import React, { useState, useEffect } from "react";
// import axiosInstance from "../services/axiosInstance";
// import { useNavigate } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";

// function CartPage() {
//   const [cartItems, setCartItems] = useState([]);
//   const [calculatedTotalCost, setCalculatedTotalCost] = useState(0);
//   const [addedToCartMessage, setAddedToCartMessage] = useState("");
//   const navigate = useNavigate();
//   const { isUserLoggedIn } = useUserAuth();

//   useEffect(() => {
//     if (!isUserLoggedIn) {
//       navigate("/login");
//     }
//   }, [isUserLoggedIn, navigate]);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     axiosInstance
//       .get(`/api/users/cart?userId=${userId}`)
//       .then((response) => {
//         setCartItems(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching cart items:", error);
//       });
//   }, []);

//   const handleQuantityChange = (cartId, newQuantity) => {
//     const updatedCartItems = cartItems.map((item) =>
//       item.cartId === cartId ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCartItems);
//   };
//   const totalCost = cartItems.reduce(
//     (total, item) => total + item.vcdDetails.cost * item.quantity,
//     0
//   );

//   //   const handleSubmitOrder = () => {
//   //     // Send order to backend (you'll need to implement this)
//   //     // ...
//   //     // Optionally, reset cart or redirect to a confirmation page
//   //     // ...
//   //   };
//   const handleSubmitOrder = () => {
//     // Calculate totalCost
//     const calculatedTotalCost = cartItems.reduce(
//       (total, item) => total + item.vcdDetails.cost * item.quantity,
//       0
//     );
//     setCalculatedTotalCost(calculatedTotalCost);

//     // Navigate to PaymentPage with necessary props
//     navigate("/payment", {
//       state: {
//         totalCost: totalCost,
//         vcdItems: cartItems.map((item) => ({
//           vcdId: item.vcdDetails.vcdID,
//           quantity: item.quantity,
//         })),
//       },
//     });
//   };

//   const handleAddToCart = (cartId, vcdId, quantity) => {
//     const userId = localStorage.getItem("userId");
//     axiosInstance
//       .post("/api/users/add-to-cart", null, {
//         params: {
//           id: userId,
//           vcdId: vcdId,
//           quantity: quantity,
//         },
//       })
//       .then((response) => {
//         console.log("VCD added to cart successfully!", response.data);
//         setAddedToCartMessage("Added to cart successfully!");
//         setTimeout(() => {
//           setAddedToCartMessage("");
//         }, 1000);
//       })
//       .catch((error) => {
//         console.error("Error adding VCD to cart:", error);
//       });
//   };

//   const handleDeleteItem = (cartId) => {
//     axiosInstance
//       .delete("/api/users/deletecart", {
//         params: {
//           id: cartId,
//         },
//       })
//       .then((response) => {
//         const updatedCartItems = cartItems.filter(
//           (item) => item.cartId !== cartId
//         );
//         setCartItems(updatedCartItems);
//       })
//       .catch((error) => {
//         console.error("Error deleting item from cart:", error);
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Cart</h2>
//       {addedToCartMessage && (
//         <div className="alert alert-success">{addedToCartMessage}</div>
//       )}
//       <table className="table">
//         <thead>
//           <tr>
//             <th>VCD Name</th>
//             <th>Language</th>
//             <th>Category</th>
//             <th>Rating</th>
//             <th>Cost per VCD</th>
//             <th>Quantity</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item.cartId}>
//               <td>{item.vcdDetails.vcdName}</td>
//               <td>{item.vcdDetails.language}</td>
//               <td>{item.vcdDetails.category}</td>
//               <td>{item.vcdDetails.rating}</td>
//               <td>{item.vcdDetails.cost}</td>
//               <td>
//                 <input
//                   type="number"
//                   min="1"
//                   max={item.vcdDetails.quantity}
//                   value={item.quantity}
//                   onWheel={(e) => e.preventDefault()}
//                   onKeyDown={(e) => e.preventDefault()}
//                   onChange={(e) =>
//                     handleQuantityChange(item.cartId, parseInt(e.target.value))
//                   }
//                 />
//               </td>
//               <td>
//                 <button
//                   onClick={() =>
//                     handleAddToCart(
//                       item.cartId,
//                       item.vcdDetails.vcdID,
//                       item.quantity
//                     )
//                   }
//                 >
//                   Add to Cart
//                 </button>
//                 <button onClick={() => handleDeleteItem(item.cartId)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="text-center mt-4">
//         <h4>Total Price: ${totalCost.toFixed(2)}</h4>
//         <button onClick={handleSubmitOrder}>Submit Order</button>
//       </div>
//     </div>
//   );
// }

// export default CartPage;
import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [calculatedTotalCost, setCalculatedTotalCost] = useState(0);
  const [addedToCartMessage, setAddedToCartMessage] = useState("");
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserAuth();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    axiosInstance
      .get(`/api/users/cart?userId=${userId}`)
      .then((response) => {
        if (response.data.length === 0) {
          alert("Cart is empty. Redirecting to user dashboard.");
          // Navigate to admin dashboard here
          navigate("/user/dashboard");
        } else {
          setCartItems(response.data);
        }
        //setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, [navigate]);

  const handleQuantityChange = (cartId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.vcdDetails.cost * item.quantity,
    0
  );

  const handleSubmitOrder = () => {
    const calculatedTotalCost = cartItems.reduce(
      (total, item) => total + item.vcdDetails.cost * item.quantity,
      0
    );
    setCalculatedTotalCost(calculatedTotalCost);

    navigate("/payment", {
      state: {
        totalCost: totalCost,
        vcdItems: cartItems.map((item) => ({
          vcdId: item.vcdDetails.vcdID,
          quantity: item.quantity,
        })),
      },
    });
  };

  const handleAddToCart = (cartId, vcdId, quantity) => {
    const userId = localStorage.getItem("userId");
    axiosInstance
      .post("/api/users/add-to-cart", null, {
        params: {
          id: userId,
          vcdId: vcdId,
          quantity: quantity,
        },
      })
      .then((response) => {
        console.log("VCD added to cart successfully!", response.data);
        setAddedToCartMessage("Added to cart successfully!");
        setTimeout(() => {
          setAddedToCartMessage("");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error adding VCD to cart:", error);
      });
  };

  const handleDeleteItem = (cartId) => {
    axiosInstance
      .delete("/api/users/deletecart", {
        params: {
          id: cartId,
        },
      })
      .then((response) => {
        const updatedCartItems = cartItems.filter(
          (item) => item.cartId !== cartId
        );
        setCartItems(updatedCartItems);
      })
      .catch((error) => {
        console.error("Error deleting item from cart:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Cart</h2>
      {addedToCartMessage && (
        <div className="alert alert-success">{addedToCartMessage}</div>
      )}

      {cartItems.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>VCD Name</th>
              <th>Language</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Cost per VCD</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.cartId}>
                <td>{item.vcdDetails.vcdName}</td>
                <td>{item.vcdDetails.language}</td>
                <td>{item.vcdDetails.category}</td>
                <td>{item.vcdDetails.rating}</td>
                <td>{item.vcdDetails.cost}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    max={item.vcdDetails.quantity}
                    value={item.quantity}
                    onWheel={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.cartId,
                        parseInt(e.target.value)
                      )
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        item.cartId,
                        item.vcdDetails.vcdID,
                        item.quantity
                      )
                    }
                  >
                    Add to Cart
                  </button>
                  <button onClick={() => handleDeleteItem(item.cartId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <p>Your cart is empty. Add some items to continue shopping!</p>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="text-center mt-4">
          <h4>Total Price: ${totalCost.toFixed(2)}</h4>
          <button onClick={handleSubmitOrder}>Submit Order</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
