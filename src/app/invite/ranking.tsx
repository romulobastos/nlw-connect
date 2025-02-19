import Image from 'next/image'

import copper from '../../assets/medal-copper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3 justify-center">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | Rômulo B
          </span>
          <span className="font-heading text-2xl font-semibol text-gray-200 leading-none">
            1245
          </span>
          <Image
            src={gold}
            alt="Medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3 justify-center">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Helly R
          </span>
          <span className="font-heading text-2xl font-semibol text-gray-200 leading-none">
            1150
          </span>
          <Image
            src={silver}
            alt="Medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col gap-3 justify-center">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Mark S
          </span>
          <span className="font-heading text-2xl font-semibol text-gray-200 leading-none">
            1060
          </span>
          <Image
            src={copper}
            alt="Medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
