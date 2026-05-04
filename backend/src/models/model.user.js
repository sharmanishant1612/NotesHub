import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Others"]
    },
    profileImage:{
        type:String,
        default:""
    }

});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return;
    }
    this.password =  await bcrypt.hash(this.password,10);
})


userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

const User = mongoose.model("user",userSchema);

export default User;
