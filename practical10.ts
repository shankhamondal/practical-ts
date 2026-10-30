let User = {
  Name: "Babu",
  Role: "Admin",
};

if (User.Role === "Admin" || User.Role === "Editor" || User.Role === "User") {
  if (User.Role === "Admin") {
    console.log(
      `Hello ${User.Name} ! You have full access of the application.`,
    );
  }
  if (User.Role === "Editor") {
    console.log(
      `Hello ${User.Name} ! You have edit & view only access of the application.`,
    );
  }
  if (User.Role === "User") {
    console.log(
      `Hello ${User.Name} ! You have edit & view access of the application.`,
    );
  }
} else {
  console.log(
    `Hello ${User.Name} ! You don't have any access to the application`,
  );
}
