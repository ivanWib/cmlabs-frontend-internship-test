import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  // const [categories, setCategories] = useState([]);
  // const listUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
  // const filterUrl =
  //   "www.themealdb.com/api/json/v1/1/filter.php?c={category-name}";
  // const detailUrl = "www.themealdb.com/api/json/v1/1/lookup.php?i={meal-id}";

  // useEffect(() => {
  //   axios.get(listUrl).then((res) => {
  //     setCategories(res.data.categories);
  //     console.log(res.data.categories);
  //   });
  // }, []);

  // Test
  // const [filter, setFilter] = useState([]);
  // const filterUrl = "www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
  // const [detail, setDetail] = useState([]);
  const detailUrl = "www.themealdb.com/api/json/v1/1/lookup.php?i=52874";

  // Filter
  useEffect(() => {
    axios.get(detailUrl).then((res) => {
      // setFilter(res.data.filter);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

      {/* <div>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <h1>{category.strCategory}</h1>
              <img src={category.strCategoryThumb} alt="" />
              <p>{category.strCategoryDescription}</p>
            </div>
          );
        })}
      </div> */}

      {/* Filter */}
      {/* <div>
        {filter.map((filter, index) => {
          return (
            <div key={index}>
              <h1>{filter.strMeal}</h1>
              <img src={filter.strMealThumb} alt="" />
              <p>{filter.strInstructions}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
