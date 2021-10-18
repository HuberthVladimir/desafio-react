import { verifyArraySelectedServers } from "../../functions/serverTable";

describe("server Table function", () => {
  it("Should verify if value exist in server", () => {
    const dados = {
      hostname: "Pc",
      configuracao: {
        cpuProvisioned: 2,
        memoryProvisioned: 2,
        totalDiskGB: 15,
      },
      ip: "10.0.0.0",
    };

    const array = verifyArraySelectedServers([dados], dados);
    expect(array).toEqual([]);
  });
});
