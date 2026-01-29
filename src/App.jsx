import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./componenets/Body.jsx";
import Login from "./componenets/Login.jsx";
import Profie from "./componenets/Profie.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./componenets/Feed.jsx";
import Connections from "./componenets/Connections.jsx";
import Requests from "./componenets/Requests.jsx";

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
              <Route path="/requests" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
