{

    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" }
    
    interface ProfileInterface {
        [key: string]: string | number | undefined;
        name: string
        age: number
        email: string
    } 

    const updateProfile = (profile : ProfileInterface , newData : Partial<ProfileInterface>) : ProfileInterface => {

        let updateProfile : ProfileInterface = profile

        for (const key in newData) {
            if (key in updateProfile){
                profile[key] = newData[key as keyof Partial<ProfileInterface>]
            }
            
        }

        return updateProfile

    }
    
    console.log(updateProfile(myProfile, { name: "Alisone" , age: 102}))

}