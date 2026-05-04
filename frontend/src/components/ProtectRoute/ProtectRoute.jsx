// import { Children, useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../authProvider/AuthProvider";

// function Protectroute({children}){
//     // const navigate = useNavigate();
//     const {user,setuser} = useContext(AuthContext);
//     const token = localStorage.getItem("token");
//     if(!token){
//         return <Navigate to="/login" replace/>;
//     }
//     return children;
// }

// export default Protectroute;

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Protectroute({ children }) {

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default Protectroute;