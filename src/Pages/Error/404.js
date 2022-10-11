import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { withLoader } from "../../Components/Loader";
function Page404() {
//   const navigate = useNavigate();
//   useEffect(()=>{
//       navigate("/");
//   },[navigate])
  return <h2>Page404</h2>;
}

export default withLoader(Page404);
