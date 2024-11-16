"use client";

import React, { useState } from "react";
import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";
import NavMenu from "@/app/components/studio-intro";

const Home = () => {
  const [currentNavigation, setCurrentNavigation] = useState("");

  // Handle navigation from Navmenu
  const handleNavigation = (navItem: string) => {
    setCurrentNavigation(navItem);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <NavMenu onNavigate={handleNavigation} />
        <Chat navigateTo={currentNavigation} />
      </div>
    </main>
  );
};

export default Home;
