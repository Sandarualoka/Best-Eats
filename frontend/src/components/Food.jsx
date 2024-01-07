// import React, { useState } from "react";
// import { data } from "../data";

// const Food = () => {
//   const [foods, setFoods] = useState(data);

//   return (
//     <div className="max-w-[1640px] m-auto px-4 py-12">
//       <h1 className="text-orange-600 font-bold text-4xl text-center">
//         Top Rated Menu Items
//       </h1>

//       {/* Display foods */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
//         {foods.map((item, index) => (
//           <div
//             key={index}
//             className="border shadow-lg rounded-lg hover:scale-105 duration-300"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-[200px] object-cover rounded-t-lg"
//             />
//             <div className="flex justify-between px-2 py-4">
//               <p className="font-bold">{item.name}</p>
//               <p>
//                 <span className="bg-orange-500 text-white p-1 rounded-full">
//                   {item.price}
//                 </span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Food;

// import React, { useState, useEffect } from "react";

// const Food = () => {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend API endpoint
//     const fetchData = async () => {
//       try {
//         const response = await fetch("your-backend-api-endpoint"); // Replace with your actual API endpoint
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json(); // Assuming the response contains JSON data
//         setFoods(data); // Assuming the response contains an array of menu items
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   return (
//     <div className="max-w-[1640px] m-auto px-4 py-12">
//       <h1 className="text-orange-600 font-bold text-4xl text-center">
//         Top Rated Menu Items
//       </h1>

//       {/* Display foods */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
//         {foods.map((item) => (
//           <div
//             key={item.id}
//             className="border shadow-lg rounded-lg hover:scale-105 duration-300"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-[200px] object-cover rounded-t-lg"
//             />
//             <div className="flex justify-between px-2 py-4">
//               <p className="font-bold">{item.name}</p>
//               <p>
//                 <span className="bg-orange-500 text-white p-1 rounded-full">
//                   {item.price}
//                 </span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Food;

import React, { useState } from "react";
import { data } from "../data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
