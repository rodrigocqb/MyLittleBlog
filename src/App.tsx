import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
