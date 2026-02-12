import { Box, Text, Flex, useColorModeValue, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Accepted = () => {
  const navigate = useNavigate();
  const bg = useColorModeValue("pink.50", "purple.900");

  const [savedImage, setSavedImage] = useState(null);
  const [savedName, setSavedName] = useState("");

  // 🌸 Load saved data
  useEffect(() => {
    setSavedImage(localStorage.getItem("valentine_image"));
    setSavedName(localStorage.getItem("valentine_name") || "");
  }, []);

  // 💕 Floating hearts (pink + purple only)
  const hearts = Array.from({ length: 24 }).map((_, i) => {
    const size = Math.random() * 1.5 + 1.2;
    const left = Math.random() * 100;
    const duration = Math.random() * 14 + 10;
    const delay = Math.random() * 8;
    const drift = (Math.random() - 0.5) * 50;

    const icons = ["💗", "💕"];
    const colors = ["#ec4899", "#a855f7"];

    return (
      <Box
        key={i}
        position="absolute"
        fontSize={`${size}rem`}
        left={`${left}%`}
        bottom="-10vh"
        color={colors[i % colors.length]}
        opacity={0}
        pointerEvents="none"
        animation={`floatUp ${duration}s linear infinite`}
        animationDelay={`${delay}s`}
        style={{ "--drift": `${drift}vw` }}
      >
        {icons[i % icons.length]}
      </Box>
    );
  });

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* 🌸 Background */}
      <Box position="absolute" inset={0} bg={bg} opacity={0.4} />

      {/* 💕 Hearts */}
      <Box position="absolute" inset={0}>
        {hearts}
      </Box>

      {/* 💖 Content */}
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        direction="column"
        gap={6}
        textAlign="center"
        p={6}
        position="relative"
        zIndex={5}
      >
        {/* 💕 Message */}
        {savedName && (
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, purple.400, pink.400)"
            bgClip="text"
            animation="heartBeatGlow 1.8s ease-in-out infinite"
          >
            Hey {savedName}💕, you made my heart smile !!
          </Text>
        )}

        {/* 💖 Image or Yay */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {savedImage ? (
            <Image
              src={savedImage}
              alt="Valentine"
              boxSize={{ base: "220px", md: "320px" }}
              objectFit="cover"
              borderRadius="xl"
              filter="drop-shadow(0 0 30px #ec4899)"
              cursor="pointer"
              onClick={() => navigate("/")}
            />
          ) : (
            <Text
              fontSize={{ base: "6xl", md: "8xl" }}
              fontWeight="extrabold"
              bgGradient="linear(to-r, pink.400, purple.400)"
              bgClip="text"
              animation="heartBeatGlow 1.8s ease-in-out infinite"
              textShadow="0 0 25px rgba(236,72,153,0.6)"
            >
              Yay 💖
            </Text>
          )}
        </motion.div>

        {/* 💞 Big heart */}
        <Text
          fontSize={{ base: "120px", md: "160px" }}
          color="purple.400"
          animation="purpleHeartBeat 1.4s ease-in-out infinite"
          filter="drop-shadow(0 0 20px #a855f7)"
        >
          💕
        </Text>
      </Flex>

      {/* 🌈 Animations */}
      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-120vh) translateX(var(--drift))
              rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes heartBeatGlow {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px #ec4899);
          }
          50% {
            transform: scale(1.12);
            filter: drop-shadow(0 0 25px #a855f7);
          }
        }
      `}</style>
    </Box>
  );
};

export default Accepted;
