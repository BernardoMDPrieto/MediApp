import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
    doctorId: {
        type: String,
        required: [true, 'DoctorId is required.']
    },
    name: {
        type: String,
        required: [true, 'Doctor name is required']
    },
    login:{
        type: String,
        required: [true, 'Login name is required '],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Password is required '],
    },
    medicalSpecialty:{
        type: String,
        required: [true, 'Medical specialty is required '],
    },
    medicalRegistration:{
        type: String,
        required: [true, 'Medical registration is required '],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required '],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required '],
        validate: {
            validator: function (v) {
                return /\d{2} 9\d{4}-\d{4}/.test(v);
            },
            message: props =>
             `${props.value} This is not a valid phone value. Please use the following format 99 91234-4567`
        },
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;