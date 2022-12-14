export default async function createNewAccount(currency, balance, customerId) {
  try {
    const res = await fetch(`http://localhost:9000/accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency,
        balance,
        customer: {
          id: customerId,
        },
      }),
    });
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
