export async function createWallet(_name) {
  try {
    const response = await fetch("https://api.utiliti.ai/wallets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-key": "6755c237-e0d1-4eeb-be5d-acccf2f2e3ce",
      },

      body: JSON.stringify({
        name: "testingpickles",
        network_id: "80001", //ethereum
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTokensForWallet(_address) {}
