const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;
const  chatSchema  =  new Schema(
    {
        message: {
            type: String
        },
        sender: {
            type: String
        },
        isAdmin: {
            type: Boolean
        },
        type: {
            type: String
        },
        ip: {
            type: String
        },
        user_name: {
            type: String
        },

    },
    {
        timestamps: true
    });

let  Chat  =  mongoose.model("Chat", chatSchema);
module.exports  =  Chat;