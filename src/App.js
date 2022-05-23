import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Modal from './components/Modal'
import './App.css';
import { useGlobalContext } from './context/context'

function App() {
  const {openModal,isModalOpen} = useGlobalContext();
  console.log(isModalOpen);
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Modal/>
     
      {!isModalOpen && (
        <div className="div-modal-pic">
          <h2>Modal img</h2>
          <div className='container-img'>
      
            <img className='img-picture' onClick={openModal} src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='img-pc-pic'/>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
