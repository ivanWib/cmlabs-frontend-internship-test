import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MealsDetailPage() {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  const mealsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    axios.get(mealsUrl).then((res) => {
      setMeals(res.data.meals);
    });
  }, [mealsUrl]);

  const instructions = (instructions) => {
    const sentences = instructions
      .split(". ")
      .map((sentence) => sentence + ".");
    return (
      <ul className="list-decimal">
        {sentences.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="my-3 md:my-5 w-11/12 mx-auto">
      <Navbar />
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <span className="text-xl md:text-4xl">{meal.strMeal}</span>
          <span className="text-base md:text-2xl">
            {" "}
            ({meal.strArea} Culinary)
          </span>
          <hr className="mt-1" />
          <div className="flex flex-col md:flex-row mt-3 md:mt-5 md:gap-3">
            <div className="md:w-1/4">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-3xl"
              />
              <h2 className="text-2xl font-semibold">Recipes</h2>
              <ul className="list-disc ml-5 md:ml-10">
                {Array.from({ length: 20 }, (_, index) => {
                  const ingredientKey = `strIngredient${index + 1}`;
                  const measureKey = `strMeasure${index + 1}`;
                  const ingredient = meal[ingredientKey];
                  const measure = meal[measureKey];

                  return (
                    ingredient && (
                      <li key={index}>
                        {measure} {ingredient}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-semibold">Instruction</h2>
              <p className="ml-5 md:ml-10 text-justify text-sm md:text-base">
                {instructions(meal.strInstructions)}
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <a href={meal.strSource}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3"
              >
                More Info
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </a>
          </div>

          <hr className="h-1 bg-black rounded w-11/12 mx-auto my-3" />

          <h2 className="text-3xl font-semibold text-center my-3">Tutorials</h2>
          <div>
            <div className=" aspect-video ">
              <iframe
                className=" h-full w-full rounded-lg"
                src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}`}
                width="100%"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default MealsDetailPage;
