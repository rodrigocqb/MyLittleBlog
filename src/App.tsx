import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import UserDetails from "./pages/UserDetails";
import PostComments from "./pages/PostComments";
import Users from "./pages/Users";

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
          <Route
            path="/user/:userId"
            element={<UserDetails />}
          ></Route>
          <Route
            path="/post/:postId"
            element={<PostComments />}
          ></Route>
          <Route
            path="/users"
            element={<Users />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
