// import Navbar from "@/components/Navbar";
// import axios from "axios";
// import React from "react";
// import { useState } from "react";

// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState([]);

//   async function SignUp(e) {
//     e.preventDefault();

//     let obj = {
//       name: name,
//       email: email,
//       password: password,
//     };
//     setUser(() => [...user, obj]);
//     setName("")
//     setEmail("")
//     setPassword("")

//     console.log(user);

//     await axios.post("https://post-app-ten.vercel.app/users", user)
//     .then((res)=>{
//       console.log(res)
//     }).catch((err)=>{
//      console.log(err)
//     })

//     alert("Signup Success");
//   }

//   return (
//     <>
//       <Navbar />

//       <form className="form">
//         <span className="signup">Sign Up</span>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter name"
//           className="form--input"
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email address"
//           className="form--input"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="form--input"
//         />

//         <div className="form--marketing"></div>
//         <button onClick={SignUp} className="form--submit">
//           Sign up
//         </button>
//         <p id="p" className="ptag">
//           Already have an account
//         </p>
//         <a className="a" href={"LoginPage"}>
//           Login here
//         </a>
//       </form>
//     </>
//   );
// };

// export default SignupPage;
"use client";
import Head from "next/head";
import Navbar from "@/components/navbar";
import axios from "axios";
import React, { useState } from "react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  // function constructor(n, e, p) {
  //   this.name = n;
  //   this.email = e;
  //   this.password = p;
  // }

  async function SignUp(e) {
    e.preventDefault();

    let obj ={
      name,
      email,
      password
    }

 
    setUser(name ,email ,password);
    console.log("user", user);

    try {
      const res = await axios.post(
        "https://post-app-ten.vercel.app/users",
        user
      );
      console.log(res);
      alert("Signup Success");
    } catch (err) {
      console.log(err);
      alert("Signup Failed");
    }

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Head>
        <title>Sign Up | My Next.js App</title>
        <meta
          name="description"
          content="Sign up for a new account with My Next.js App"
        />
      </Head>

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
