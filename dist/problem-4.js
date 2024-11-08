"use strict";
{
    const circleDetails = {
        radius: 4
    };
    const sqDetails = {
        length: 5,
        width: 6
    };
    const calculateShapeArea = (areaDetails) => {
        let result;
        if ('radius' in areaDetails) {
            result = Math.PI * (areaDetails.radius ^ 2);
        }
        else {
            result = areaDetails.width * areaDetails.length;
        }
        return result;
    };
    console.log(calculateShapeArea(circleDetails));
    console.log(calculateShapeArea(sqDetails));
}
