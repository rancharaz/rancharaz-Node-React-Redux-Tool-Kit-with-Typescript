import { Router } from "express";
import { createGame, getAllGames, getGameById } from "../controllers/GameController";
const router:Router = Router();

/* / already apppended to gameroute in app.ts */
router.get("/", getAllGames);
router.post("/game", createGame);
router.get("/game/:id", getGameById)

export default router;