import { TransportationChoice } from "../transportation";
// import { FaCar, FaWalking, FaBicycle } from 'react-icons/fa';



export function PlanRoute({ routeData }) {
    return (
<>
  <section className="absolute bottom-2 w-10/12 flex justify-center rounded drop-shadow-xl text-black ">
  <div className="relative justify-center flex gap-5 bg-white w-[75%] rounded shadow-2xl px-5 py-5">
    <TransportationChoice />
    <div className="pl-10">
      <p className="mb-1"> <span className="text-slate-400"> Time:</span> {routeData.duration && routeData.duration.text}</p>
      <p> <span className="text-slate-400">Distance:</span> {routeData.distance && routeData.distance.text}</p>
    </div>
  </div>
</section>

</>
    )
}