'use client';

import Link from "next/link";
import { AiOutlineHome, AiOutlineBook, AiOutlineCode, AiOutlineFormatPainter } from 'react-icons/ai'

// ${active == 0 ? "bg-button-active dark:bg-dark-button-active" : "hover:bg-button-hover" }

interface Props {}
export default function Tabs({}: Props) {
  return (
    <>
      <Link
        className={`${
          0 == 0
            ? "bg-button-active dark:bg-dark-button-active"
            : "hover:bg-button-hover dark:hover:bg-dark-button-hover"
        } flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-text-1 dark:text-dark-text-1`}
        href="#"
      >
        <AiOutlineHome className="h-6 w-6" />
        Home
      </Link>
      <Link
        className={`${
          1 == 0
            ? "bg-button-active dark:bg-dark-button-active"
            : "hover:bg-button-hover dark:hover:bg-dark-button-hover"
        } flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-text-1 dark:text-dark-text-1`}
        href="#"
      >
        <AiOutlineBook className="h-6 w-6" />
        Documentation
      </Link>
      <Link
        className={`${
          1 == 0
            ? "bg-button-active dark:bg-dark-button-active"
            : "hover:bg-button-hover dark:hover:bg-dark-button-hover"
        } flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-text-1 dark:text-dark-text-1`}
        href="#"
      >
        <AiOutlineCode className="h-6 w-6" />
        Components
      </Link>
      <Link
        className={`${
          1 == 0
            ? "bg-button-active dark:bg-dark-button-active"
            : "hover:bg-button-hover dark:hover:bg-dark-button-hover"
        } flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-text-1 dark:text-dark-text-1`}
        href="#"
      >
        <AiOutlineFormatPainter className="h-6 w-6" />
        Colors
      </Link>
    </>
  );
}
