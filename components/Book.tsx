import Image from "next/image";
import React from "react";
import "../styles/book.css";

const Book = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="h-screen w-full absolute overflow-hidden">
        <div className="card">
          <div className="imgBox">
            <div className="box"></div>
            <Image
              className=""
              src="/images/coverr.png"
              alt="card cover image"
              fill
              priority
            />
          </div>
          <div className="details">
            <h4 className="text-red-800 ">Congratulations!</h4>
            <h4 className="text-green-500 ">You are older!</h4>
            <p>Wishing you all the best this world can have </p>
            <p>on this day and more to come.</p>
            <p className="text-right">Happy Birthday!</p>
            <p className="text-right">♥Diana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
