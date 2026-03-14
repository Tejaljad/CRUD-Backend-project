const express=require("express")
const router=express.Router()

const authMiddleware=require("../middleware/authMiddleware")
const roleMiddleware=require("../middleware/roleMiddleware")

const taskController=require("../controllers/taskController")

router.post("/",authMiddleware,taskController.createTask)
router.get("/",authMiddleware,taskController.getTasks)

router.put("/:id",authMiddleware,taskController.updateTask)

router.delete("/:id",
authMiddleware,
roleMiddleware,
taskController.deleteTask
)

module.exports=router