import { Box, Button, Heading, Text, flexbox } from "@chakra-ui/react";
import React from "react";

function Cart({ cart, handleRemove, total }) {
  return (
    <div>
      <Box>
        {cart.length === 0 ? (
          <>
            <Heading textAlign={"center"} color={"blue.400"}>
              Your cart is empty!
            </Heading>{" "}
          </>
        ) : (
          <>
            <Text
              marginTop={"40px"}
              marginRight={"23%"}
              textAlign={"right"}
              fontSize={"28px"}
              fontWeight={"bold"}
              color={"#38A169"}
            >
              {" "}
              Total Cart value ${total}
            </Text>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {cart.map((item, index) => (
                <li key={index}>
                  <Box
                    listStyleType={"none"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      marginTop={"20px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      w={"370px"}
                      borderRadius={"8px"}
                      boxShadow={
                        " rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;"
                      }
                      padding={"20px"}
                    >
                      <Text
                        color={"grey"}
                        fontSize={"20px"}
                        fontWeight={"bold"}
                      >
                        {item.crypto.name}
                      </Text>
                      <Text>Quantity: {item.quantity}</Text>
                      <Button
                        colorScheme="red"
                        size="sm"
                        ml={4}
                        onClick={() => handleRemove(item.crypto.name)}
                      >
                        Remove
                      </Button>
                    </Box>{" "}
                  </Box>
                </li>
              ))}
            </ul>
          </>
        )}
      </Box>
    </div>
  );
}

export default Cart;
