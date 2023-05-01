import {
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

export const RecipeItemPage = ({ recipe, backBtn }) => {
  return (
    <>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 30rem 30rem 1fr",
        }}
        justifyItems="start"
        justifyContent="center"
        bg="yellow.100"
        h="100vh"
      >
        <GridItem
          p={5}
          w="auto"
          bg="yellow.100"
          colStart={{ lg: "2" }}
          colEnd={{ lg: "3" }}
        >
          <Flex justify="space-between" alignItems="center">
            <Button
              onClick={() => backBtn()}
              size="sm"
              mt={2}
              mb={2}
              mr={2}
              bg="green.700"
              color="white"
            >
              Back
            </Button>
            <Heading
              size="md"
              color="green.700"
              textAlign="center"
              m="auto"
              pb={2}
            >
              {recipe.recipe.label}
            </Heading>
          </Flex>
          <Image
            width="full"
            height="20em"
            objectFit="cover"
            borderRadius={10}
            src={recipe.recipe.image}
            alt="picture of recipe"
          />

          <Text mt={2} mb={2} decoration="underline" textTransform="uppercase">
            {recipe.recipe.dishType[0]}
          </Text>
          <Text>Total Cooking Time: {recipe.recipe.totalTime} minutes</Text>
          <Text mb={3}>Servings: {recipe.recipe.yield}</Text>
          <Heading mb={2} fontSize="sm">
            Ingredients:
          </Heading>
          <Flex flexDir="column">
            {recipe.recipe.ingredientLines.map((item) => (
              <Text key={item}>{item}</Text>
            ))}
          </Flex>
        </GridItem>
        <GridItem p={5} w="auto" bg="yellow.100">
          <Heading mb={3} fontSize="sm">
            Health labels:
          </Heading>
          <Flex justify="flex-start" wrap="wrap">
            {recipe.recipe.healthLabels.map((item) => (
              <Text
                bgColor="green.200"
                mb={3}
                mr={3}
                pl={1.5}
                pr={1.5}
                borderRadius="5px"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Heading mb={3} fontSize="sm">
            Diet:
          </Heading>
          <Flex justify="flex-start" wrap="wrap">
            {recipe.recipe.dietLabels.map((item) => (
              <Text
                bgColor="blue.200"
                mb={3}
                mr={3}
                pl={1.5}
                pr={1.5}
                borderRadius="5px"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Heading mb={3} fontSize="sm">
            Cautions:
          </Heading>
          <Flex justify="flex-start" wrap="wrap">
            {recipe.recipe.cautions.map((item) => (
              <Text
                bgColor="red.200"
                mb={3}
                mr={3}
                pl={1.5}
                pr={1.5}
                borderRadius="5px"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Heading mb={3} fontSize="sm">
            Total nutrients:
          </Heading>
          <Flex wrap="wrap">
            <Text mr={3}>
              Calories:{" "}
              {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              kcal
            </Text>
            <Text mr={3}>
              Protein:{" "}
              {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g
            </Text>
            <Text mr={3}>
              Fat: {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} g
            </Text>
            <Text mr={3}>
              Carbs: {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}{" "}
              g
            </Text>
            <Text mr={3}>
              Cholesterol:{" "}
              {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} mg
            </Text>
            <Text mr={3}>
              Sodium: {Math.round(recipe.recipe.totalNutrients.NA.quantity)} mg
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};
