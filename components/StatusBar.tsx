"use client";

import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass mt-16 px-6 py-4 flex gap-6 text-sm text-neutral-300">
      <span>🟢 Online</span>
      <span>India Time: {time}</span>
      <span>🎧 Spotify connecting...</span>
    </div>
  );
}
