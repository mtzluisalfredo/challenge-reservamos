import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <Box minH={{ base: '100vh' }}>
      <Flex justifyContent={{ base: 'center' }}>
        <Header />
      </Flex>
      {children}
    </Box>
  );
}

export default Layout;
