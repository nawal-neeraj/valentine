import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

const AlertBox = ({ title, description, type = "warning", onClose }) => {
  const isSuccess = type === "success";

  return (
    <Box
      position="fixed"
      top="24px"
      left="50%"
      transform="translateX(-50%)"
      zIndex={9999}
      animation="alertPop 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Box
        px={6}
        py={4}
        minW="320px"
        maxW="420px"
        borderRadius="xl"
        bgGradient={
          isSuccess
            ? "linear(to-r, purple.400, pink.400)"
            : "linear(to-r, orange.400, red.400)"
        }
        color="white"
        boxShadow="0 0 30px rgba(168,85,247,0.45)"
      >
        <Flex align="center" gap={3}>
          <Icon as={isSuccess ? CheckCircleIcon : WarningIcon} boxSize={6} />
          <Box flex="1">
            <Text fontWeight="bold">{title}</Text>
            <Text fontSize="sm" opacity={0.9}>
              {description}
            </Text>
          </Box>
          <Button
            size="sm"
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.300" }}
            onClick={onClose}
          >
            ✕
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default AlertBox;
