import { XCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { Galery } from 'api/sww/sww';
import clsx from 'clsx';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { app } from 'api/firebase/firebaseConfig';
import { Alert } from 'app/ui/utils/toast';
import { ComfirmModal, ConfigModal, ModalImmage } from 'app/ui/Common/Modals';
import { Fileprops } from '../App/Stock/StockComponent';

const storage = getStorage(app);

type props = {
  images: (File | undefined)[];
  dbGalery?: Galery[];
  disabled?: boolean;
  setDbGalery?: Dispatch<SetStateAction<{ [key: string]: any; galery: Galery[] }>>;
  setFile: Dispatch<SetStateAction<Fileprops>>;
};

export default function GaleriesManage({ images, dbGalery, disabled, setDbGalery, setFile }: props) {
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [image, setImage] = useState((dbGalery && dbGalery[0]?.image) || '');
  const [loading, setLoading] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState<{ idx: number; image: Galery } | null>(null);

  const configModal: ConfigModal = {
    title: 'Eliminar imagen',
    description: '¿Seguro quieres eliminar la imagen? Esta acción es permanente.',
    type: 'delete',
    buttonText: 'Eliminar',
    loading: loading,
    onAccepted: () => {
      handleDeleteImage();
    },
  };

  const handleDeleteImage = () => {
    setLoading(true);

    if (deleteInfo) {
      const { idx, image } = deleteInfo;

      const imageRefDelete = image.image_ref;
      const storageRefDelete = ref(storage, imageRefDelete);

      deleteObject(storageRefDelete)
        .then(() => {
          setDbGalery &&
            setDbGalery((prev) => {
              const currData = [...prev.galery];
              currData.splice(idx, 1);
              return {
                ...prev,
                galery: currData,
              };
            });
          Alert('La imagen se ha eliminado con éxito', 'success');
        })
        .catch(() => {
          Alert('Ha ocurrido un error, inténtelo más tarde', 'error');
        })
        .finally(() => {
          setLoading(false);
          setOpen(false);
          setDeleteInfo(null);
        });
    }
  };

  return (
    <>
      <ComfirmModal open={open} setOpen={setOpen} configModal={configModal} />
      <div className="w-full col-span-6 grid grid-cols-3 gap-3">
        {images.map((image, idx) => (
          <div key={image?.name} className={clsx(!disabled && 'group', 'h-44 rounded-3xl overflow-hidden relative')}>
            <div className="h-full w-full z-10 absolute bg-darker/90 group-hover:block hidden" />
            <Image src={`${image ? URL.createObjectURL(image) : ''}`} alt="" fill={true} />
            <XCircleIcon
              onClick={() =>
                setFile((prev) => {
                  const currData = [...prev.galery];
                  currData.splice(idx, 1);
                  return {
                    ...prev,
                    galery: currData,
                  };
                })
              }
              className="h-5 w-5 hidden cursor-pointer absolute top-3 right-3 z-20 text-red-500 group-hover:block"
            />
            <p
              role="presentation"
              onClick={() => {
                setImage(`${image ? URL.createObjectURL(image) : ''}`);
                setOpenImage(true);
              }}
              className="h-5 w-5 hidden cursor-pointer  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 text-gray-300 group-hover:block"
            >
              Ver
            </p>
          </div>
        ))}
        {dbGalery &&
          dbGalery.map((image, idx) => (
            <div key={image.image} className={clsx(!disabled && 'group', 'h-44 overflow-hidden relative')}>
              <div className="h-full w-full z-10 absolute bg-darker/90 group-hover:block hidden rounded-2xl" />
              <Image src={`${image.image}`} alt="" fill={true} className="rounded-3xl" />
              <XCircleIcon
                onClick={() => {
                  setDeleteInfo({ idx, image });
                  setOpen(true);
                }}
                className="h-5 w-5 hidden cursor-pointer absolute top-3 right-3 z-20 text-red-500 group-hover:block"
              />
              <p
                role="presentation"
                onClick={() => {
                  setImage(image.image);
                  setOpenImage(true);
                }}
                className="h-5 w-5 hidden cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 text-gray-300 group-hover:block"
              >
                Ver
              </p>
            </div>
          ))}
      </div>
      <ModalImmage open={openImage} setOpen={setOpenImage} url={image} />
    </>
  );
}
