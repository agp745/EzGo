"use client"
import { DisplayMap } from "@/src/components/map";

export default function viewMap() {
  return (
    <main className="flex">
      <DisplayMap expandedSidebar={false} route={'/view-map'}/>
    </main>
  )
}