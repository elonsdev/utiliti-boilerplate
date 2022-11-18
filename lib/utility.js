export async function createWallet(_name) {
  try {
    const response = await fetch("https://api.utiliti.ai/wallets", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_UTILITY_API_KEY,
      },
      withCredentials: true,
      credentials: "include",
      body: JSON.stringify({
        name: _name,
        network_id: "80001", //ethereum
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
