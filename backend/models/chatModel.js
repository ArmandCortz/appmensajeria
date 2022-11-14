const mongoose = reuquire("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Type.ObjectId,

        ref: "User",
      },
    ],
    letestMessage: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "Message",
    },
    gourpAdmin: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const chats= mongoose.model("chat",chatModel);
module.exports=Chat;