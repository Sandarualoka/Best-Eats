// import React, { useState } from "react";
// import { data } from "../data";

// const Meals = () => {
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

// export default Meals;
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
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4 items-center">
              <div>
                <p className="font-bold text-black">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
              <button className="bg-black text-white px-2 rounded-full sm:px-1">
                Show Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
