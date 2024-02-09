import Image from "next/image";
import React from "react";
import "../styles/book.css";
import Menu from "./Menu";

const Book = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="h-screen w-full absolute overflow-hidden">
        <div className="card">
          <div className="imgBox">
            <div className="bark"></div>
            <Image
              className=""
              src="/images/cover2.png"
              alt="portfolio cover image"
              fill
              priority
            />
          </div>
          <div className="details">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
