import logo from './logo.svg';
import './App.css';
// import { AiFillHome } from 'react-icons/ai';
import IMAGE from './assets/images/Jinnah_Mausoleum.jpg';
const obj = { name: "Hello World Object" }
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
const DATA = "Mubashir"
function App() {
  const arr =  ['We', 'are', 'United'] 
  const theme = "orange"
  return (
  <>
    <h1>Hello World {DATA}</h1>
    <h1 className='hhh'>Hello World </h1>
    <ul>
      {arr.map((v,i) => (
        <li key = {i}>{v}</li>
      ))}

      
    </ul>
 
    <ul>
    {list.map((v, i) => {
            return (
            <h1>{v.name}</h1>
              )

            })
            }
    </ul>

   
    <input  style={{backgroundColor: theme}}/>
    <h2 style={{backgroundColor: theme, fontSize : "40px"}}>Mubashir</h2>
    <img src={IMAGE}  alt='' style={{width : "700px"}}/>
    {/* <AiFillHome/> */}
    </>

  );
}




export default App;




