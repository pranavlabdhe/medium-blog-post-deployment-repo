
import express from 'express';
import { textToSpeechFun } from '../controllers/translate.controller.js';
const router = express.Router();
// // Enable CORS for all routes
// router.use(cors());

router.post('/textToSpeech', textToSpeechFun)
   
export default router;