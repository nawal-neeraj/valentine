import { Box, useColorModeValue } from "@chakra-ui/react";

const DecorativeBox = ({ children }) => {
  const innerBg = useColorModeValue(
    "linear(to-br, pink.50, purple.50)",
    "linear(to-br, #1a1025, #2a143d)",
  );

  return (
    <Box
      position="relative"
      p="2px"
      borderRadius="2xl"
      bgGradient="linear(to-r, purple.400, pink.400, purple.500)"
      animation="pulseGlow 4s ease-in-out infinite"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "2xl",
        filter: "blur(18px)",
        bgGradient: "linear(to-r, purple.400, pink.400, purple.500)",
        opacity: 0.6,
        zIndex: -1,
      }}
    >
      <Box
        bgGradient={innerBg}
        borderRadius="2xl"
        p={{ base: 6, md: 8 }}
        backdropFilter="blur(12px)"
      >
        {children}
      </Box>
    </Box>
  );
};

export default DecorativeBox;
