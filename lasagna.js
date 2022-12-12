const perMinutes = 2

export const EXPECTED_MINUTES_IN_OVEN = 40


export function remainingMinutesInOven(actualMinutes){

   return EXPECTED_MINUTES_IN_OVEN - actualMinutes

}


export function preparationTimeInMinutes(layers) {
  return perMinutes * layers

}


export function totalTimeInMinutes(numberOfLayers, actualMinutes){
   return perMinutes * numberOfLayers + actualMinutes

}
