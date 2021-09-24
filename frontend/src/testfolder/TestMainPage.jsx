import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TestMainPage() {
  const [test, setTest] = useState("");

  const callApi = async () => {
    axios.get("/api").then((res) => {
      const data = res.data.test;
      setTest(data);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div>{test}</div>
      <div>TestMainPage</div>
      <Link to={`/second`}>click!</Link>
    </>
  );
}
