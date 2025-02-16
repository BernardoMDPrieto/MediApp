import { express } from 'express';

const router = express.Router();

router.get(
    "/",function (req,res){
        console.log("hi!");
        res.status(200).json({message : "hi!"});
    }
);

export default router;