export default async function deleteAccount(accountNumber) {
  try {
    const res = await fetch(`/accounts/deleteByNumber`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountNumber,
      }),
    });
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
