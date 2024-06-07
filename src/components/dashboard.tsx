import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState<{ navn: string; telefon: string } | null>(
    null
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.navn}!</p>
          <p>Your phone number: {user.telefon}</p>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
};

export default Dashboard;
