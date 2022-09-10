import dynamic from "next/dynamic";
import { FC, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const Portal: FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const myPortal = document.getElementById("myportal");

  if (mounted) {
    myPortal?.classList.add("my-portal");
    return createPortal(children, document.getElementById("myportal")!);
  }

  myPortal?.classList.remove("my-portal");
  return null;
};

export default Portal;
