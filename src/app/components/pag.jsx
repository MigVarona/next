import React from "react";
import {Pagination} from "@nextui-org/react";

export default function Pag() {
  return (
    <div className="flex items-center mb-16 mt-10 items-center justify-center">
    <Pagination total={10} initialPage={1} />
    </div>
  );
}
