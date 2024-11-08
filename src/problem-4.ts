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

    const calculateShapeArea = (areaDetails : CircleType | SquareType) : number => {
        
        let result : number

        if ('radius' in areaDetails) {
            
            result = Math.PI * (areaDetails.radius^2)

        } else {
            
            result = areaDetails.width * areaDetails.length
        }
        
        return result
    }

    console.log(calculateShapeArea(circleDetails))
    console.log(calculateShapeArea(sqDetails))

}