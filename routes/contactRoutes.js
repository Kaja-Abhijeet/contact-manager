const express = require('express');
const router = express.Router();
const { 
    getContacts,
        createContact,
        getContact,
        deleteContact,
        updateContact
    } = require('../controllers/contactController');


//GET ALL CONTACTS //UPDATE CONTACTS
router.route("/").get(getContacts).post(createContact);
 
//CREATE SINGLE CONTACT//UPDATE CONTACT//DELETE CONTACT
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;