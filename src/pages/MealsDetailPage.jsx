import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MealsDetailPage() {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  const mealsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    axios.get(mealsUrl).then((res) => {
      setMeals(res.data.meals);
      //   console.log(res.data);
    });
  }, [mealsUrl]);

  return (
    <div>
      <h1>MealPage</h1>
      {meals &&
        meals.map((meal) => (
          <div key={meal.idMeal}>
            <p>{meal.strMeal}</p>
          </div>
        ))}
    </div>
  );
}

export default MealsDetailPage;
