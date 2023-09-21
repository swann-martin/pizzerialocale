import Image from "next/image";
import React from "react";

const Footer = ({ title }: { title: string }) => {
  return (
    <footer className="bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center items-center text-green-600 sm:justify-start">
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              className="object-contain"
              alt="pizzeria-del-parco"
            />
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>

          <p className="mt-4 text-sm text-center text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy;{new Date().getFullYear()}
            <span className="mx-1">{title}</span>
            <span> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
