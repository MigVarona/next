import React from "react";
import {Button} from "@nextui-org/react";

export default function Bu() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center mb-8 mt-7">
      <Button color="default">
        Default
      </Button>
      <Button color="primary">
        Primary
      </Button>  
      <Button color="secondary">
        Secondary
      </Button>  
      <Button color="success">
        Success
      </Button>  
      <Button color="warning">
        Warning
      </Button>  
      <Button color="danger">
        Danger
      </Button>  
    </div>
  );
}
