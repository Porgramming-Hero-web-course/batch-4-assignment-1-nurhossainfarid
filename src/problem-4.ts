{
  /**
       * Problem-2: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a 
        function calculateShapeArea that uses type guards to calculate the area based on the shape type.
      */

  // Circle type
  type Circle = {
    shape: string;
    radius: number;
  };
  // Rectangle type
  type Rectangle = {
    shape: string;
    width: number;
    height: number;
  };
  // union Shape type
  type Shape = Circle | Rectangle;

  // create a calculateShapeArea function
  const calculateShapeArea = (shape: Shape): number => {
      if ("radius" in shape) {
      return Math.PI * shape?.radius ** 2;
    } else if ("width" in shape && "height" in shape) {
      return shape?.width * shape?.height;
    }
    return 0;
  };

  // Sample Input 1
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  // Sample Output
  console.log(circleArea);

  // Sample Input 2:
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  // Sample Output 2:
  console.log(rectangleArea);

  //
}
