import { RefObject, useEffect, useRef } from "react";

function useOutsideClick(
  handler: () => void,
  listen = true
): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);
  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listen);

      return () => document.removeEventListener("click", handleClick, listen);
    },
    [handler, listen]
  );
  return ref;
}

export default useOutsideClick;
