The significance of union and intersection types in Typescript.
Ans: 
------------------------------------------------Union--------------------------------------------------- 
Union types are used when a value can be more than a single type. with the symbol | (pipe) being used to represent an "either-or" relationship.

Significance:
In typescript we use Union(|) for our code flexibility, type safety, code readability etch.

Now write example for better understanding:
    
    const goToLab = (decision: string | number | boolean) => {
        console.log(decision);
    }
    goToLab('Yes');
    goToLab(1);
    goToLab(true);



----------------------------------------------intersection---------------------------------------------- 
An intersection type integrates multiple types into a single one, it true when all possible condition are satisfied. Otherwise it's return false."&" is the operator used to define this type.

Significance:
We use for combines multiple types, enhances type safety, Mixins and complex object structures etc

Now write example for better understanding:

    interface Person {
    name: string;
    age: number;
    }

    interface Address {
    city: string;
    }

    type PersonWithAddress = Person & Address;
    const personWithAddress: PersonWithAddress = {
    name: "Nur Hossain Farid",
    age: 23,
    city: "Dhaka"
    };

---------------------------Comparison of Union and Intersection Types-----------------------------------
Union Types (|) act as an "either-or" condition, useful for cases where a value can be one of several types.

Intersection Types (&) act as an "and" condition, combining properties or behaviors from multiple types into one.