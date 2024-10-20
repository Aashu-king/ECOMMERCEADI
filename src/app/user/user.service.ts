import { User } from "../../database/models/user.model";
import { UserImage } from "../../database/models/userimages.model";

class UserService {
    async registerUser(firstName : any, lastName : any, email : any, hashedPassword :any, phoneNumber : any, shippingAddress : any, billingAddress : any, roleId : any) {

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phoneNumber,
            shippingAddress,
            billingAddress,
            roleId,
            status: 'Active'
        });

        return newUser;
    }

    async checkIfUserExists(email){
        const userExits = await User.findOne({where : {email : email}})
        if(userExits){
            return true
        }else{
            return false
        }
    }

    async CreateUserImage(savedImagePath : any,userId : any){
        const imageSaved = await UserImage.create({
            imageUrl: savedImagePath,
            userId: userId 
        })
        return imageSaved
    }
}

export default new UserService()