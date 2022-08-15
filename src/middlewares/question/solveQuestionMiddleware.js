const { ObjectId } = require('mongodb');
const User = require('../../db/user')

const solvedQuestionMiddleware = (req, res) => {
    const uid = req.body.uid
    const initAns = req.body.initAns
    const qid = req.body.qid
    const optionSet = req.body.optionSet
    const solved = {question:ObjectId(qid), history:{optionSet:optionSet, initAns:ObjectId(initAns)}}
    console.log("Solved:",solved)
    console.log("user:", ObjectId(uid))
    User.findByIdAndUpdate(ObjectId(uid), { $push : { solved : [solved] } },(err, data) => {
        if(err) throw err;
        res.json({
            success:true
        })
    } )
}

module.exports = solvedQuestionMiddleware