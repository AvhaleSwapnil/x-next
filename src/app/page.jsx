import Input from "@/components/Input";
import React from "react";

export default function page() {
  return (
    <div className="max-w-xl mx-auto border-l border-r min-h-screen border-gray-200">
      <div className="py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold">Hello</h2>
      </div>
      <Input />
    </div>
  );
}
