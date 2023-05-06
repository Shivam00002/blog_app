import Navbar from "@/components/Navbar";
import React from "react";
import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch(`https://post-app-ten.vercel.app/users`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const LoginPage = ({ data }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function LoginFunc(e) {
    e.preventDefault();

    let user = data.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Sahi hai bhai");
    } else {
      alert("Galat hai bHai");
    }
  }
  return (
    <>
      <Navbar />
      <form className="form">
        <span className="signup">Log in </span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          className="form--input"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="form--input"
        />

        <div className="form--marketing"></div>
        <button onClick={LoginFunc} className="form--submit">
          Log in
        </button>

        <p id="p">
          If you new here please{" "}
          <a className="a" href="SignupPage">
            Sign up here
          </a>
        </p>
      </form>
    </>
  );
};

export default LoginPage;
