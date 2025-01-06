"use client";
import React, { MouseEventHandler } from "react";
import { LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: MouseEventHandler;
  size?: "auto" | "very-small" | "small" | "medium" | "large";
  title?: string;
  className?: string;
}

function Modal({
  children,
  isOpen = true,
  onClose,
  size = "large",
  title,
  className,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`relative bg-white rounded-lg p-3 shadow-lg flex flex-col justify-between ${
              size === "large"
                ? "w-2/3 h-2/3"
                : size === "medium"
                ? "w-2/4 h-3/5"
                : size === "small"
                ? "w-2/5 h-2/5"
                : size === "very-small"
                ? "w-2/5 h-2/6"
                : "w-2/4 h-auto"
            } ${className}`}
          >
            <div className="flex justify-between w-full h-[10%]">
              <div>
                <h2 className="absolute top-3 text-lg font-semibold">
                  {title}
                </h2>
              </div>
              <div>
                <button
                  className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                  onClick={onClose}
                >
                  <LuX size={24} />
                </button>
              </div>
            </div>
            <div className={`h-[90%]`}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
