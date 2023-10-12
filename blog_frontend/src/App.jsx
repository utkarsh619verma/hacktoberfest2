import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { PostDetails } from "./pages/PostDetails";
import { CreatePost } from "./pages/CreatePost";

export function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/write" element={<CreatePost />} />
        <Route exact path="/posts/post/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
}
