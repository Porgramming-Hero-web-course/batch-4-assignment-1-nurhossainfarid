{
  /**
       * Problem-5: Write a generic function getProperty that takes an object and a property name as 
        arguments and returns the property value. Add a constraint to ensure the property name exists 
        on the object.
      */

  // Create a generic function getProperty
  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  // Person type
  type Person = {
    name: string;
    age: number;
  };

  // sample input
  const person: Person = { name: "Alice", age: 30 };
  // sample output
  console.log(getProperty(person, "name")); //Alice

  //
}
