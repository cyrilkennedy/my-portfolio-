"use client";

import { createElement, useEffect, useRef, useState } from "react";

export default function Reveal({
  as: element = "div",
  className = "",
  delay = 0,
  children,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return createElement(
    element,
    {
      ref,
      className: `reveal ${className}`.trim(),
      "data-visible": visible,
      style: { "--delay": `${delay}ms` },
    },
    children
  );
}
