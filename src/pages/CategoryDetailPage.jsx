import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  const { category } = useParams();
  const [filter, setFilter] = useState([]);
  const FilterUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  useEffect(() => {
    axios.get(FilterUrl).then((res) => {
      setFilter(res.data.meals);
      // console.log(res.data.meals);
    });
  }, [FilterUrl]);

  return (
    <div>
      <h1>DetailPage</h1>

      <div className="grid grid-cols-3 gap-4 mx-auto w-11/12 mt-10">
        {filter.map((filter, index) => {
          return (
            <div key={index}>
              <div className="relative ">
                <div className="z-10">
                  <img src={filter.strMealThumb} alt="" className="w-full" />
                </div>

                <NavLink
                  to={{
                    pathname: `/meals/${filter.idMeal}`,
                    state: {
                      id: filter.idMeal,
                    },
                  }}
                >
                  <div className="absolute z-20 bottom-0 h-full w-full bg-black opacity-50 flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">
                      {filter.strMeal}
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

export default DetailPage;
