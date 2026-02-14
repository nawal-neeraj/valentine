import {
  Flex,
  Heading,
  Spacer,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggle";
import AdBanner from "./AddBanner";
import { useEffect, useState } from "react";

export default function Navbar() {
  const innerBg = useColorModeValue(
    "linear(to-br, pink.50, purple.50)",
    "linear(to-br, #1a1025, #2a143d)",
  );

  return (
    <Flex
      as="nav"
      p={4}
      align="center"
      shadow="sm"
      position="sticky"
      top="0"
      zIndex="100"
      bgGradient={innerBg}
      backdropFilter="blur(10px)"
    >
      {/* 💖 SEO Heading */}
      <Box>
        <Heading
          as="h1"
          size="md"
          bgGradient="linear(to-r, pink.400, purple.500)"
          bgClip="text"
          fontWeight="extrabold"
          letterSpacing="wide"
        >
          Valentine’s Week Special 💕
        </Heading>
      </Box>
      <Box>
        <AdBanner />
      </Box>
      <Spacer />
      <ThemeToggleButton />
    </Flex>
  );
}
