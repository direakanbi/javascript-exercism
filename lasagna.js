const perMinutes = 2
2
export const EXPECTED_MINUTES_IN_OVEN = 40
3
4
5
6
export function remainingMinutesInOven(actualMinutes){
7
   return EXPECTED_MINUTES_IN_OVEN - actualMinutes
8
}
9
10
11
export function preparationTimeInMinutes(layers) {
12
  return perMinutes * layers
13
}
14
15
16
export function totalTimeInMinutes(numberOfLayers, actualMinutes){
17
   return perMinutes * numberOfLayers + actualMinutes
18
}
