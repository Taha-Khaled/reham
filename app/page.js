"use client";

import "./page.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const noButtonRef = useRef(null);

  const [showContainer, setShowContainer] = useState(true);
  const [yesScale, setYesScale] = useState(1);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setShowContainer(false);
    }
  }, []);

  const nextPage = () => {
    router.push("/yes");
  };

  const moveButton = () => {
    const button = noButtonRef.current;
    if (!button) return;

    const x = Math.random() * (window.innerWidth - button.offsetWidth) - 100;
    const y = Math.random() * (window.innerHeight - button.offsetHeight) - 30;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    setYesScale((prev) => Math.min(prev + 0.1, 2));
  };

  if (!showContainer) return null;

  return (
    <div className="container">
      <div>
        <h1 className="header_text">Dear Reham,</h1>
        <h1 className="header_text">Because every day with you already feels special</h1>
        <h1 className="header_text">Will you be my Valentine ? ♥</h1>
      </div>

      <div className="gif_container">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>

      <div className="buttons">
        <button
          className="btn"
          id="yesButton"
          style={{
            transform: `scale(${yesScale})`,
            transition: "transform 0.2s ease",
          }}
          onClick={nextPage}
        >
          Yesss
        </button>

        <button
          ref={noButtonRef}
          className="btn"
          id="noButton"
          onMouseOver={moveButton}
          onClick={moveButton}
        >
          No
        </button>
      </div>
    </div>
  );
}
