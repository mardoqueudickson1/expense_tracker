import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header  from '../components/admin/index/header'
import Perfil from '../components/admin/perfil/perfil'


const adminPage = () => {
  return (
    <div className='bg-gray-200  min-h-screen'>
    <Header />
    <Perfil  />
    </div>

  );
};

export default adminPage;