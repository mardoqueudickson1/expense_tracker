import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header  from '../components/admin/index/header'
import Perfil from '../components/admin/perfil/perfil'
import Footer from '@/components/admin/index/Footer';


const adminPage = () => {
  return (
    <div className='bg-gray-200  min-h-screen'>
    <Header />
    <Perfil  />
    <Footer />
    </div>

  );
};

export default adminPage;