import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const time = new Date(Date.now()).toLocaleDateString();

  const logs = {
    time,
    url: request.url,
  };

  // eslint-disable-next-line no-console
  console.log(logs);
}
