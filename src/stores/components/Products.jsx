import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watch from "./Watch";
import Men from "./Men";
import Woman from "./Woman";
import Furniture from "./Furniture";
import AC from "./AC";
import Kitchen from "./Kitchen";
import Books from "./Books";

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers />
      <Watch />
      <Men />
      <Woman />
      <Furniture />
      <Books/>
      <AC />
      <Kitchen />
    </div>
  );
};

export default Products;
