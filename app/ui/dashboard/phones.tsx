import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice, Phone } from '@/app/lib/definitions';

export default async function MostExpensivePhones({ phones }: { phones: Phone[] }) {
  return (
    <div className="flex w-full flex-col md:col-span-8">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Most Expensive Phones</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: Uncomment this code in Chapter 7 */}

        <div className="bg-white px-6">
          {phones.map((phones, i) => {
            return (
              <div
                key={phones.id}
                className={clsx('flex flex-row items-center justify-between py-4', {
                  'border-t': i !== 0,
                })}
              >
                <div className="flex items-center" style={{ maxWidth: '70%' }}>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">{phones.name}</p>
                    <p className="hidden text-sm text-gray-500 sm:block">{phones.description}</p>
                  </div>
                </div>
                <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                  {phones.price} руб.
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
