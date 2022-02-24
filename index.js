const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(array){
    return array.slice(0, 2)
}

function returnLastTwoDrivers(array){
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return function(fair){
        return fair * mult 
    } 
}

//console.log(createFareMultiplier(2))

function fareDoubler(two){
    const double = createFareMultiplier(2)
    console.log(double(two))
    return double(two)
}

function fareTripler(num){
    const triple = createFareMultiplier(3)
    console.log(triple(num))
    return triple(num)
}

//fareTripler(10)

function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers)
}