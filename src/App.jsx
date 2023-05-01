import { useState } from "react";
import { RecipeItemPage } from "./pages/RecipeItemPage";
import { RecipeListPage } from "./pages/RecipeListPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      {selectedItem ? (
        <RecipeItemPage recipe={selectedItem} backBtn={setSelectedItem} />
      ) : (
        <RecipeListPage setRecipe={setSelectedItem} />
      )}
    </>
  );
};
