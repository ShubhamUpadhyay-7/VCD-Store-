// import React, { useState } from "react";
// import axiosInstance from "../services/axiosInstance";

// const VCDSearchPage = () => {
//   const [searchOption, setSearchOption] = useState("");
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [searched, setSearched] = useState(false);

//   const handleSearchOptionChange = (e) => {
//     setSearchOption(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const paramMapping = {
//         searchByName: "vcdName",
//         searchByCategory: "category",
//         searchByRating: "rating",
//         searchByLanguage: "language",
//       };

//       const paramName = paramMapping[searchOption];

//       if (!paramName) {
//         console.error("Invalid search option");
//         return;
//       }

//       const response = await axiosInstance.get(`api/users/${searchOption}`, {
//         params: {
//           [paramName]: searchValue,
//         },
//       });
//       setSearchResults(response.data);
//       setSearched(true);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleBack = () => {
//     setSearched(false);
//     setSearchOption("");
//     setSearchValue("");
//   };

//   return (
//     <div className="container">
//       <h2>Search VCD Details</h2>
//       {!searched ? (
//         <div>
//           <select value={searchOption} onChange={handleSearchOptionChange}>
//             <option value="">Select Search Option</option>
//             <option value="searchByName">Search by Name</option>
//             <option value="searchByCategory">Search by Category</option>
//             <option value="searchByRating">Search by Rating</option>
//             <option value="searchByLanguage">Search by Language</option>
//           </select>
//           {searchOption && (
//             <div>
//               <label htmlFor="searchValue">Enter Search Value:</label>
//               <input
//                 type="text"
//                 id="searchValue"
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//               />
//               <button onClick={handleSearch}>Search</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <button onClick={handleBack}>Back</button>
//           <table className="styled-table">
//             <thead>
//               <tr>
//                 <th>VCD Name</th>
//                 <th>Language</th>
//                 <th>Category</th>
//                 <th>Rating</th>
//                 <th>Quantity Available</th>
//                 <th>Cost</th>
//               </tr>
//             </thead>
//             <tbody>
//               {searchResults.map((result) => (
//                 <tr key={result.vcdID}>
//                   <td>{result.vcdName}</td>
//                   <td>{result.language}</td>
//                   <td>{result.category}</td>
//                   <td>{result.rating}</td>
//                   <td>{result.quantity}</td>
//                   <td>{result.cost}</td>
//                   <td>
//                     <button onClick={() => handleAddToCart(result)}>
//                       Add to Cart
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VCDSearchPage;
// import React, { useState } from "react";
// import axiosInstance from "../services/axiosInstance";

// const VCDSearchPage = () => {
//   const [searchOption, setSearchOption] = useState("");
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [searched, setSearched] = useState(false);

//   const handleSearchOptionChange = (e) => {
//     setSearchOption(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const paramMapping = {
//         searchByName: "vcdName",
//         searchByCategory: "category",
//         searchByRating: "rating",
//         searchByLanguage: "language",
//       };

//       const paramName = paramMapping[searchOption];

//       if (!paramName) {
//         console.error("Invalid search option");
//         return;
//       }

//       const response = await axiosInstance.get(`api/users/${searchOption}`, {
//         params: {
//           [paramName]: searchValue,
//         },
//       });
//       setSearchResults(response.data);
//       setSearched(true);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleBack = () => {
//     setSearched(false);
//     setSearchOption("");
//     setSearchValue("");
//   };
//   const handleAddToCart = (selectedVCD) => {
//     const userid = localStorage.getItem("userId");
//     const vcdId = selectedVCD.vcdID;
//     console.log(userid);
//     console.log(vcdId);
//     axiosInstance
//       .post("/api/users/add-to-cart", null, {
//         params: {
//           id: userid,
//           vcdId: vcdId,
//           quantity: 1,
//         },
//       })
//       .then((response) => {
//         console.log("VCD added to cart successfully!", response.data);
//       })
//       .catch((error) => {
//         console.error("Error adding VCD to cart:", error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2>Search VCD Details</h2>
//       {!searched ? (
//         <div>
//           <select value={searchOption} onChange={handleSearchOptionChange}>
//             <option value="">Select Search Option</option>
//             <option value="searchByName">Search by Name</option>
//             <option value="searchByCategory">Search by Category</option>
//             <option value="searchByRating">Search by Rating</option>
//             <option value="searchByLanguage">Search by Language</option>
//           </select>
//           {searchOption && (
//             <div>
//               <label htmlFor="searchValue">Enter Search Value:</label>
//               <input
//                 type="text"
//                 id="searchValue"
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//               />
//               <button onClick={handleSearch}>Search</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <button onClick={handleBack}>Back</button>
//           <table className="styled-table">
//             <thead>
//               <tr>
//                 <th>VCD Name</th>
//                 <th>Language</th>
//                 <th>Category</th>
//                 <th>Rating</th>
//                 <th>Quantity Available</th>
//                 <th>Cost</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {searchResults.map((result) => (
//                 <tr key={result.vcdID}>
//                   <td>{result.vcdName}</td>
//                   <td>{result.language}</td>
//                   <td>{result.category}</td>
//                   <td>{result.rating}</td>
//                   <td>{result.quantity}</td>
//                   <td>{result.cost}</td>
//                   <td>
//                     <button onClick={() => handleAddToCart(result)}>
//                       Add to Cart
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VCDSearchPage;
// import React, { useState, useEffect } from "react";
// import axiosInstance from "../services/axiosInstance";
// import { useNavigate } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";

// const VCDSearchPage = () => {
//   const { isUserLoggedIn } = useUserAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isUserLoggedIn) {
//       navigate("/login");
//     }
//   }, [isUserLoggedIn, navigate]);

