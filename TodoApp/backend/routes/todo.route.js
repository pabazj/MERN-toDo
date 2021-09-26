const express = require('express');
const ToDo = require('../models/toDo');

const router = express.Router();

//get toDo
router.get('/todo', (req, res) => {

    ToDo.find().exec((error, todos) => {
        if (error) {
            return res.status(400).json({ error: error })
        }
        return res.status(200).json({
            success: true,
            data: todos
        });
    })
});

//add toDo
router.post('/todo/add', (req, res) => {

    let newToDo = new ToDo(req.body)
    newToDo.save((error => {
        if (error) {
            return res.status(400).json({ error: error })
        }
        return res.status(200).json({ success: 'ToDo added successfully' });
    }))
});

//update toDo
router.put('/todo/update/:id', (req, res) => {

    ToDo.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (error, todos) => {
            if (error) {
                return res.status(400).json({ error: error })
            }
            return res.status(200).json({
                success: 'ToDo updated successfully'
            });
        }
    )
});

//delete toDo
router.delete('/todo/delete/:id', (req, res) => {

    ToDo.findByIdAndRemove(req.params.id).exec((error, deletedTodos) => {
        if (error) {
            return res.status(400).json({
                message: 'ToDo delete unsuccessfully', error
            })
        }
        return res.status(200).json({
            message: 'ToDo deleted successfully', deletedTodos
        });
    })
});

module.exports = router;