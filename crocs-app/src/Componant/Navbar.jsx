import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import Searchbar from "./SearchBar";

export const Navbar = () => {
  return (
    <Box
      position={"sticky"}
      top="0"
      zIndex={"100"}
      bg="white"
      boxShadow="0px 7px 7px -5px rgba(120,108,120,0.2)"
    >
      <Flex
        height={{ base: "3.2rem", md: "4.94rem" }}
        px={{ base: "1rem", md: "3rem" }}
        gap="2rem"
        justify={"space-between"}
        align={"center"}
      >
        <Link to="/">
          <Box minW={"6rem"}>
            <Image
              src="https://i.ibb.co/tX9nZsT/Peachpuff-Brush-Stroke-Photography-Logo-1-removebg-preview.png"
              alt="logo"
              width="12rem"
              height={{ base: "5rem", md: "100%" }}
            />
          </Box>
        </Link>
        <MegaMenu/>
        <Box minWidth={"10rem"} width="30rem" display={{ base: "none", lg: "block" }}>
            <Searchbar/>
        </Box>
      </Flex>
    </Box>
  );
};
