// import { useEffect, useState } from "react"

// const FetchingData = () => {

//     const [users,setUsers] = useState(0);

//     useEffect(() =>{
//         let promesa = fetch("https://jsonplaceholder.typicode.com/users")
//         promesa
//         .then((res)=>res.json())
//         .then((res)=>setUsers(res))
//         .catch((error)=> console.log(error))
//         .finally(()=>console.log("termino el proceso"))
//     },[])


//   return (
//     <div>FetchingData</div>
//   )
// }

// export default FetchingData