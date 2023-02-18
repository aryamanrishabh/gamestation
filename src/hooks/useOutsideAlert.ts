import { useEffect, RefObject, MouseEvent, ChangeEvent } from "react";

const useOutsideAlert = (
  ref: RefObject<HTMLElement>,
  handleClick: () => void,
  ignoreClass?: string
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const target = event?.target as HTMLElement;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        !target?.className?.includes?.(ignoreClass!)
      ) {
        handleClick();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClick]);
};

export default useOutsideAlert;
