import React from "react";

const Food = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 text-bold text-4xl text-center">
        Top rated menu items
      </h1>

      {/* filter type */}

      <div>
        <p>Filter Type</p>

        <div>
          <button>All</button>
          <button>Burgers</button>
          <button>Pizzas</button>
          <button>Rice</button>
          <button>Rotties</button>
        </div>
      </div>

      {/* Filter price */}
      <div>
        <p>Filter Price</p>

        <div>
          <button>$</button>
          <button>$$</button>
          <button>$$$</button>
          <button>$$$$</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
