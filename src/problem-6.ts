{

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" }
    
    interface ProfileInterface {
        name : string
        age : number
        email : string
    } 

    const updateProfile = (profile : ProfileInterface , newData : Partial<ProfileInterface>) : ProfileInterface => {

        let updateProfile = profile

        for (const key in newData) {
            
            (updateProfile as any)[key] = (newData as any)[key]
        }

        return updateProfile

    }
    
    console.log(updateProfile(myProfile, { age: 27 }))

}