const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route('').get(controller.index);
router.route('/delete/:no').get(controller.delete);
router.route('/delete').post(controller._delete);
router.route('/add').post(controller.add);

module.exports = router;