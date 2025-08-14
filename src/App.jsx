import { YourCart, DessertsList, Dessert } from "./components";
import { useSelector } from "react-redux";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { isPending } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  if (isPending) {
    return (
      <div className="loader-wrapper">
        <span className="loader-text">Loading...</span>
      </div>
    );
  }
  return (
    <main className="align__elements">
      <DessertsList />
      <YourCart />
    </main>
  );
}

export default App;
