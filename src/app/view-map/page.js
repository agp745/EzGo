"use client"
import { DisplayMap } from "@/src/components/map";
import { Sidebar } from "@/src/components/sidebar";
import PlacesAutocomplete from "@/src/components/map/autoFinish";

export default function viewMap() {
  return (
    <main className="flex">
      <Sidebar />
      <DisplayMap />
      <PlacesAutocomplete />
    </main>
  )
}