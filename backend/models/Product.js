const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
            unique: true
        },
        img: {
            type: String,
            required: true,
        },
        price: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model("Product", ProductSchema);