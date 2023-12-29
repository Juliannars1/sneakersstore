import { Schema, model } from "mongoose";
import { User } from "../interface/user.interface";

const UserSchema = new Schema<User>({
  //user_id: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model("users", UserSchema);
export { UserModel };
