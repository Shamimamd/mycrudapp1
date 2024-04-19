const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userController");
const upload = require("../multerconfig/storageConfig");

// CREATE USER
router.post(
  "/user/register",
  upload.single("userprofile"),
  controllers.userpost
);

// GET ALL USER DATA
router.get("/user/details", controllers.userget);

// GET ONE USER DATA
router.get("/user/:id", controllers.singleuserget);

module.exports = router;
