

import mongoose from "mongoose";

const PeopleSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const PeopleModel = mongoose.model("people", PeopleSchema)

export default PeopleModel 