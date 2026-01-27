import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./componenets/Body";
import Login from "./componenets/Login";
import Profie from "./componenets/Profie";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import Feed from "./componenets/Feed";
import Connections from "./componenets/Connections";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter base="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profie />} />
              <Route path="/connections" element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
