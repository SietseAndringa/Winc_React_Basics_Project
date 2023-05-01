import { Center, Heading, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ setRecipe }) => {
  return (
    <>
      <Heading p={5} bgColor="yellow.100" color="green.700">
        <Center>Winc Recipe Checker</Center>
      </Heading>
      <Flex bgColor="yellow.100" flexWrap="wrap" justifyContent="space-evenly">
        {data.hits.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe}
            setRecipe={setRecipe}
          />
        ))}
      </Flex>
    </>
  );
};
