"use client"
import { DisplayMap } from "@/src/components/map";
import { Sidebar } from "@/src/components/sidebar";

export default function viewMap() {
  return (
    <main className="flex">
      <Sidebar />
      <DisplayMap />
    </main>
  )
}