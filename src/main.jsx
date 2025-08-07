import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layouts from './components/Layouts.jsx'
import UserRegister from './components/Page/User/UserRegister.jsx'
import UserLogin from './components/Page/User/UserLogin.jsx'
import UserLogout from './components/Page/User/UserLogout.jsx'
import UserProfile from './components/Page/User/UserProfile.jsx'
import Dashboard from './components/Dashboard.jsx'
import ContactCreate from './components/Page/Contacts/ContactCreate.jsx'
import ContactList from './components/Page/Contacts/ContactList.jsx'
import ContactDetail from './components/Page/Contacts/ContactDetail.jsx'
import ContactEdit from './components/Page/Contacts/ContactEdit.jsx'
import AddressCreate from './components/Page/Address/AddressCreate.jsx'
import AddressEdit from './components/Page/Address/AddressEdit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* For Guest */}
        <Route element={<Layouts />}>
          <Route path="register" element={<UserRegister/>}></Route>
          <Route path="login" element={<UserLogin/>}></Route>
        </Route>

        {/* For Authenticated User */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* For Users Profile Page */}
          <Route path="users">
            <Route path="profile" element={<UserProfile/>} />
            <Route path="logout" element={<UserLogout/>} />
          </Route>

          {/* For Users Contacts Data */}
          <Route path="contacts">
            <Route index element={<ContactList/>} />
            <Route path="create" element={<ContactCreate  />} />
            <Route path=":id">
              <Route index element={<ContactDetail/>} />
              <Route path="edit" element={<ContactEdit  />} />
              <Route path="addresses">
                <Route path="create" element={<AddressCreate  />} />
                <Route path=":addressId/edit" element={<AddressEdit  />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
