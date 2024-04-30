import React, { useEffect, useState } from "react";
// import { useSearchParams } from 'react-router-dom';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const onlineHandler = () => {
      setIsOnline(true);
    };

    const offlineHandler = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);
  return isOnline;
};

export default useOnline;
