export async function createWallet(_name) {
  const response = await fetch("https://api.utiliti.ai/wallets", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      "X-API-key": "ffeaef31-7460-48b4-8712-31576d0e3733",
    },
    body: JSON.stringify({
      name: _name,
      network_id: 1, // Mumbai
    }),
  });

  return response;
}
