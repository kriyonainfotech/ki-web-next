"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // show loader at least half a sec for smoothness

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <div
        className={
          loading
            ? "opacity-50 pointer-events-none"
            : "opacity-100 transition-opacity"
        }
      >
        {children}
      </div>
    </>
  );
}
