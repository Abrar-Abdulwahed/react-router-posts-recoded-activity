import { Routes, Route, NavLink } from "react-router-dom";
import Posts from "./Posts";
import PostInfo from "./PostInfo";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <nav className="bg-cyan-500 py-6">
        <div className="w-4/5 mx-auto">
          <NavLink
            to={"/"}
            className={(link) =>
              "text-white" + (link.isActive ? " active-nav-link" : "")
            }
          >
            Posts
          </NavLink>
          <NavLink
            to={"/users"}
            className={(link) =>
              "text-white mx-3" + (link.isActive ? " active-nav-link" : "")
            }
          >
            Another Link
          </NavLink>
        </div>
      </nav>
      <div className="w-4/5 mx-auto">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:postId" element={<PostInfo />} />
          <Route path="/*">Not Found</Route>
        </Routes>
      </div>
    </div>
  );
}
