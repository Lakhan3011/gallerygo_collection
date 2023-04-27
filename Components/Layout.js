// import { Content } from "../Components/Content";
import { Box } from "../Components/Box";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
  </Box>
);
