const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;
const  chatSchema  =  new Schema(
    {
        message: {
            type: String
        },
        sender: {
            type: Number
        },
        receiver:{
          type: Number  
        },
        type: {
            type: String
        }, 
        user_sender: {
            type: String
        },
        user_receiver: {
            type: String
        },
        chat_id: {
            type: String
        },
        operativo: {
            type: String
        }

    },
    {
        timestamps: true
    });

let  Chat  =  mongoose.model("Chat", chatSchema);
module.exports  =  Chat;