import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const RecipeCard = function ({ recipe, setRecipe }) {
  const filterHealthLabels = recipe.recipe.healthLabels.filter((item) => {
    return item === "Vegan" || item === "Vegetarian";
  });
  console.log(filterHealthLabels);
  return (
    <Card
      onClick={() => setRecipe(recipe)}
      m={5}
      width="25rem"
      cursor="pointer"
      bgColor="green.50"
      borderStyle="solid"
      borderWidth="0.15rem"
      borderRadius="1rem"
      borderColor="green.700"
      variant="outline"
      alignItems="center"
    >
      <CardHeader pb={1}>
        <Heading size="sm" as="u">
          {recipe.recipe.label}
        </Heading>
      </CardHeader>
      <CardBody pt={1}>
        <Text fontSize="lg" align="center">
          {recipe.recipe.mealType[0]}
        </Text>
        <Text mb={2} textAlign="center">
          Dish: {recipe.recipe.dishType[0]}
        </Text>
        <Image
          src={recipe.recipe.image}
          margin="auto"
          boxSize="18rem"
          objectFit="cover"
          alt="Picture of recipe"
          borderRadius="10px"
        />
        <Flex justify="space-evenly">
          {filterHealthLabels.map((filteredItem) => (
            <Text
              bgColor="green.200"
              mt={2}
              pl={1.5}
              pr={1.5}
              borderRadius="5px"
              key={filteredItem}
            >
              {filteredItem}
            </Text>
          ))}
        </Flex>
        <Flex justify="space-evenly">
          {recipe.recipe.dietLabels.map((item) => (
            <Text
              bgColor="blue.200"
              mt={2}
              pl={1.5}
              pr={1.5}
              borderRadius="5px"
              key={item}
            >
              {item}
            </Text>
          ))}
        </Flex>
        <Text mt={2} textAlign="center">
          Cautions:
        </Text>
        <Flex justify="space-evenly" wrap="wrap">
          {recipe.recipe.cautions.map((item) => (
            <Text
              bgColor="red.200"
              pl={1.5}
              pr={1.5}
              borderRadius="5px"
              m={1}
              key={item}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};
