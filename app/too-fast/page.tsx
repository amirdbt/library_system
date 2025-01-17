import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-lime-100">
        Whoa, Slow down there, Flash!
      </h1>
      <p className="text-center mt-3 max-w-xl text-light-400">
        Looks like you have been a little too eager, We have put a temporary
        pause on your excitement. Chill for a bit, and try again shortly
      </p>
    </main>
  );
};

export default Page;
