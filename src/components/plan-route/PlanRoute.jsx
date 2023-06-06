import { TransportationChoice } from "../transportation";
// import { FaCar, FaWalking, FaBicycle } from 'react-icons/fa';



export function PlanRoute({ routeData }) {
    return (
<>
  <section className="absolute bottom-2 w-10/12 flex justify-center rounded drop-shadow-xl text-black ">
    <div className="relative justify-center flex gap-1 bg-white w-[75%] rounded shadow-2xl px-5 py-5">
      <TransportationChoice />

      {/* Distance and Time */}
      <div>
        <p>Time: {routeData.duration && routeData.duration.text}</p>
        <p>Distance: {routeData.distance && routeData.distance.text}</p>
      </div>
    </div>
  </section>
</>
    )
}