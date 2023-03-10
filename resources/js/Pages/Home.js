import React from 'react';
import Helmet from 'react-helmet';
import { usePage } from '@inertiajs/inertia-react';
import MainLayout from '@/Layouts/Main';

export default function Heros() {
  const { auth } = usePage();
  
  return (
    <MainLayout>
      <Helmet title="Home" />
      <div className="flex flex-col items-center">
        <h1 className="mb-2 text-5xl font-semibold">LaraReactia</h1>
        <h2 className="mb-6 text-xl font-medium text-indigo-800">Welcome {auth.user.name}</h2>
        <p className="text-gray-600">You're now logged in!</p>
        <p className="text-gray-600"><a classname="font-medium" href='/heros'>Go to Heroes List</a></p>
        <p className="text-gray-600"><a classname="font-medium" href='/weapons'>Go to Weapons List</a></p>
        
      </div>
    </MainLayout>
  );
}