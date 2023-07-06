import "./App.css";
import Router from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChakraProvider, Box } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box marginTop={"64px"}>
        <Router />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}
export default App;
