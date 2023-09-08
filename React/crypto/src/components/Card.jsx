import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function Card({ crypto, addToCart }) {
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleBuy = () => {
    if (!quantity || isNaN(quantity) || quantity <= 0) {
      setError("Please enter a valid quantity");
      return;
    }
    setError("");
    addToCart(crypto, parseInt(quantity));
    setQuantity("");
  };

  return (
    <Box
      w={"300px"}
      p={"20px"}
      borderRadius={"8px"}
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
      }
    >
      <Heading as="h2" size="md">
        {crypto.name}
      </Heading>
      <Text fontSize="lg" mt={2}>
        Price: ${crypto.price}
      </Text>
      <Flex gap={"10px"} mt={4}>
        <Input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Spacer />
        <Button onClick={handleBuy} colorScheme="blue">
          Buy
        </Button>
      </Flex>
      {error && <Text color="red.500">{error}</Text>}
    </Box>
  );
}

export default Card;
