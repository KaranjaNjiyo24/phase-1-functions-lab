// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const hqStreet =42;
    return Math.abs(someValue - hqStreet);
}

function distanceFromHqInFeet(someValue){
    const hqInFeet = 264;
    return distanceFromHqInBlocks(someValue) * hqInFeet;
}

// console.log(distanceFromHqInFeet(50));
function distanceTravelledInFeet(start, destination){
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); 

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far'; 
    }
}