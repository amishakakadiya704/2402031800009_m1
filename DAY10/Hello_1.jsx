function Hello_1() {

  const isLoggedIn = true;

  let message;

  if (isLoggedIn) {
    message = <h1>Welcome User!</h1>;
  } else {
    message = <h2>Please login</h2>;
  }

  return <div>{message}</div>;
}

export default Hello_1;
