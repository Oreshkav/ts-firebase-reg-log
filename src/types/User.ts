// interface Name {
//   firstname: string,
//   lastname: string
// }

// interface User {
//   id: number,
//   emasil: string,
//   username: string,
//   password: string,
//   name: {firstname: string, lastname: string }
// }

// export default User;

interface User {
  id: number,
  email: string,
  username: string,
  password: string,
  phone: string,
  name: { firstname: string, lastname: string },
}

export default User;
