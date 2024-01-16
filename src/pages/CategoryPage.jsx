import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const listUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    axios.get(listUrl).then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <div className="my-3 md:my-5 w-11/12 mx-auto">
      <Navbar />
      <h1 className="text-xl md:text-3xl font-semibold text-center">
        See All The Delicious Foods
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 md:mt-6">
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
                    pathname: `/category/${category.strCategory}`,
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
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
