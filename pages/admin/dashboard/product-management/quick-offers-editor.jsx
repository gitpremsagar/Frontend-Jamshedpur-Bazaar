import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AsideLeft from "@/components/admin/dashboard/AsideLeft/AsideLeft";
import H2 from "@/components/UI/H2";

export default function QuickOffersEditor() {
  const [token, settoken] = useState();

  useEffect(() => {
    const jwtToken = Cookies.get("token");
    settoken(jwtToken);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-8">
        <div className="col-span-2 p-5 min-h-screen bg-gray-700">
          <AsideLeft />
        </div>
        <div className="col-span-6">
          <main className="p-10">
            <H2>Quick Offers Editor</H2>
          </main>
        </div>
      </div>
    </div>
  );
}
