"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";
import Button from "@/app/auth/components/Button";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.replace("/auth");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/auth");
  };

  if (!user) return null;

  return (
    <div className={styles.wrapper}>
      <h1>Welcome to the Dashboard</h1>
      <p>سلام {user.name.first} {user.name.last}</p>
      <Button className={styles.logoutButton} onClick={handleLogout}>
        خروج
      </Button>
    </div>
  );
};

export default Dashboard;
