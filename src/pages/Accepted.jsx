import {
  Box,
  Button,
  Text,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import mine from "../../public/mine.jpg";

const Accepted = () => {
  // Generate hearts dynamically with random properties
  const hearts = Array.from({ length: 28 }, (_, i) => {
    const size = Math.random() * 1.8 + 1.2; // between ~1.2rem and 3rem
    const left = Math.random() * 100; // random horizontal position %
    const duration = Math.random() * 15 + 12; // 12–27 seconds
    const delay = Math.random() * 10; // 0–10s start delay
    const drift = (Math.random() - 0.5) * 60; // -30vw to +30vw sideways drift

    // Cycle through different heart emojis and colors
    const heartTypes = ["💗", "💖", "❤️", "💕", "🩷"];
    const colors = ["#ff69b4", "#ff1493", "#ffb6c1", "#ff85c0"];
    const heart = heartTypes[i % heartTypes.length];
    const color = colors[i % colors.length];

    return (
      <Box
        key={i}
        position="absolute"
        fontSize={size + "rem"}
        color={color}
        left={left + "%"}
        bottom="-10vh" // start below the viewport
        opacity={0}
        pointerEvents="none"
        userSelect="none"
        textShadow="0 0 12px rgba(255, 105, 180, 0.7)"
        animation={`floatUp ${duration}s linear infinite`}
        animationDelay={delay + "s"}
        style={{ "--drift": drift + "vw" }}
      >
        {heart}
      </Box>
    );
  });

  const bg = useColorModeValue("pink.50", "pink.950");

  return (
    <Box
      position="relative"
      minHeight="100vh"
      overflow="hidden"
      // background="linear-gradient(to bottom right, #ff9a9e, #ff69b4)"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        background: bg,
        opacity: 0.25,
        zIndex: 1,
      }}
    >
      {/* Floating hearts container */}
      <Box
        position="absolute"
        inset={0}
        zIndex={2}
        pointerEvents="none"
        overflow="hidden"
      >
        {hearts}
      </Box>

      {/* Main romantic content */}
      <Flex
        position="relative"
        zIndex={10}
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding={6}
        textAlign="center"
        gap={8}
      >
        <Text
          fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
          fontWeight="extrabold"
          background="linear-gradient(to right, #ff69b4, #ff1493, #ff69b4)"
          backgroundClip="text"
          textShadow="0 4px 20px rgba(255, 20, 147, 0.5)"
          letterSpacing="tight"
          lineHeight={1.1}
          animation="glow 4s ease-in-out infinite alternate"
        >
          Yess!!!
        </Text>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
        >
          <Box position="relative" mx="auto">
            <Image
              src={mine}
              alt="Glowing Heart"
              boxSize={{ base: "220px", md: "320px", lg: "400px" }}
              objectFit="contain"
              filter="drop-shadow(0 0 30px #ff69b4)"
              // borderRadius="full" // optional soft circle
            />
            {/* <Text
              position="absolute"
              top="80%"
              left="50%"
              transform="translate(-50%, -50%) rotate(-15deg)"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              color="pink.300"
              opacity={0.4}
              pointerEvents="none"
              userSelect="none"
              textShadow="0 0 10px rgba(0,0,0,0.5)"
              whiteSpace="nowrap"
            >
              © NNB 2026
            </Text> */}
          </Box>
        </motion.div>

        {/* Big static heart (emoji) */}
        <Text fontSize={{ base: "140px", md: "180px" }}>💞</Text>
      </Flex>

      {/* Global keyframes (put this in public/index.html <style> or global CSS file) */}
      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-120vh) translateX(var(--drift))
              rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 15px #ff69b4;
          }
          to {
            text-shadow:
              0 0 40px #ff1493,
              0 0 60px #ff69b4;
          }
        }
      `}</style>
    </Box>
  );
};

export default Accepted;
