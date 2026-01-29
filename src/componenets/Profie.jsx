import { useSelector } from "react-redux";
import EditProfile from "./EditProfile.jsx";

const Profie = () => {
  const userData = useSelector((store) => store.user);
  return userData && <EditProfile userData={userData} />;
};

export default Profie;
