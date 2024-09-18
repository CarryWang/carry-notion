"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 dark:text-white">
      <h1 className="text-3xl sm:tex-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to
        <span className="underline"> Cotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Contion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter Cotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
