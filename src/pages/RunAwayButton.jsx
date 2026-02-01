import { Box, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function RunawayButton() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const [x, setX] = useState(40); // % based start
  const [y, setY] = useState(40);

  const moveButton = () => {
    const container = containerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

    const cRect = container.getBoundingClientRect();
    const bRect = button.getBoundingClientRect();

    const padding = 20;
    const maxX = cRect.width - bRect.width - padding * 2;
    const maxY = cRect.height - bRect.height - padding * 2;

    let newX = Math.random() * maxX + padding;
    let newY = Math.random() * maxY + padding;

    // Try to jump away from current position
    const centerX = x + bRect.width / 2;
    const centerY = y + bRect.height / 2;

    if (Math.abs(newX - centerX) < 100) {
      newX = newX > centerX ? newX + 140 : newX - 140;
    }
    if (Math.abs(newY - centerY) < 80) {
      newY = newY > centerY ? newY + 100 : newY - 100;
    }

    newX = Math.max(padding, Math.min(maxX + padding, newX));
    newY = Math.max(padding, Math.min(maxY + padding, newY));

    setX(newX);
    setY(newY);
  };

  return (
    <Box
      ref={containerRef}
      position="relative"
      width="100%"
      height={{ base: "160px", md: "240px" }} // smaller on mobile
      minHeight="140px"
      maxHeight="300px"
      // border="2px solid"
      // borderColor="gray.300"
      overflow="hidden"
      borderRadius="lg"
    >
      <Button
        ref={buttonRef}
        position="absolute"
        top={`${y}px`}
        left={`${x}px`}
        onMouseEnter={moveButton}
        onTouchStart={moveButton}
        onClick={moveButton}
        colorScheme="teal"
        size={{ base: "md", md: "lg" }} // smaller on mobile
        px={{ base: 6, md: 8 }}
        py={{ base: 4, md: 6 }}
        fontSize={{ base: "md", md: "lg" }}
        boxShadow="md"
        whiteSpace="nowrap"
        _hover={{
          bg: "teal.400",
          transform: "scale(1.06)",
          boxShadow: "xl",
        }}
        transition="all 0.18s ease-out"
      >
        No!! 😈
      </Button>
    </Box>
  );
}
