import { ServerProps } from "../types";

export const verifyArraySelectedServers = (
  selectedServer: ServerProps[],
  array: ServerProps
) => {
  const copySelectedServer = [...selectedServer];
  const position = copySelectedServer.findIndex(
    (data) => data.hostname === array.hostname
  );

  if (position >= 0) {
    copySelectedServer.splice(position, 1);
    return copySelectedServer;
  }
  const teste = [...copySelectedServer, array];
  return teste;
};
