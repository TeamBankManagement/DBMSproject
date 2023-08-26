import React from "react";

const Ping = () => {
  return (
    <>
      <span className="absolute -right-px -top-px flex h-3 w-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
        <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
    </>
  );
};

export default Ping;
