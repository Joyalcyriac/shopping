import logo from './logo.svg';
import './App.css';
import New from './Components/New';
import Navbar from './Components/Navbar';
import Addstudent from './Components/Addstudent';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
{/* <New></New> */}
<Navbar/>

<Routes>
<Route path='/' element={<New/>}/>
<Route path='/add' element={<Addstudent data={{id:'',name:'',grade:''}}method='post'/>}/>

</Routes>

   </div>
  );
}

export default App;
