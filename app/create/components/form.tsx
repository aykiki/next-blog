'use client';

import { useRef } from 'react';
import { createFormPost } from '@/app/_actions/createBlogPost';

const Form = () => {
  const ref = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (formData: FormData) => {
    const title = (formData.get('title') ?? '') as string;
    const body = (formData.get('body') ?? '') as string;

    await createFormPost({
      title,
      body,
    });

    ref.current?.reset();
  };

  return (
    <form ref={ref} action={onSubmit} className="flex flex-col gap-6 w-[600px]">
      <label className="flex flex-col">
        <span className="text-gray-600">Title</span>
        <input type="text" className="h-10 outline-none rounded-xl px-2" />
      </label>
      <label className="flex flex-col">
        <span className="text-gray-600">Text</span>
        <input type="text" className="h-10 outline-none rounded-xl px-2" />
      </label>
      <button
        type="submit"
        className="w-40 bg-rose-600 text-white rounded-2xl h-10 hover:bg-rose-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
