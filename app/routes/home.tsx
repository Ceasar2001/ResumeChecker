import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Checker" },
    { name: "description", content: "Smart Resume Checker That uses AI to check automatically" },
  ];
}

export default function Home() {
  return <main>

  </main>
}
