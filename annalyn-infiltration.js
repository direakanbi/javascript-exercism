//Task 1
export function canExecuteFastAttack(knightIsAwake){
  return !knightIsAwake
}

//Task 2
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
     return knightIsAwake || archerIsAwake || prisonerIsAwake
}

//Task 3
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
 
  return  prisonerIsAwake && !archerIsAwake
}

//Task 4
export function canFreePrisoner(knightIsAwake,archerIsAwake,prisonerIsAwake,petDogIsPresent){
  return (!archerIsAwake && petDogIsPresent) || (prisonerIsAwake && !archerIsAwake &&  !knightIsAwake)
}
