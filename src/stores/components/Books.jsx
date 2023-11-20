import React from "react";
import { booksData } from "../data/books";
import { Link } from "react-router-dom";

const Books = () => {
  const firstSixImages = booksData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
        <h3>Books</h3>
      </div>
      <div className="proSection">
        {firstSixImages.map((item) => {
          return (
            <div className="imgBox">
              <Link to="/book">
                <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
