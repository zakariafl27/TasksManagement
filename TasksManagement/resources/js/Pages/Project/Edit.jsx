import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react'

export default function Edit() {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <AuthenticatedLayout >

      <Head title='Projects' />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

          <form onSubmit={onSubmit} className='p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg'>
            <div>
              <InputLabel htmlfor="project_image_path"/>
              <TextInput id="project_image_path" type="file" name="image" className="mt-1 block w-full" />
              <InputError message="Invalid image" className="mt-2" />
            </div>

            <div className='mt-4'>
              <InputLabel htmlfor="project_name" value={"Project Descritpion"}/>
              <Text id="project_name" name="description" isFocused={true} className="mt-1 block w-full" />
              <InputError message="Invalid name" className="mt-2" />
            </div>

            <div>
              <InputLabel htmlfor="project_description"/>
              <TextInput id="project_description" type="file" name="image" className="mt-1 block w-full" />
              <InputError message="Invalid image" className="mt-2" />
            </div>

          </form>


          </div>
        </div>
      </div>

    </AuthenticatedLayout>
  )
}
