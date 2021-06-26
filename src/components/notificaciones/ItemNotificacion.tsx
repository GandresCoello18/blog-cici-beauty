import React from 'react';

import { CubeIcon } from '@heroicons/react/outline';

interface Props {
  item: number;
}

export const ItemNotificacion = ({ item }: Props) => (
  <div
    className={`cursor-pointer hover:bg-pink-100 block px-4 py-2 text-sm text-gray-700 ${
      item % 2 ? 'bg-gray-200' : 'bg-white'
    }`}
  >
    <div className="flex">
      <CubeIcon className="block h-4 w-4" aria-hidden="true" />
      <span className="font-semibold ml-2">Tu productos ya esta en camino</span>
    </div>
    <p className="text-gray-700">Acabamos de enviar tu paquete a la direccion especificada.</p>
  </div>
);
