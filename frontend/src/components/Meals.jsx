// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Modal, Button, IconButton, Pagination } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// const Food = () => {
//   const [productData, setProductData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [cart, setCart] = useState([]);
//   const [selectedDays, setSelectedDays] = useState([false, false, false]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const itemsPerPage = 4; // Number of items to display per page

//   useEffect(() => {
//     const fetchData = async (pageNumber) => {
//       try {
//         const response = await axios.get(
//           `https://backfood.tfdatamaster.com/api/v1/itempart?pageNumber=${pageNumber}&itemsPerPage=${itemsPerPage}`
//         );

//         const formattedProductData = response.data.map((product) => ({
//           id: product._id,
//           name: product.name,
//           price: product.price,
//           description: product.description,
//           promotionStatus: product.promotionStatus,
//           image: `data:image/jpeg;base64,${product.image}`,
//         }));

//         setProductData(formattedProductData);
//         setTotalPages(Math.ceil(response.data.totalItems / itemsPerPage));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData(currentPage);
//   }, [currentPage]);

//   const handleOpenModal = (product) => {
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleToggleDay = (index) => {
//     const newSelectedDays = [...selectedDays];
//     newSelectedDays[index] = !newSelectedDays[index];
//     setSelectedDays(newSelectedDays);
//   };

//   const handleAddToCart = () => {
//     if (selectedProduct) {
//       const selectedDates = selectedDays.reduce((dates, isSelected, index) => {
//         if (isSelected) {
//           const date = new Date();
//           date.setDate(date.getDate() + index);
//           dates.push(date.toISOString().split("T")[0]);
//         }
//         return dates;
//       }, []);

//       const updatedCart = [
//         ...cart,
//         { ...selectedProduct, dates: selectedDates },
//       ];
//       setCart(updatedCart);
//       handleCloseModal();
//       setSelectedDays([false, false, false]);
//     }
//   };

//   const handlePageChange = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div className="max-w-[1640px] m-auto px-4 py-12">
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
//         {productData.map((product, index) => (
//           <div
//             key={index}
//             className="border shadow-lg rounded-lg hover:scale-105 duration-300 flex flex-col"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-[200px] object-cover rounded-t-lg"
//             />
//             <div className="flex justify-between px-2 py-4 items-center">
//               <div>
//                 <p className="font-bold text-black">{product.name}</p>
//                 <p>
//                   <span className="bg-orange-500 text-white p-1 rounded-full">
//                     {product.price}
//                   </span>
//                 </p>
//               </div>
//               <button
//                 className="bg-black text-white px-2 rounded-full sm:px-1"
//                 onClick={() => handleOpenModal(product)}
//               >
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 flex items-center justify-center">
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={handlePageChange}
//           color="primary"
//         />
//       </div>

//       <Modal open={modalOpen} onClose={handleCloseModal}>
//         {/* ... (existing code) */}
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//           <div className="absolute inset-0" onClick={handleCloseModal}></div>
//           <div className="max-w-[400px] m-auto px-4 py-12 text-center relative">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               {selectedProduct?.name}
//             </h2>
//             <IconButton
//               className="ml-4"
//               style={{ color: "white" }}
//               onClick={handleCloseModal}
//             >
//               <CloseIcon />
//             </IconButton>
//             <img
//               src={selectedProduct?.image}
//               alt={selectedProduct?.name}
//               className="w-full h-[200px] object-cover rounded-lg mb-4"
//             />
//             <p className="text-white mb-4">{selectedProduct?.description}</p>
//             <div className="flex items-center justify-center mb-4">
//               {[0, 1, 2].map((index) => (
//                 <button
//                   key={index}
//                   className={`mx-4 text-white border-white focus:outline-none focus:border-blue-500 p-2 ${
//                     selectedDays[index] ? "border-blue-500" : ""
//                   }`}
//                   onClick={() => handleToggleDay(index)}
//                 >
//                   Day {index + 1}
//                 </button>
//               ))}
//             </div>
//             <Button variant="contained" onClick={handleAddToCart}>
//               Add to Cart
//             </Button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Food;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal, Button, IconButton, Pagination } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Food = () => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedDays, setSelectedDays] = useState([false, false, false]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 4; // Number of items to display per page

  useEffect(() => {
    const fetchData = async (pageNumber) => {
      try {
        const response = await axios.get(
          `https://backfood.tfdatamaster.com/api/v1/itempart?pageNumber=${pageNumber}&itemsPerPage=${itemsPerPage}&category=${category}`
        );

        const formattedProductData = response.data.map((product) => ({
          id: product._id,
          name: product.name,
          price: product.price,
          description: product.description,
          promotionStatus: product.promotionStatus,
          image: `data:image/jpeg;base64,${product.image}`,
        }));

        setProductData(formattedProductData);
        setTotalPages(Math.ceil(response.data.totalItems / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(currentPage);
  }, [currentPage, category]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleToggleDay = (index) => {
    const newSelectedDays = [...selectedDays];
    newSelectedDays[index] = !newSelectedDays[index];
    setSelectedDays(newSelectedDays);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const selectedDates = selectedDays.reduce((dates, isSelected, index) => {
        if (isSelected) {
          const date = new Date();
          date.setDate(date.getDate() + index);
          dates.push(date.toISOString().split("T")[0]);
        }
        return dates;
      }, []);

      const updatedCart = [
        ...cart,
        { ...selectedProduct, dates: selectedDates },
      ];
      setCart(updatedCart);
      handleCloseModal();
      setSelectedDays([false, false, false]);
    }
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {productData.map((product, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4 items-center">
              <div>
                <p className="font-bold text-black">{product.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {product.price}
                  </span>
                </p>
              </div>
              <button
                className="bg-black text-white px-2 rounded-full sm:px-1"
                onClick={() => handleOpenModal(product)}
              >
                <ShoppingCartOutlinedIcon />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="absolute inset-0" onClick={handleCloseModal}></div>
          <div className="max-w-[400px] m-auto px-4 py-12 text-center relative">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {selectedProduct?.name}
            </h2>
            <IconButton
              className="ml-4"
              style={{ color: "white" }}
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={selectedProduct?.image}
              alt={selectedProduct?.name}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <p className="text-white mb-4">{selectedProduct?.description}</p>
            <div className="flex items-center justify-center mb-4">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`mx-4 text-white border-white focus:outline-none focus:border-blue-500 p-2 ${
                    selectedDays[index] ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleToggleDay(index)}
                >
                  Day {index + 1}
                </button>
              ))}
            </div>
            <Button variant="contained" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Food;
