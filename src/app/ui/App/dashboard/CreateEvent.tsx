'use client';

import { PhotoIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { StockSchemasDto } from 'api/stock/stockSchemaDto';
import { typeProductSchema } from 'api/typeProduct/typeProductSchemas';
import { GeneralInput, InputList } from 'app/ui/Common/Inputs';
import { ButtonDropdownManual, ComfirmModal, ConfigModal, ItemsDropdownManual } from 'app/ui/Common/Modals';
import { PlaceHolderIcon } from 'app/ui/Common/PlaceHolders';
import { ButtonGreen, ButtonOrange } from 'app/ui/Common/buttons';
import clsx from 'clsx';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { Fileprops } from './StockComponent';
import GaleriesManage from 'app/ui/Common/Galery';
import { formatCurrency, parseCurrency } from 'app/ui/utils/formatterPesso';

type props = {
  data: StockSchemasDto;
  comfirm: boolean;
  configModal: ConfigModal;
  productTypes: typeProductSchema[];
  file: Fileprops;
  // eslint-disable-next-line no-unused-vars
  randomNumber: (max: number, min: number) => string;
  setFile: Dispatch<SetStateAction<Fileprops>>;
  setView: Dispatch<SetStateAction<'primary' | 'options'>>;
  setData: Dispatch<SetStateAction<StockSchemasDto>>;
  setComfirm: Dispatch<SetStateAction<boolean>>;
};

export default function CreateEvent({ data, configModal, comfirm, productTypes, file, randomNumber, setFile, setComfirm, setData, setView }: props) {
  const [openImage, setOpenImage] = useState(false);
  const [meters, setMeters] = useState('');
  const addMeters = (value: string) => {
    parseFloat(value.replace(/m|²/g, '')) && setMeters(value.replace(/[^0-9.]m| |²/g, ''));
    parseFloat(value.replace(/m|²/g, '')) && setData({ ...data, meters: parseFloat(value.replace(/[^0-9]m| |²/g, '')) });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setComfirm(true);
        }}
        className="h-full w-full overflow-hidden flex flex-col"
      >
        <span className="w-full flex-1 overflow-y-auto">
          <div className="grid grid-cols-6 gap-3">

            <GeneralInput
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="!bg-secondary !placeholder-tertiary !text-darker col-span-6"
              id="name"
              name="name"
              placeHolder="Nombre del Evento"
              type="text"
              required
            />
            <GeneralInput
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              className="!bg-secondary !placeholder-tertiary !h-36 !text-darker col-span-6"
              id="description"
              name="description"
              placeHolder="Descripcion Del evento"
              type="textarea"
              required
            />
            <div className="col-span-2 relative h-fit">
              <GeneralInput
                value={data.ref}
                onChange={(e) => setData({ ...data, ref: e.target.value })}
                className="!bg-secondary !placeholder-tertiary !text-darker w-full"
                id="ref"
                name="ref"
                placeHolder="Lugar del evento"
                type="text"
                required
              />
              <div
                role="presentation"
                onClick={() => setData({ ...data, ref: randomNumber(1000000000, 9999999999) })}
                className="absolute cursor-pointer top-1 right-1 h-8 w-8 flex justify-center items-center rounded-full bg-darker hover:bg-tertiary text-secondary"
              >
                <SparklesIcon className="h-5 w-5" />
              </div>
            </div>
            <GeneralInput
              value={data.use}
              onChange={(e) => setData({ ...data, use: e.target.value })}
              className="!bg-secondary !placeholder-tertiary !text-darker col-span-2"
              id="use"
              name="use"
              placeHolder="Uso"
              type="text"
            />
            <GeneralInput
              value={`Cant: ${data.quantity}`}
... (Quedan 109 líneas)