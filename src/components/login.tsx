import React, { useState } from "react";

interface LoginInfo {
  username: string;
  password: string;
  phoneNumber: string;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Hardcoded credentials for the purpose of this example
  const credentials: LoginInfo = {
    username: "admin",
    password: "password",
    phoneNumber: "1234567890",
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if entered username and password match the hardcoded credentials
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      alert("Innlogging vellykket!");
      console.log(
        `Logging with username: ${username}, password: ${password}, and phone number: ${phoneNumber}`
      );

      // Store user information in local storage
      localStorage.setItem("user", JSON.stringify({ username, phoneNumber }));
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          Navn:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Passord:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Telefon:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;
