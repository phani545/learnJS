function User(p) {
  console.log(p);
  return (
    <div style={{ border: "2px solid gray", width: 300, margin: 20 }}>
      <h6>User ID:- {p.id}</h6>
      <h5>User Name:- {p.name}</h5>
      <p>Age:- {p.age}</p>
      <p>place:- {p.place}</p>
    </div>
  );
}
export default User;
