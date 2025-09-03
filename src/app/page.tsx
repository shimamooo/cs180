import fs from "node:fs";
import path from "node:path";
import { BoopButton } from "~/components/ui/boop-button";

export default function BlogIndexPage() {
  return (
    <main className="container py-12">
      <header className="mb-10 flex items-end justify-between">
        <h1 className="text-4xl font-bold tracking-tight">
          shimamooo's 180 extravaganza
        </h1>
      </header>
    </main>
  );
}
