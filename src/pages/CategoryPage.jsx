import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const listUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    axios.get(listUrl).then((res) => {
      setCategories(res.data.categories);
      // console.log(res.data.categories);
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">
        See All The Delicious Foods
      </h1>

      <div className="grid grid-cols-3 gap-4 mx-auto w-11/12 mt-10">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <div className="relative ">
                <div className="z-10">
                  <img
                    src={category.strCategoryThumb}
                    alt=""
                    className="w-full"
                  />
                </div>

                <NavLink
                  to={{
                    pathname: `/details/${category.strCategory}`,
                    state: {
                      category: category.strCategory,
                    },
                  }}
                >
                  <div className="absolute z-20 bottom-0 h-full w-full bg-black opacity-50 flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">
                      {category.strCategory}
                    </span>
                  </div>
                </NavLink>
              </div>

              {/* <h1>{category.strCategory}</h1>
               <p>{category.strCategoryDescription}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
