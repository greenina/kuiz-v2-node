var mongoose = require('mongoose')

const solvedSchema = new mongoose.Schema({
    question:{
        type: mongoose.Schema.ObjectId,
        ref:"Qstem"
    },
    history:{
        type:Object,
        default:{
            optionSet:[{
                type: mongoose.Schema.Objectid,
                ref:"Option"
            }],
            initAns:{
                type: mongoose.Schema.ObjectId,
                ref:"Option"
            },
            isCorrect:{
                type:Boolean
            }
        }
    }
})

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        max: 32,
        trim: true
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    imageUrl:{
        type: String,
        default:""
    },
    classes:{
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Class"
            }
        ],
        default:[]
    },
    made : {
        type:[
            {
                type: mongoose.Schema.ObjectId,
                ref: "Qstem"
            }
        ],
        default:[]
    },
    madeOptions:{
        type:[
            {
                type: mongoose.Schema.ObjectId,
                ref: "Option"
            }
        ],
        default:[]
    },
    solved:{
        type: [solvedSchema]
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model("User", userSchema);
