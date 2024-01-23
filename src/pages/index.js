import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "../Components/Navigation";

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    router.push("/january");
  }, [router]);
}
