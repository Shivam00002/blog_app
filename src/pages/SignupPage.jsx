import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(user);
  }, [user]);

  async function SignUp(e) {
    e.preventDefault();

    let obj = {
      name: name,
      email: email,
      password: password,
    };
    setUser(obj);
    setName("");
    setEmail("");
    setPassword("");

    await axios
      .post("https://post-app-ten.vercel.app/users", obj)
      .then((res) => {
        console.log(res);
        alert("Signup Success");
      })
      .catch((err) => {
        console.log(err);
        alert("Signup Failed");
      });
  }

  return (
    <>
      <Navbar />

      <form className="form">
        <span className="signup">Sign Up</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="form--input"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="form--input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form--input"
        />

        <div className="form--marketing"></div>
        <button onClick={SignUp} className="form--submit">
          Sign up
        </button>
        <p id="p" className="ptag">
          Already have an account
        </p>
        <a className="a" href={"LoginPage"}>
          Login here
        </a>
      </form>
    </>
  );
};

export default SignupPage;
