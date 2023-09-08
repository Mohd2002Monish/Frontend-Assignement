import { useState } from "react";

import Card from "./Card";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import Cart from "./Cart";
function CryptoPurchase() {
  const data = [
    { name: "Bitcoin", price: 40000 },
    { name: "Ethereum", price: 2800 },
    { name: "Litecoin", price: 150 },
  ];
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleCart = (crypto, quantity) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (item) => item.crypto.name === crypto.name
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      updatedCart.push({ crypto, quantity });
    }

    setCart(updatedCart);
    const updatedTotalPrice = updatedCart.reduce(
      (total, item) => total + item.crypto.price * item.quantity,
      0
    );
    setTotalPrice(updatedTotalPrice);
  };
  const handleRemove = (cryptoName) => {
    const updatedCart = cart.filter((item) => item.crypto.name !== cryptoName);
    setCart(updatedCart);

    const updatedTotalPrice = updatedCart.reduce(
      (total, item) => total + item.crypto.price * item.quantity,
      0
    );
    setTotalPrice(updatedTotalPrice);
  };
  return (
    <div>
      <Box>
        <Heading as={"h2"} p={"30px"} textAlign={"center"} color={"blue.400"}>
          Crypto Purchase Interface
        </Heading>
        <Center margin={"20px"}>
          <Button onClick={() => setShow(!show)}>
            {!show ? "Go to Cart" : "Back to Home"}
          </Button>
        </Center>
        {!show ? (
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"20px"}
          >
            {" "}
            {data.map((el, index) => (
              <>
                <Card key={index} crypto={el} addToCart={handleCart} />
              </>
            ))}
          </Box>
        ) : (
          <Box mt={8}>
            <Cart cart={cart} handleRemove={handleRemove} total={totalPrice} />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default CryptoPurchase;
