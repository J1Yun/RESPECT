import React, { useEffect } from "react";
import axios from "axios";

export default function SecondTestPage() {
  const callApi = async () => {
    axios.get("/api/apitest").then((res) => console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return <div>SecondTestPage</div>;
}
