import {
  Box,
  Button,
  Flex,
  Input,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DecorativeBox from "./DecorativeBox";
import AlertBox from "./AlertBox";
import FallingStars from "./FallingStar";
import uploadBase64ToCloudinary from "../utils/Cloudanry";
import { generateToken } from "../utils/JwtToken";

/* 💜 Purple success animation */
const successAnimation = {
  "@keyframes successPulse": {
    "0%": { backgroundColor: "#ec4899" },
    "35%": { backgroundColor: "#a855f7" },
    "55%": { backgroundColor: "#a855f7" },
    "100%": { backgroundColor: "#ec4899" },
  },
};

const Entry = () => {
  const bg = useColorModeValue("neutral.0", "neutral.900");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [preview, setPreview] = useState(null);
  const [animateSuccess, setAnimateSuccess] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [alertData, setAlertData] = useState({
    title: "",
    description: "",
    type: "warning",
  });

  const handleClick = () => inputRef.current.click();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result; // base64 string

      // Start animation for button
      setAnimateSuccess(true);
      setTimeout(() => setAnimateSuccess(false), 1800);

      // Start uploading
      setIsUploading(true);
      try {
        const uploadedUrl = await uploadBase64ToCloudinary(base64);
        if (uploadedUrl) {
          const token = generateToken({ image: uploadedUrl }, "1d");
          setPreview(token); // save Cloudinary URL
          localStorage.setItem("valentine_image", uploadedUrl);
        }
        console.log("Uploaded Image URL:", uploadedUrl);
      } catch (err) {
        console.error("Cloudinary upload error:", err);
      } finally {
        setIsUploading(false); // stop loading
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setAlertData({
        title: "Name Required 💔",
        description: "Please enter your name",
        type: "warning",
      });
      setShowAlert(true);

      return;
    }

    if (!preview) {
      setAlertData({
        title: "Image Missing 📸",
        description: "Please select an image",
        type: "warning",
      });
      setShowAlert(true);
      return;
    }

    localStorage.setItem("valentine_name", name);

    setAlertData({
      title: "Saved Successfully 💜",
      description: "Redirecting to dashboard...",
      type: "success",
    });
    setShowAlert(true);

    // setTimeout(() => {
    //   navigate("/dashboard");
    // }, 1800);
    const url = new URL(window.location.origin + "/dashboard");
    url.searchParams.set("name", encodeURIComponent(name));
    url.searchParams.set("image", encodeURIComponent(preview));
    setShareUrl(url.toString());
    // setTimeout(() => {
    // navigate("/dashboard");
    //   navigate("/dashboard");
    // }, 1800);
    setName("");
    setPreview("");
  };

  const handleCopyLink = async () => {
    if (navigator.share) {
      // Modern share API
      try {
        await navigator.share({
          title: "Valentine's Surprise 🌹",
          text: "Check out my special message!",
          url: shareUrl,
        });
        toast({
          title: "Shared successfully!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else if (navigator.clipboard) {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Link copied to clipboard!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      alert("Your browser does not support sharing or clipboard copy.");
    }
  };

  return (
    <>
      <Box mx="auto" p={6} minH="100vh" position="relative">
        <FallingStars count={135} />
        {showAlert && (
          <AlertBox {...alertData} onClose={() => setShowAlert(false)} />
        )}

        <Box
          mx="auto"
          w={{ base: "90%", md: "70%", xl: "60%" }}
          p={6}
          minH="100vh"
        >
          <Box
            bg={bg}
            borderRadius="lg"
            boxShadow="lg"
            minH="60vh"
            display="flex"
            flexDirection="column"
            sx={successAnimation}
          >
            <DecorativeBox>
              {/* ❤️ Heart */}
              <Box textAlign="center" mb={6}>
                <Image
                  src="heart.png"
                  alt="heart"
                  h={{ base: "140px", md: "180px" }}
                  mx="auto"
                  mb={6}
                  transition="transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  _hover={{ transform: "scale(1.15)" }}
                />
              </Box>

              {/* ✍️ Name */}
              <Flex justify="center">
                <Box w={{ base: "90%", lg: "80%" }}>
                  <Input
                    h="56px"
                    rounded="full"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    bg={useColorModeValue("neutral.50", "neutral.800")}
                    transition="all 0.25s ease"
                    _hover={{
                      boxShadow: "0 0 22px rgba(168, 85, 247, 0.6)",
                    }}
                    _focus={{
                      boxShadow: "0 0 35px rgba(168, 85, 247, 0.9)",
                      transform: "scale(1.03)",
                    }}
                    _placeholder={{
                      color: "purple.300",
                    }}
                  />
                </Box>
              </Flex>

              {/* 🖼 Image */}
              <Flex pt="2rem" justify="center">
                <Box w={{ base: "90%", lg: "80%" }} textAlign="center">
                  <Input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    display="none"
                    onChange={handleImageChange}
                  />

                  <Button
                    onClick={handleClick}
                    h="56px"
                    w="100%"
                    fontWeight="bold"
                    rounded="full"
                    color="white"
                    bgGradient="linear(to-r, pink.400, pink.500, pink.600)"
                    boxShadow="lg"
                    transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                      bgGradient:
                        "linear(to-r, purple.400, purple.500, purple.600)",
                      transform: "scale(1.06)",
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.7)",
                    }}
                    _active={{
                      transform: "scale(0.96)",
                    }}
                    isLoading={isUploading} //
                    loadingText="Wait..."
                    _focusVisible={{
                      outline: "none",
                      boxShadow:
                        "0 0 0 3px rgba(168, 85, 247, 0.6), 0 0 25px rgba(168, 85, 247, 0.9)",
                    }}
                  >
                    {preview ? "💖 Image Selected" : "📸 Choose Image"}
                  </Button>
                </Box>
              </Flex>
              {/* 🚀 Submit */}
              <Box mt="auto" textAlign="center" pt="1.5rem">
                <Button
                  w="90%"
                  h="56px"
                  rounded="full"
                  bgGradient="linear(to-r, pink.400, pink.600)"
                  color="white"
                  onClick={handleSubmit}
                  _hover={{
                    bgGradient:
                      "linear(to-r, purple.400, purple.500, purple.600)",
                    transform: "scale(1.06)",
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.7)",
                  }}
                >
                  Submit
                </Button>
              </Box>
              {shareUrl && (
                <Flex mt={3} gap={3}>
                  <Input
                    h="56px"
                    rounded="full"
                    placeholder="Enter Name"
                    bg={useColorModeValue("neutral.50", "neutral.800")}
                    transition="all 0.25s ease"
                    _hover={{
                      boxShadow: "0 0 22px rgba(168, 85, 247, 0.6)",
                    }}
                    _focus={{
                      boxShadow: "0 0 35px rgba(168, 85, 247, 0.9)",
                      transform: "scale(1.03)",
                    }}
                    _placeholder={{
                      color: "purple.300",
                    }}
                    value={shareUrl}
                    isReadOnly
                  />
                  <Button
                    h="56px"
                    rounded="full"
                    bgGradient="linear(to-r, pink.400, pink.600)"
                    color="white"
                    _hover={{
                      bgGradient:
                        "linear(to-r, purple.400, purple.500, purple.600)",
                      transform: "scale(1.06)",
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.7)",
                    }}
                    onClick={handleCopyLink}
                    colorScheme="purple"
                  >
                    Copy
                  </Button>
                </Flex>
              )}
            </DecorativeBox>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Entry;
