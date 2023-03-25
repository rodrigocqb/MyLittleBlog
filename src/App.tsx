import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Posts />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
