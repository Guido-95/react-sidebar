import React,{useContext,useState} from 'react'

const AppContext = React.createContext();

function AppProvider({children}) {
  const [isOpenSidebar,setIsOpenSidebar] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const openModal = ()=>{
    setIsModalOpen((old)=>{
      return !old;
    });
  }

  const closeModal = ()=>{
    setIsModalOpen(false);
  }

  const openSidebar = () => {
    setIsOpenSidebar(true)
  }

  const closeSidebar = () => {
    setIsOpenSidebar(false)
  }

  return (
    <AppContext.Provider
    value={
     {isOpenSidebar,
     openSidebar,
     closeSidebar,
     isModalOpen,
     openModal,
     closeModal}}>
       
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = ()=>{
  return useContext(AppContext);
}

export {AppProvider,useGlobalContext}