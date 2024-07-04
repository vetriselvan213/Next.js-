"use client";

import { useTheme } from "@/components/theme-Provider";
import { clientSideFunction } from "@/utils/client-utils";


export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction()
  return (
    <>
      <h1>
        Client Route {result}
      </h1>
    </>
  );
}