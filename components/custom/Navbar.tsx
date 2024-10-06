import React from "react";

// shadcn components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// - Todo Dialog
import TodoDialog from "@/components/custom/TodoDialog";

const Navbar = () => {
  return (
    <>
      <div className="shadow-lg h-[5rem]">
        <div className="flex justify-between items-center h-full mx-4 text-3xl font-semibold">
          <div>TODO LIST</div>
          <div>
            <TodoDialog />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
