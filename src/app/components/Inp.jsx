import React from "react";
import { Input } from "@nextui-org/react";

export default function Inp() {
  return (
    <Input 
      type="email"
      placeholder="Search" // Cambiado de defaultValue a placeholder
      className="max-w-xs mt-2 ml-2"
    />
  );
}
