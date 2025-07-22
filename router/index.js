import Router from "express";
import admin from "../controller/admin";

let router = new Router();

router.post("/auth", admin.Authorization);

export default router;
