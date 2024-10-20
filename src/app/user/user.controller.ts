import { Request, Response } from "express";
import UserService from "./user.service";
import bcrypt from 'bcrypt';
import base64 from './../../common/singleFilebase64'
import userService from "./user.service";

class UserController {
    async registerUser(req : Request, res : Response) {
        try {
        const { firstName, lastName, email, password, phoneNumber, shippingAddress, billingAddress, roleId ,userImage} = req.body;
        const findOneUser = await UserService.checkIfUserExists(email)
        if(findOneUser){
            return res.status(201).json({
                message: 'User Already Exists'
            });
        }else{
           

        const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await UserService.registerUser(firstName, lastName, email, hashedPassword, phoneNumber, shippingAddress, billingAddress, roleId);
            if (userImage) {
                const savedImagePath = base64.saveBase64Image(userImage, newUser.userId);
                const userImageTobeSaved = await userService.CreateUserImage(savedImagePath,newUser.userId)
                console.log("🚀 ~ UserController ~ registerUser ~ userImageTobeSaved:", userImageTobeSaved)
            }
            

            return res.status(201).json({
                message: 'User registered successfully',
                data: newUser
            });
            
        }
           
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }

    async createRole(req : Request, res : Response){
        
    }
}

export default new UserController()