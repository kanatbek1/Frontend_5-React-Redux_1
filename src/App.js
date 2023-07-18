import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ChangeTitle from './components/change_title/ChangeTitle';
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/mainPage/aboutPage/aboutPage';
import ContactsPage from './contactsPage/contactsPage';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutPage />
      <ChangeTitle />
      <ContactsPage />
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;




