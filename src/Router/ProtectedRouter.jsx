import React from "react";
import useAuth from "../componant/cutom-hook/useAuth";
import { Navigate } from "react-router-dom";
function ProtectedRouter({ chiledren }) {
  const { currentUser } = useAuth();

  return currentUser ? chiledren : <Navigate to="/login"></Navigate>;
}

export default ProtectedRouter;
