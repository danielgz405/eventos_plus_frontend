import { Menu } from '@headlessui/react';
import { AuthSchema } from 'api/auth/auth';
import { AnyDropdown } from 'app/ui/Common/Modals';
import Image from 'next/image';
import Link from 'next/link';

type props = {
  auth: AuthSchema;
};

export default function UserBar({ auth }: props) {
  return (
    <div className="bg-secondary px-2 py-1 rounded-3xl flex flex-row items-center justify-between">
      <Link href={'/sww/user'} className="text-lg px-5 font-semibold leading-6 text-tertiary hover:text-white">
        {auth.user?.name}
      </Link>
      <AnyDropdown Element={() => UserImage({ auth })}>
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} w-32 group flex  items-center rounded-md px-2 py-2 text-sm`}>Edit</button>}
          </Menu.Item>
        </div>
      </AnyDropdown>
    </div>
  );
}

function UserImage({ auth }: props) {
  return (
    <Image
      src={auth.user?.image ? auth.user.image : `https://ui-avatars.com/api/?name=${auth?.user?.name}&size=214&rounded=true&background=1A1C28&color=8AADA3&bold=true`}
      width={39}
      height={39}
      alt=""
      className="m-1"
    />
  );
}
