import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import Dessert from "./Dessert";
import { setDessertsFromAPI } from "../app/features/cartSlice";

function DessertsList() {
  const { data, isPending, error } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );

  const dispatch = useDispatch();
  const desserts = useSelector((store) => store.cart.desserts);

  useEffect(() => {
    if (data && data.data) {
      dispatch(setDessertsFromAPI(data.data));
    }
  }, [data, dispatch]);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="dessert__list-title">Desserts</h1>
      <ul className="desserts__list">
        {desserts.map((dessert) => (
          <Dessert key={dessert.id} dessert={dessert} />
        ))}
      </ul>
    </div>
  );
}

export default DessertsList;