//   const [searchOption, setSearchOption] = useState("");
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [searched, setSearched] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   const handleSearchOptionChange = (e) => {
//     setSearchOption(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const paramMapping = {
//         searchByName: "vcdName",
//         searchByCategory: "category",
//         searchByRating: "rating",
//         searchByLanguage: "language",
//       };

//       const paramName = paramMapping[searchOption];

//       if (!paramName) {
//         console.error("Invalid search option");
//         return;
//       }

//       const response = await axiosInstance.get(`api/users/${searchOption}`, {
//         params: {
//           [paramName]: searchValue,
//         },
//       });
//       setSearchResults(response.data);
//       setSearched(true);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleBack = () => {
//     setSearched(false);
//     setSearchOption("");
//     setSearchValue("");
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(parseInt(e.target.value, 10));
//   };

//   const handleAddToCart = (selectedVCD) => {
//     const userid = localStorage.getItem("userId");
//     const vcdId = selectedVCD.vcdID;

//     axiosInstance
//       .post("/api/users/add-to-cart", null, {
//         params: {
//           id: userid,
//           vcdId: vcdId,
//           quantity: quantity,
//         },
//       })
//       .then((response) => {
//         console.log("VCD added to cart successfully!", response.data);
//       })
//       .catch((error) => {
//         console.error("Error adding VCD to cart:", error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2>Search VCD Details</h2>
//       {!searched ? (
//         <div>
//           <select value={searchOption} onChange={handleSearchOptionChange}>
//             <option value="">Select Search Option</option>
//             <option value="searchByName">Search by Name</option>
//             <option value="searchByCategory">Search by Category</option>
//             <option value="searchByRating">Search by Rating</option>
//             <option value="searchByLanguage">Search by Language</option>
//           </select>
//           {searchOption && (
//             <div>
//               <label htmlFor="searchValue">Enter Search Value:</label>
//               <input
//                 type="text"
//                 id="searchValue"
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//               />
//               <button onClick={handleSearch}>Search</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <button onClick={handleBack}>Back</button>
//           <table className="styled-table">
//             <thead>
//               <tr>
//                 <th>VCD Name</th>
//                 <th>Language</th>
//                 <th>Category</th>
//                 <th>Rating</th>
//                 <th>Quantity Available</th>
//                 <th>Cost</th>
//                 <th>Quantity</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {searchResults.map((result) => (
//                 <tr key={result.vcdID}>
//                   <td>{result.vcdName}</td>
//                   <td>{result.language}</td>
//                   <td>{result.category}</td>
//                   <td>{result.rating}</td>
//                   <td>{result.quantity}</td>
//                   <td>{result.cost}</td>
//                   <td>
//                     <input
//                       type="number"
//                       min="1"
//                       max={result.quantity}
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                     />
//                   </td>
//                   <td>
//                     <button onClick={() => handleAddToCart(result)}>
//                       Add to Cart
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VCDSearchPage;
import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const VCDSearchPage = () => {
  const { isUserLoggedIn } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  const [searchOption, setSearchOption] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleSearchOptionChange = (e) => {
    setSearchOption(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const paramMapping = {
        searchByName: "vcdName",
        searchByCategory: "category",
        searchByRating: "rating",
        searchByLanguage: "language",
      };

      const paramName = paramMapping[searchOption];

      if (!paramName) {
        console.error("Invalid search option");
        return;
      }

      const response = await axiosInstance.get(`api/users/${searchOption}`, {
        params: {
          [paramName]: searchValue,
        },
      });
      setSearchResults(response.data);
      setSearched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleBack = () => {
    setSearched(false);
    setSearchOption("");
    setSearchValue("");
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = (selectedVCD) => {
    const userid = localStorage.getItem("userId");
    const vcdId = selectedVCD.vcdID;

    axiosInstance
      .post("/api/users/add-to-cart", null, {
        params: {
          id: userid,
          vcdId: vcdId,
          quantity: quantity,
        },
      })
      .then((response) => {
        console.log("VCD added to cart successfully!", response.data);
        setAddedToCart(true);
        setTimeout(() => {
          setAddedToCart(false);
          navigate("/cart");
        }, 2000); // Redirect to /cart after 2 seconds
      })
      .catch((error) => {
        console.error("Error adding VCD to cart:", error);
      });
  };

  return (
    <div className="container">
      <h2>Search VCD Details</h2>
      {!searched ? (
        <div>
          <select value={searchOption} onChange={handleSearchOptionChange}>
            <option value="">Select Search Option</option>
            <option value="searchByName">Search by Name</option>
            <option value="searchByCategory">Search by Category</option>
            <option value="searchByRating">Search by Rating</option>
            <option value="searchByLanguage">Search by Language</option>
          </select>
          {searchOption && (
            <div>
              <label htmlFor="searchValue">Enter Search Value:</label>
              <input
                type="text"
                id="searchValue"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button onClick={handleBack}>Back</button>
          <table className="styled-table">
            <thead>
              <tr>
                <th>VCD Name</th>
                <th>Language</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Quantity Available</th>
                <th>Cost</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result) => (
                <tr key={result.vcdID}>
                  <td>{result.vcdName}</td>
                  <td>{result.language}</td>
                  <td>{result.category}</td>
                  <td>{result.rating}</td>
                  <td>{result.quantity}</td>
                  <td>{result.cost}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      max={result.quantity}
                      value={quantity}
                      onWheel={(e) => e.preventDefault()}
                      onKeyDown={(e) => e.preventDefault()}
                      onChange={handleQuantityChange}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleAddToCart(result)}>
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {addedToCart && <div>Added to Cart!</div>}
        </div>
      )}
    </div>
  );
};

export default VCDSearchPage;
