import React, { useState } from "react";
import { Box, Heading, Input, Select, Button, Text } from "@chakra-ui/react";
function TempratureConverter() {
  const [input, setInput] = useState("");
  const [selectedScale, setSelectedScale] = useState("C");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  const convertToCelsius = () => {
    setError(false);
    const Temp = parseFloat(input);
    if (Temp * 0 !== 0) {
      setError(true);
    }
    if (selectedScale === "C") {
      setResult(`${Temp}°C is equal to ${Temp}°C`);
    } else {
      const celsius = (Temp - 32) * (5 / 9);
      setResult(`${Temp}°F is equal to ${celsius.toFixed(2)}°C`);
    }
  };

  const convertToFahrenheit = () => {
    setError(false);
    const Temp = parseFloat(input);
    if (Temp * 0 !== 0) {
      setError(true);
    }
    if (selectedScale === "F") {
      setResult(`${Temp}°F is equal to ${Temp}°F`);
    } else {
      const fahrenheit = (Temp * 9) / 5 + 32;
      setResult(`${Temp}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    }
  };

  return (
    <Box p={4}>
      <Heading textAlign={"center"} color={"blue.400"} as="h1" size="lg" mb={4}>
        Temperature Converter
      </Heading>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10%"}
      >
        {" "}
        <Input
          w={{ base: "84%", lg: "36%" }}
          type="number"
          placeholder="Enter Temperature"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          mb={4}
        />
        <Select
          w={{ base: "84%", lg: "36%" }}
          placeholder="Select scale"
          value={selectedScale}
          onChange={(e) => setSelectedScale(e.target.value)}
          mb={4}
        >
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
        </Select>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
      >
        {selectedScale == "" ? (
          <Text>Select A Scale</Text>
        ) : (
          <Box>
            {selectedScale == "F" ? (
              <Button onClick={convertToCelsius} colorScheme="green" mr={2}>
                Convert to C°
              </Button>
            ) : (
              <Button onClick={convertToFahrenheit} colorScheme="yellow" mr={2}>
                Convert to F°
              </Button>
            )}
          </Box>
        )}
      </Box>
      {error ? (
        <Text
          textAlign={"center"}
          color={"red"}
          fontWeight={"bold"}
          fontSize={"20px"}
          mt={4}
        >
          Not A Valid Number
        </Text>
      ) : (
        <Text
          textAlign={"center"}
          color={"green"}
          fontWeight={"bold"}
          fontSize={"20px"}
          mt={4}
        >
          {result}
        </Text>
      )}
    </Box>
  );
}

export default TempratureConverter;
