"use client";

import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styles from "./auth.module.scss";
import { useRouter } from "next/navigation";

const iranPhoneRegex = /^(?:\+98|0)?9\d{9}$/;

const AuthPage = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validatePhone = (value: string) => {
    if (!iranPhoneRegex.test(value)) {
      setError("شماره تلفن نامعتبر است");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(phone)) return;

    setLoading(true);

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      if (!res.ok) throw new Error("API error");
      const data = await res.json();

      localStorage.setItem("user", JSON.stringify(data.results[0]));
      router.push("/dashboard");
    } catch {
      setError("خطا در دریافت اطلاعات");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>صفحه ورود</h1>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="شماره تلفن ایران"
          type="tel"
          error={error}
        />
        <Button disabled={loading}>
          {loading ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
