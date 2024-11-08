"use strict";
{
    const circleDetails = {
        radius: 4
    };
    const sqDetails = {
        length: 5,
        width: 6
    };
    const isCircle = (shape) => {
        return shape.radius !== undefined;
    };
    const isSqaure = (shape) => {
        return shape.length !== undefined && shape.width !== undefined;
    };
    const calculateShapeArea = (areaDetails) => {
        let result;
        if (isCircle(areaDetails)) {
            result = Math.PI * (areaDetails.radius ^ 2);
        }
        else if (isSqaure(areaDetails)) {
            result = areaDetails.width * areaDetails.length;
        }
        else { }
        return result;
    };
    console.log(calculateShapeArea(circleDetails));
    console.log(calculateShapeArea(sqDetails));
}
