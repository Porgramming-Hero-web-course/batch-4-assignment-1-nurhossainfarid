{
  /**
       * Problem-6: Define an interface Profile with properties name, age, and email. Create a function 
        updateProfile that accepts an object of type Profile and an object of type Partial representing 
        the updates. The function should return the updated profile.
      */

  // Profile Interface
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  // UpdateData type
  type UpdateData<T> = {
    [P in keyof T]?: T[P];
  };

  // create a updateProfile function
  const updateProfile = (profile: Profile, data: UpdateData<Profile>): Profile => {
    const updateData: Profile = { ...profile, ...data };
    return updateData;
  };

  // Sample Input
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  // Sample Output
  console.log(updateProfile(myProfile, { age: 23, name: "Nur Hossain" }));// { name: 'Nur Hossain', age: 23, email: 'alice@example.com' }

  //
}
