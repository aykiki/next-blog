'use client';

import { useRef } from 'react';
import { createFormPost } from '@/app/(actions)/createBlogPost';

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
    <form ref={ref} action={onSubmit}>
      <label>
        <span>Title</span>
        <input type="text" />
      </label>
      <label>
        <span>Text</span>
        <input type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
