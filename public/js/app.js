async function removeUser(id) {
  try {
    const result = await fetch(`api/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await result.json();
    if (data.success) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
