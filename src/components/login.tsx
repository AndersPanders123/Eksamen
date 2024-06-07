import React, { useState, useEffect } from "react";

interface LoginInfo {
  username: string;
  password: string;
  phoneNumber: string;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    fetch("/path/to/your/innlogging.json")
      .then((response) => response.json())
      .then((data: LoginInfo) => {
        setUsername(data.username);
        setPassword(data.password);
        setPhoneNumber(data.phoneNumber);
      });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform login logic here
    console.log(
      `Logging with username: ${username}, password: ${password}, and phone number: ${phoneNumber}`
    );

    // Store user information in local storage
    localStorage.setItem("user", JSON.stringify({ username, phoneNumber }));
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
