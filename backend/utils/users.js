import bycrpt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bycrpt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'john doe',
    email: 'john@example.com',
    password: bycrpt.hashSync('12345', 10),
  },
  {
    name: 'jane doe',
    email: 'jane@example.com',
    password: bycrpt.hashSync('12345', 10),
  },
];

export default users;
