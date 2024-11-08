"use strict";
{
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    const updateProfile = (profile, newData) => {
        let updateProfile = profile;
        for (const key in newData) {
            updateProfile[key] = newData[key];
        }
        return updateProfile;
    };
    console.log(updateProfile(myProfile, { age: 27 }));
}
