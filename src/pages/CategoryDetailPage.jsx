import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  const { category } = useParams();
  const [filter, setFilter] = useState([]);
  const [categoryDescription, setCategoryDescription] = useState("");
  const FilterUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const CategoryUrl = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  useEffect(() => {
    // Fetch category details
    axios.get(CategoryUrl).then((res) => {
      const categoryData = res.data.categories.find(
        (cat) => cat.strCategory === category
      );
      setCategoryDescription(categoryData?.strCategoryDescription || "");
    });

    // Fetch meals based on category
    axios.get(FilterUrl).then((res) => {
      setFilter(res.data.meals);
    });
  }, [FilterUrl, CategoryUrl, category]);

  return (
    <div className="my-3 md:my-5 w-11/12 mx-auto">
      <h1 className="text-xl md:text-4xl font-semibold text-center">
        {category}
      </h1>
      <p className="text-justify md:text-center text-sm md:text-base mt-4">
        {categoryDescription}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 md:mt-10">
        {filter.map((filter, index) => {
          return (
            <div key={index}>
              <div className="relative ">
                <div className="z-10">
                  <img src={filter.strMealThumb} alt="" className="w-full" />
                </div>

                <NavLink
                  to={{
                    pathname: `/meal/${filter.idMeal}`,
                    state: {
                      id: filter.idMeal,
                    },
                  }}
                >
                  <div className="absolute z-20 bottom-0 h-full w-full bg-black opacity-50 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold text-center w-11/12">
                      {filter.strMeal}
                    </span>
                  </div>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailPage;
