import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const auth = useSelector((store) => store.user.isLoggedIn);
  if (!auth) {
    return <Navigate replace to={"/login"} />;
  } else {
    return <>{props.children}</>;
  }
}
