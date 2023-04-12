import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function AdminHomePage() {
  const [token, settoken] = useState();

  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

  return (
    <div className="min-h-screen">
      Admin Dashboard
      <br /> Token = {token}
    </div>
  );
}
