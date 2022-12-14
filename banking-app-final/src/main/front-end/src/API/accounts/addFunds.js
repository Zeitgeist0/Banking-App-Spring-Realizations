export default async function addFunds(number, funds) {
  try {
    const res = await fetch(`/accounts/addFunds`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number,
        funds,
      }),
    });
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
