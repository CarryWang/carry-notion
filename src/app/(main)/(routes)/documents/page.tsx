"use client";

import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/Working-on-a-project.svg"
        alt="Empty"
        width={300}
        height={300}
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}'s Documents
      </h2>
      <Button size="sm" className="mt-4">
        <PlusCircleIcon className="w-4 h-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
