const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');




// Make a GET endpoint responding with a JSON of the array

router.get('/', (req, res) => res.json(members));

// make a GET endpoint responding with one user's data

router.get('/:id', (req, res) => {

    const found = members.filter(member = member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member = member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the id ${req.params.id} found` });
    }

});

// Posting Data to that API

router.post('/', (req, res) => {

    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'

    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and an email'});
    }

    members.push(newMember);
    res.json();
});

module.exports = router;