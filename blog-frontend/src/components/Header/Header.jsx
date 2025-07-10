import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', path: '/' },
    { id: 'nuevo-post', label: 'Escribir', path: '/newpost' },
    { id: 'contacto', label: 'Contacto', path: '/contact' },
  ]

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-left'>
          <div className='logo'>
            <span className='logo-text'>Blog de Cesar Guerra</span>
            <nav className='nav-menu'>
              {menuItems.map(item => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              )
              )}
            </nav>

          </div>
        </div>

        <div className='header-right'>
          *
        </div>
      </div>
    </header>
  )
}

export default Header
