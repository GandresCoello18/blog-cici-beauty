/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { MenuProfile } from './MenuProfile';
import { MenuNotification } from './MenuNotification';

interface Nav {
  name: string;
  href: string;
  current: boolean;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const NavBar = () => {
  const [navigation, setNavigation] = useState<Nav[]>([
    { name: 'Inicio', href: '/', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Talleres', href: '/talleres', current: false },
    { name: 'Cursos', href: '/cursos', current: false },
  ]);

  useEffect(() => {
    const { pathname } = window.location;

    if (pathname === '/') {
      navigation[0].current = true;
      setNavigation(navigation);
    }

    if (pathname.includes('/blog')) {
      navigation[1].current = true;
      setNavigation(navigation);
    }

    if (pathname.includes('/talleres')) {
      navigation[2].current = true;
      setNavigation(navigation);
    }

    if (pathname === '/cursos') {
      navigation[3].current = true;
      setNavigation(navigation);
    }
  }, [navigation]);

  return (
    <Disclosure as="nav" className="bg-cici-100">
      {({ open }: any) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-current hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
                    alt="logo cici"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
                    alt="logo cici"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-current hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium',
                          )}
                          aria-current={item.current ? 'page' : false}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <MenuNotification />

                <MenuProfile />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-current hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : false}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
