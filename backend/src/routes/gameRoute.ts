import { Router } from "express";
import { createGame, getAllGames } from "../controllers/GameController";
const router:Router = Router();

/* / already apppended to gameroute in app.ts */
router.get("/", getAllGames);
router.post("/game", createGame);

export default router;
