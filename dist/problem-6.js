"use strict";
{
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    const updateProfile = (profile, newData) => {
        let updateProfile = profile;
        for (const key in newData) {
            if (key in updateProfile) {
                profile[key] = newData[key];
            }
        }
        return updateProfile;
    };
    console.log(updateProfile(myProfile, { name: "Alisone", age: 102 }));
}
