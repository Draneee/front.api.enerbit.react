import { useEffect, useRef, useState } from "react";

const Modals = ({ showModal, closeModal, state, width, children, view }) => {
  const [animationState, setAnimationState] = useState(false);
  useEffect(() => {
    if (showModal) setTimeout(() => setAnimationState(true), 0);
  }, [showModal]);

  const element = useRef(null);

  const close = () => {
    setAnimationState(false);
    setTimeout(closeModal, 100);
  };

  const isCloseModal = (e) => !element.current.contains(e.target) && close();

  return showModal ? (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={`modalAbsolute ${animationState ? "animation" : ""}`}
      onClick={isCloseModal}
    >
      <div
        className={`modalContent ${animationState ? "animation2" : ""} ${
          state === "Delete" ? "deleteModal" : ""
        }`}
        style={width ? { width: width } : {}}
        ref={element}
      >
        {children}
        {state === "Preview" ? (
          <>
            <button className="btn clear exit" onClick={close}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="25" rx="5" fill="#EAEAEA" />
                <path
                  d="M18.1973 19.4444C17.8473 19.4444 17.4974 19.2966 17.2174 19.0012L7.06909 8.06736C6.57917 7.47634 6.57917 6.51594 7.13908 5.9988C7.69899 5.40779 8.60889 5.40779 9.09876 5.9988L19.1772 16.9326C19.7371 17.5236 19.7371 18.484 19.1772 19.0012C18.8972 19.2966 18.5473 19.4444 18.1973 19.4444Z"
                  fill="#8C8C8C"
                />
                <path
                  d="M7.97859 19.2967C7.62868 19.2967 7.27874 19.1491 6.99879 18.8535C6.43888 18.2625 6.43888 17.3021 6.99879 16.7849L17.3571 6.07278C17.917 5.48176 18.8269 5.48176 19.3169 6.07278C19.8767 6.66379 19.8767 7.62419 19.3169 8.14133L8.95846 18.8535C8.67846 19.1491 8.32859 19.2967 7.97859 19.2967Z"
                  fill="#8C8C8C"
                />
              </svg>
            </button>
          </>
        ) : (
          <div>
            <button className="btn clear exit" onClick={close}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="25" rx="5" fill="#EAEAEA" />
                <path
                  d="M18.1973 19.4444C17.8473 19.4444 17.4974 19.2966 17.2174 19.0012L7.06909 8.06736C6.57917 7.47634 6.57917 6.51594 7.13908 5.9988C7.69899 5.40779 8.60889 5.40779 9.09876 5.9988L19.1772 16.9326C19.7371 17.5236 19.7371 18.484 19.1772 19.0012C18.8972 19.2966 18.5473 19.4444 18.1973 19.4444Z"
                  fill="#8C8C8C"
                />
                <path
                  d="M7.97859 19.2967C7.62868 19.2967 7.27874 19.1491 6.99879 18.8535C6.43888 18.2625 6.43888 17.3021 6.99879 16.7849L17.3571 6.07278C17.917 5.48176 18.8269 5.48176 19.3169 6.07278C19.8767 6.66379 19.8767 7.62419 19.3169 8.14133L8.95846 18.8535C8.67846 19.1491 8.32859 19.2967 7.97859 19.2967Z"
                  fill="#8C8C8C"
                />
              </svg>
            </button>
          </div>
        )}
        <span className="text__container__status__modal">{state}</span>
      </div>
    </div>
  ) : null;
};

export default Modals;
