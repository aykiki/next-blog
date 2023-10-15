'use client';

import Lottie from 'lottie-react';
import errorLottie from '@/public/errorLottie.json';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => (
  <div className="flex flex-col w-[600px] items-center justify-center">
    <Lottie animationData={errorLottie} width={400} height={400} />
    <p className="text-rose-500 text-xl">Something went wrong...</p>
    <span onClick={() => reset()} className="text-gray-700 text-xl cursor-pointer underline">
      Try again
    </span>
  </div>
);

export default Error;
