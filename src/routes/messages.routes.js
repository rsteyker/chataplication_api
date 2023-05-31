const { Router } = require("express");
const { createMessages } = require("../controllers/messages.controllers");

//inicializamos
router = Router();

router.post("/messages", createMessages);

module.exports = router;
