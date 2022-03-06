import { Request } from 'express';

export const getHost = (req: Request) => {
  const proxyHost = req.headers['x-forwarded-host'];
  return proxyHost ? proxyHost : req.headers.host;
};
