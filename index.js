let start = 50
let destination = 42
function distanceFromHqInBlocks (start,destination){
    console.log(destination-start)
}

distanceFromHqInBlocks(start,destination)

let feet = 264
function distanceFromHqInFeet (){
    console.log((destination-start)*feet)
}
distanceFromHqInFeet()


 function calculateFarePrice(start,destination){
    let feet =(distanceFromHqInFeet(start,destination))
    if (feet<=400){
        return 0;
    }
    else if (feet >400 && feet <= 2000){
        return (feet-400)*0.02;
    }
    else if (feet > 2000 && feet<= 2500){
        return 25
    }
    else if (feet > 2500){
        return 'cannnot travel that far'
    }
    console.log(calculateFarePrice)
 }
 calculateFarePrice(start,destination)