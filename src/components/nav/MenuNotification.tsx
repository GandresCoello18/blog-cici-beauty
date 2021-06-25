import React, { Fragment } from 'react';

import { BellIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';

export const MenuNotification = () => {

  return (
    <Menu as="div" className="ml-3 relative z-10">
      {({ open }: any) => (
        <>
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="p-2 border-b-2">
                <span style={{ fontSize: 15 }}>Tus Notificaciones</span>
              </div>

              {[0, 1, 2, 3, 4].map(item => (
                <Menu.Item key={item}>
                  <a href='sdd' target="_blank">
                    <div className={`cursor-pointer hover:bg-pink-100 block px-4 py-2 text-sm text-gray-700 ${item % 2 ? 'bg-gray-200' : 'bg-white'}`}>
                      <span className="font-semibold">Tu productos ya esta en camino</span>
                      <p className="text-gray-700">Acabamos de enviar tu paquete a la direccion especificada.</p>
                    </div>
                  </a>
                </Menu.Item>
              ))}

              <div className="p-2 border-t-2 flex justify-between">
                <span style={{ fontSize: 13 }} className="text-pink-400 cursor-pointer">Marcar todo como leido</span>
                <span style={{ fontSize: 13 }} className="cursor-pointer">Ver todos</span>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}