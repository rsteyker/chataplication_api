const { Router } = require("express");
const {
  findAllTypes,
  cretaeTypes,
} = require("../controllers/types.controllers");

const router = Router();

router.get("/types", findAllTypes);
router.post("/types", cretaeTypes);

module.exports = router;
