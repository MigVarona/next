import React from "react";
import { Input } from "@nextui-org/react";

export default function Inp() {
  return (
    <Input 
      type="email"
      placeholder="Search" // Cambiado de defaultValue a placeholder
      className="max-w-xs  ml-2  text-sm py-2 px-3 w-18"
    />
  );
}
