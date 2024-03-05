//async-hanlder is used to import the express hancler which we created
const aysncHandler = require('express-async-handler');
//
const Contact = require("../models/contactModel");
const contactModel = require('../models/contactModel');
//GET ALL CONTACTS
const getContacts = aysncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});
//CREATE ALL CONTACTS
const createContact = aysncHandler(async(req,res) => {
    console.log("The request body is",req.body);
    const {name,email,phone} = req.body;
    if( !name|| !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(201).json(contact);
});

//GET SINGLE CONTACT
const getContact =aysncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//UPDATE CONTACT
const updateContact = aysncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
    );
    res.status(200).json(updateContact);
});

//DELETE CONTACT
const deleteContact = aysncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    res.status(200).json(contact);
});

module.exports= {getContacts,createContact,getContact,deleteContact,updateContact};