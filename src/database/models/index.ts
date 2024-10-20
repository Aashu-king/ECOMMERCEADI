import { Sequelize } from "sequelize-typescript";
import { UserImage } from "./userimages.model";
import { User } from "./user.model";
import { Role } from "./role.model";

const sequelize = new Sequelize({
  database : 'ecommerce',
  dialect : "mysql",
  username : 'root',
  password : 'Aashutosh@123',
  host : 'localhost',
  models : [UserImage,User,Role]
})

export default sequelize