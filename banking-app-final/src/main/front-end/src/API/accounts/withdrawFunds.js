export default async function withdrawFunds(number, funds) {
  try {
    const res = await fetch(`/accounts/withdrawFunds`, {
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
