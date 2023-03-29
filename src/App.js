import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import logo from './logo.svg';



import Home ,{ loader as eventsLoader } from './pages/Home';
import Layout from './pages/Layout';
import Login ,{ action as loginAction } from './pages/Login';
import Register,{ action as authAction } from './pages/Register';
import RootLayout from './pages/Root';
import { tokenLoader } from './Utils/auth';
import { action as logoutAction } from './pages/Logout';
import EventListPage from './pages/EventListPage';
import EventModal from './componets/UI/EventModal';
import AddEventForm, { action as manipulateEventAction } from './componets/AddEventForm';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <Home />, loader: eventsLoader, },
      { path: 'register', element: <Register />, action: authAction },
      { path: 'login', element: <Login />, action: loginAction },
      { path: 'events', element: <EventListPage />, loader: eventsLoader,action:manipulateEventAction },

      { path: 'addevent', element: <AddEventForm />,action:manipulateEventAction },
     
      
      {
        path: 'logout',
        action: logoutAction,
      },
      
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
      // <Home/>
       
  );
}

export default App;
