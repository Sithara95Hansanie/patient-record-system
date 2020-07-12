'use strict'; 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phone_number: {
        type: String
    },
    mobile: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    id: false,
    toObject: {
        virtuals: true,
        getters: true
    },
    toJSON: {
        virtuals: true,
        getters: true,
        setters: false
    },
    timestamps: true
});
PatientSchema.pre('find', function () {
    this.where({ is_active: { $ne: false } });
});
module.exports = mongoose.model('Patient', PatientSchema);