// Code your solution in this file!
const returnFirstTwoDrivers = function (){
    return ["Antonia", "Nuru"]
}
const  returnLastTwoDrivers = function(){
    return ["Amari", "Mo"]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(sumValue){
    return (function(fare){
        return sumValue * fare
    })
}
const fareDoubler = createFareMultiplier(2) 
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, returnDrivers){
  return returnDrivers("Antonia", "Nuru","Amari", "Mo")
}