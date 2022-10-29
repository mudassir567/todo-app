const  express =require  ('express')
const  {create_todo,get_todo,delete_todo,update_todo}= require ('./todo_controller')

const router = express.Router();


router.post('/',create_todo)
router.get('/',get_todo)
router.delete('/:id',delete_todo)
router.put('/:id',update_todo)

module.exports=router               