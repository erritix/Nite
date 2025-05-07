import '@/styles/App.scss';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Tabs } from './components/Tabs';

import Note from './pages/Note';
import Task from './pages/Task';
import Settings from './pages/Settings';
import { ReactElement, ReactNode, useState } from 'react';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

// const [modal, setModal] = useState<ReactNode>(
//   <div>
//     helo
//   </div>
// )

function AppContent() {
  const location = useLocation();

  return (
    <>
      <div className='sidebar'>
        <Tabs 
          tabs={[
            { icon: 'note-sticky', linkTo: '/' },
            { icon: 'check-square', linkTo: '/task' },
            { icon: 'search', linkTo: '' },
            { icon: 'cog', linkTo: '/settings', className: 'tab-bottom' },
          ]}
          currentPath={location.pathname}
        />
      </div>
      <Routes>
        <Route index element={<Note />} />
        <Route path='task' element={<Task />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
      <div id='modal'>
        {/* <Modal  
          title="This is Modal"
        >
          Hello world
        </Modal> */}
      </div>
    </>
  );
}

// interface AppendModalInterface {
  
// }

// type ModalComponent = () => ReactNode

// function appendModal(component: ModalComponent, properties?: undefined) {
//   setModal(component())  
// }

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

// appendMod({
//   title: 'hello',
//   content: (
//     <div>this is modal</div>
//     <span onClick={}>close modal</span>
//   ),
//   buttons: [<Button ... />, <Button ... />, <Button ... />, ...]
// })

// appendModal((modal) => {

//   return
// })