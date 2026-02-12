import { Flex, Heading, Spacer, Box } from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggle";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      p={4}
      align="center"
      shadow="sm"
      position="sticky"
      top="0"
      zIndex="100"
      bg="whiteAlpha.900"
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
      <Spacer />
      <ThemeToggleButton />
    </Flex>
  );
}
