"use client";

import { Button } from "@/components/ui/button";
import { LocaleParams } from "@/types";
import { useState } from "react";

export default function Home({ params: { locale } }: LocaleParams) {
  const [name, setName] = useState("");
  const isRequired = name.length < 10;

  const hanndleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="container m-auto my-2">
      <form onSubmit={hanndleSubmit} className="space-y-2">
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          required={isRequired}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
