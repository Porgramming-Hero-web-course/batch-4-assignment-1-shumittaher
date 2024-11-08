{

    type CircleType = {
        radius : number
    }

    type SquareType = {
        length : number
        width: number 
    }

    const circleDetails : CircleType = {
        radius : 4
    }

    const sqDetails : SquareType = {
        length : 5,
        width: 6 
    }

    const isCircle = (shape: CircleType | SquareType): shape is CircleType => {
        return (shape as CircleType).radius !== undefined;
    };

    
    const isSqaure = (shape: CircleType | SquareType): shape is SquareType => {
        return (shape as SquareType).length !== undefined && (shape as SquareType).width !== undefined;
    };

    const calculateShapeArea = (areaDetails : CircleType | SquareType) : number | undefined => {
        
        let result : number | undefined

        if (isCircle(areaDetails)) {
            
            result = Math.PI * (areaDetails.radius^2)

        } else if (isSqaure(areaDetails)) {
            
            result = areaDetails.width * areaDetails.length

        } else {}
        
        return result
    }

    console.log(calculateShapeArea(circleDetails))
    console.log(calculateShapeArea(sqDetails))

}