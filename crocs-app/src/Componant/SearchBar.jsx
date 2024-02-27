import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Box, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";

const Searchbar = () => {
  return (
    <Box bg="#edf2f2" borderRadius="md" pos="relative">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch color="gray.500" />
        </InputLeftElement>
        <Input
          type="text"
          border="none"
          outline="none"
          _focus={{
            boxShadow: "none",
            border: "1px solid #787373",
            outline: "none",
          }}
          placeholder="Search for products, brands, and more"
        />
      </InputGroup>
      <Box
        pos="absolute"
        top="3.2rem"
        width="full"
        maxH="19.4rem"
        bg="gray.100"
        borderRadius="md"
        overflowY="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Link to="/product" key="example-product" _hover={{ textDecoration: "none", bg: "gray.200" }}>
        </Link>
      </Box>
    </Box>
  );
};

export default Searchbar;
