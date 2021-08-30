const user = {
  johnDoe: {
    age: 34,
    email: "pratyakshsaini@gmail.com",
  },
};

const {
  johnDoe: { age, email },
} = user;

console.log(age + email);
