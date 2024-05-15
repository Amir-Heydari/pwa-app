import { NavBar } from 'antd-mobile';
import { Route, Routes, MemoryRouter as Router } from 'react-router-dom';

import MenuBar from './components/mainLayout/general/menuBar/MenuBar';

import Home from './components/menus/home/Home';
import Message from './components/menus/message/Message';
import Account from './components/menus/account/Account';
import Todo from './components/menus/todo/Todo';
import './App.css';

function App() {
  return (
    <Router initialEntries={['/home']}>

      <div className='app'>

        <div className='top'>
          <NavBar>Navigator</NavBar>
        </div>

        <div className='body'>
          <div className='content'>
            <Routes >
              <Route path='/home' element={<Home />} />
              <Route path='/todo' element={<Todo />} />
              <Route path='/message' element={<Message />} />
              <Route path='/me' element={<Account />} />
            </Routes >
          </div>
        </div>

        <div className='bottom'>
          <MenuBar />
        </div>

      </div>

    </Router>
  );
}

export default App;
