"use client";
import { DisplayMap } from "@/src/components/map";
import GeolocationComponent from "@/src/components/map/geo";

export default function viewMap() {
  return (
    <main>
      <input type="text" placeholder="Location" />
      <button className="box-border">Search</button>
      <DisplayMap />
      <GeolocationComponent />
    </main>
  );
}