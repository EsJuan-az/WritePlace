import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import { AppProvider } from './Context';
import MainSection from './Components/MainSection';
import Login from './Pages/Login';
import Latest from './Pages/Latest';
import Fyp from './Pages/Fyp';
import Write from './Pages/Write';
const AppRoutes = function(){
  return useRoutes([
    {
      path:'/register',
      element: <Register/>,
    },
    {
      path:'/login',
      element: <Login/>,
    },
    {
      path:'/latest',
      element: <Latest/>,
    },
    {
      path:'/',
      element: <Fyp/>,
    },
    {
      path: '/write',
      element: <Write/>,
    },
  ]);
};
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar/>
        <MainSection>
          <AppRoutes/>
        </MainSection>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
