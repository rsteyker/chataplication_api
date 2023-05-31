const { Router } = require("express");
const {
  createConversationPairs,
  getAllConversationUsers,
  getAllConversationMessageUsers,
} = require("../controllers/conversations.controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

//Proteger la ruta
router.post("/conversations", authenticate, createConversationPairs);
router.get("/conversations/:typeId", getAllConversationUsers);
router.get("/conversations/:id/messages", getAllConversationMessageUsers);

module.exports = router;
