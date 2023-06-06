

export function calculateGasSavings(pricePerGallon, oneWayDistance) {
    const milesPerGallon = 25; // Assuming average mileage of 30 miles per gallon
    
    const roundTripDistanceYear = (parseFloat(oneWayDistance) * 2) * 260
  
    const gallonsUsedPerYear = roundTripDistanceYear / milesPerGallon
  
    const totalCostPerYear = pricePerGallon * gallonsUsedPerYear
  
    return totalCostPerYear.toFixed(2)
}

export function calculateTimeSavings(oneWayDuration) {
    const roundTripDuration = parseInt(oneWayDuration)
    const durationYearlyMinutes = roundTripDuration * 260
    const daysSaved = Math.ceil(durationYearlyMinutes / 1440)
    return daysSaved
}

export function calculateEmissionsSavings(oneWayDistance) {
    const roundTripDistanceYear = (parseFloat(oneWayDistance) * 2) * 260
    const totalEmissions = roundTripDistanceYear * 400
    const totalEmissionsTons = totalEmissions / 1_000_000
    return totalEmissionsTons.toFixed(2)
}
