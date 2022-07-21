interface HashOutput {
  path: string;
  params: URLSearchParams;
}
export default function parseRoute(hashRoute: string): HashOutput {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }
  const [path, queryString] = hashRoute.split('?');
  const params = new URLSearchParams(queryString);
  return { path, params };
}
