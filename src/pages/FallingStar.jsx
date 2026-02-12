import { Box } from "@chakra-ui/react";

const FallingStars = ({ count = 30 }) => {
  const stars = Array.from({ length: count });

  return (
    <Box
      position="absolute"
      inset={0}
      overflow="hidden"
      zIndex={0}
      pointerEvents="none"
    >
      {stars.map((_, i) => {
        const size = Math.random() * 3 + 2; // 2–5px
        const left = Math.random() * 100;
        const duration = Math.random() * 6 + 6; // 6–12s
        const delay = Math.random() * 6;
        const color =
          Math.random() > 0.5 ? "rgba(236,72,153,0.9)" : "rgba(168,85,247,0.9)";

        return (
          <Box
            key={i}
            position="absolute"
            top="-10px"
            left={`${left}%`}
            width={`${size}px`}
            height={`${size}px`}
            borderRadius="full"
            background={color}
            filter="blur(0.5px)"
            boxShadow={`0 0 12px ${color}`}
            animation={`fallStar ${duration}s linear infinite`}
            animationDelay={`${delay}s`}
          />
        );
      })}
    </Box>
  );
};

export default FallingStars;
