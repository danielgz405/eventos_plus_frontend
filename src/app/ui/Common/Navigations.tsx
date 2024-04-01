import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

type Navigationprops = {
  className?: string;
  pages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export function Navigation({ className, pages, page, setPage }: Navigationprops) {
  const quantityPages = pages === 0 ? 1 : pages;
  const listPages = Array.from({ length: quantityPages }, (_, index) => index + 1);

  const goPrevious = () => {
    page !== 1 && setPage(page - 1);
  };
  const goNext = () => {
    page !== quantityPages && setPage(page + 1);
  };
  const goPage = (number: number) => {
    page !== number && setPage(number);
  };
  return (
    <div className={clsx(className, 'w-full flex justify-between items-center rounded-3xl bg-primary')}>
      <div className="p-1">
        <ArrowLeftCircleIcon className={clsx(page === 1 && '!text-tertiary/90 !cursor-default', 'h-10 w-10 text-tertiary cursor-pointer hover:text-white')} onClick={() => goPrevious()} />
      </div>
      <div className="flex flex-row space-x-1">
        {listPages.map((number) => (
          <div
            key={number}
            role="presentation"
            onClick={() => goPage(number)}
            className={clsx(
              page === number && '!bg-tertiary/90 !cursor-default',
              'hover:bg-white h-7 w-7 bg-tertiary text-sm cursor-pointer rounded-full flex justify-center items-center text-primary'
            )}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="p-1">
        <ArrowRightCircleIcon className={clsx(page === quantityPages && '!text-tertiary/90 !cursor-default', 'h-10 w-10 text-tertiary cursor-pointer hover:text-white')} onClick={() => goNext()} />
      </div>
    </div>
  );
}
