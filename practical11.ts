let User = {
  Name: "Babu",
  Role: "User",
};

switch (User.Role) {
  case "Admin":
    console.log(
      `Hello ${User.Name} ! You have full access of the application.`,
    );
    break;
  case "Editor":
    console.log(
      `Hello ${User.Name} ! You have edit & view only access of the application.`,
    );
    break;
  case "User":
    console.log(
      `Hello ${User.Name} ! You have edit & view only access of the application.`,
    );
    break;

  default:
    console.log(
      `Hello ${User.Name} ! You don't have any access to the application.`,
    );
    break;
}
