import React from "react";
import Login from "../components/Authentication/login";
import Signup from "../components/Authentication/signup";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container max="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        textAlign={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m="40px 0 15px 0"
        borderRadius="lg"
        color='black'
        borderWidth="1px">
        <Text fontSize="4xl" fontFamily="work sans">
          CHAT WITH ME
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" >
          <TabList mb='1em'>
            <Tab width='50%'>LOGIN</Tab>
            <Tab width='50%'>SIGN UP</Tab>
          </TabList>
          <TabPanels>
            <TabPanel> <Login/>  </TabPanel>
            <TabPanel>  <Signup/>  </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
