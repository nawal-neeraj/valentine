import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error", err);
    }
  }, []);

  return (
    <Box my={6} textAlign="center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="pub-7323562436553846"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </Box>
  );
};

export default AdBanner;
