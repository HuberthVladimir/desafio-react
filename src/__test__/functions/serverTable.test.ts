import { verifyArraySelectedServers } from "../../functions/serverTable";

describe("server Table function", () => {
  const dados = {
    hostname: "Pc",
    configuracao: {
      cpuProvisioned: 2,
      memoryProvisioned: 2,
      totalDiskGB: 15,
    },
    ip: "10.0.0.0",
  };

  it("Shoud return a empty array", () => {
    const array = verifyArraySelectedServers([dados], dados);
    expect(array).toEqual([]);
  });

  it("Should return one array", () => {
    const array = verifyArraySelectedServers([], dados);
    expect(array).toEqual([dados]);
  });
});
