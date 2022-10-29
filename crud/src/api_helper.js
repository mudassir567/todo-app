const url = "https://jsonplaceholder.typicode.com/todos/1 ";

const post_url = "https://jsonplaceholder.typicode.com/todos/";
const delete_url='https://jsonplaceholder.typicode.com/todos/1'


function App() {
//   const fetch_todos=()=>{
//    const  alltodos=axios.get('/todos')
//     console.log(alltodos)
//   }
// fetch_todos()

  const [todos, setTodos] = useState([]);
  const get_todo = async () => {
    try {
      const res = await axios.get(url);
      setTodos(res.data);
      console.log(res.data); //ye baar baar print hora console me
    } catch (err) {
      console.log(err);
    }
  };

  const create_todo = async () => {
    try {
      const todo = await axios.post(post_url, {
        userId: 1,
        id: 2,
        title: "cofee",
        completed: false
      });
      console.log(todo.data);
    } catch (err) {
      console.log(err);
    }
    // .then(
    //    (res)=>{
    //      console.log(res.data)
    //    }
    // )
  
 };
 //create_todo()
   


  const update_todo=async ()=>{
    
    try{
      const update_todos= await axios.put(url,{
                  userId: 1,
                  id: 2,
                  title: "chai",
                  completed:false
  
      })
      //console.log(update_todos.data)
      .then((res)=>{
        console.log(res.data)
        //console.log(update_todos.data)  
      })
    }
    
    catch(err){
      console.log(err)
    }
    

  }
  const delete_todo= async () => {

    try{
      const del_todos= await axios.delete(delete_url,
        //console.log(del_todos)
      ).then(
        (res)=>console.log(res.data)
      )
    
    }
    catch(err){
      console.log(err)
    }
  }

