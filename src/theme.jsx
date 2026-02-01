import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const fonts = {
  heading: "'Switzer', sans-serif",
  body: "'Switzer', sans-serif",
};

const theme = extendTheme({
  config,
  breakpoints,
  fonts,
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: "orange.500",
            borderColor: "orange.500",
            _hover: {
              bg: "orange.600",
              borderColor: "orange.600",
            },
          },
        },
      },
    },
  },
  semanticTokens: {
    colors: {
      "bg.base": {
        default: "neutral.50",
        _dark: "neutral.950",
      },
      "bg.primary": {
        default: "neutral.0",
        _dark: "neutral.900",
      },
      "bg.secondary": {
        default: "neutral.50",
        _dark: "neutral.800",
      },
      "bg.tertiary": {
        default: "neutral.100",
        _dark: "neutral.700",
      },
      "bg.orange": {
        default: "orange.500",
        _dark: "orange.500",
      },
      "bg.orange-light": {
        default: "orange.25",
        _dark: "rgba(249, 86, 22, 0.08)",
      },
      "bg.black": {
        default: "neutral.900",
        _dark: "neutral.0",
      },
      "text.white": {
        default: "neutral.0",
        _dark: "neutral.900",
      },
      "text.base": {
        default: "neutral.500",
        _dark: "neutral.400",
      },
      "text.primary": {
        default: "neutral.900",
        _dark: "neutral.50",
      },
      "text.secondary": {
        default: "neutral.700",
        _dark: "neutral.300",
      },
      "text.orange": {
        default: "orange.500",
        _dark: "orange.500",
      },
      "border.primary": {
        default: "neutral.200",
        _dark: "neutral.700",
      },
      "border.secondary": {
        default: "neutral.300",
        _dark: "neutral.600",
      },
      "border.brand-primary": {
        default: "orange.200",
        _dark: "rgba(249, 86, 22, 0.24)",
      },
    },
  },
  colors: {
    neutral: {
      0: "#FFFFFF",
      25: "#FCFCFC",
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D6D6D6",
      400: "#A5A5A5",
      500: "#767676",
      600: "#666666",
      700: "#525252",
      800: "#3C3C3C",
      900: "#252525",
      950: "#1C1C1C",
    },
    orange: {
      25: "#FFF8F5",
      50: "#FFF0EA",
      100: "#FFE0D5",
      200: "#FFD1C0",
      300: "#FFA082",
      400: "#FF7E55",
      500: "#F95616",
      600: "#D94A12",
      700: "#B93E0D",
      800: "#9A3209",
      900: "#7D2706",
      950: "#611C03",
    },
    brand: {
      primary: "#fff",
      newblack: "#2D2D2D",
      newgray: "#878787",
      lightGray: "#F4F4F4",
      orange: "#FF5800",
      darkBlue: "#152B47",
      lightCream: "#FFF6F2",
      lightestGray: "#F5F5F5",
      placeholders: "#BCBCBC",
    },
  },
});

export default theme;
