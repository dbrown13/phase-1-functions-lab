function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    let currentDistance = distanceTravelledInFeet(startBlock, endBlock);
    let farePrice = 0;
    if (currentDistance < 400) {
        return farePrice / 100;
    } else if (currentDistance >= 400 && currentDistance <= 2000) {
        return (currentDistance - 400) * 2 / 100;
    } else if (currentDistance > 2000 && currentDistance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}