import { calculateGasSavings, calculateTimeSavings, calculateEmissionsSavings } from "@/src/lib/utils/savingsCalculator"

export const SavingsMenu = ({ routeData }) => {

    const pricePerGallon = 3

    return (
        <section className="absolute bottom-2 w-full flex justify-center rounded drop-shadow-xl text-black ">
            <div className="relative flex flex-col gap-1 bg-white w-[85%] rounded shadow-2xl px-5 py-2">
                <div className="flex gap-3">
                    <div>
                        <span className="text-xs text-slate-400">Distance:</span>&nbsp; 
                        {routeData.distance.text}
                    </div>
                    <div>
                        <span className="text-xs text-slate-400">Duration:</span>&nbsp;
                        {routeData.duration.text}
                    </div>
                </div>

                <div className="flex gap-5 text-black">
                    <div>
                        <span className="text-xs text-slate-400">Gas Money Saved:</span>&nbsp;
                        <span className="text-xs">$</span>
                        {calculateGasSavings(pricePerGallon, routeData.distance.text)}
                    </div>
                    <div>
                        <span className="text-xs text-slate-400">Gas Emissions Saved:</span>&nbsp;
                        {calculateEmissionsSavings(routeData.distance.text)}&nbsp;
                        <span className="text-xs">metric tons of CO<span className="align-bottom text-[10px]">2</span></span>
                    </div>
                    <div>
                        <span className="text-xs text-slate-400">Time in Car Saved:</span>&nbsp;
                        {calculateTimeSavings(routeData.duration.text)}&nbsp;
                        <span className="text-xs">days</span>
                    </div>
                    <div className="absolute top-0 right-0 text-[10px] text-slate-300 italic my-1 mx-2">
                        <div>calculated asssuming round-trip | 5 days/week | 1 year</div>
                    </div>
                </div>
            </div>
        </section>
    )
}