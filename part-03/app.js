// enum is a custom type available in ts but not vanilla js
// enum assigns labels to numbers
// see compiled js to see how it's rebuilt as a an IIFE with Department as an object
// also hover over the enum item to see it's number
// can override number assignment like `INVENTING = 5`, and the following labels will be assigned 6, 7, etc.
// or can override every label with your own numners like `ENGINEERING = 200`
// or override with a string like `SALES = "SALES"`
// create an enum as below, don't need to use caps-only, but is a common convention
var Department;
(function (Department) {
    Department[Department["INVENTING"] = 0] = "INVENTING";
    Department[Department["ENGINEERING"] = 1] = "ENGINEERING";
    Department[Department["SALES"] = 2] = "SALES";
})(Department || (Department = {}));
var Permission;
(function (Permission) {
    Permission[Permission["OWNER"] = 0] = "OWNER";
    Permission[Permission["ADMIN"] = 1] = "ADMIN";
    Permission[Permission["READ_ONLY"] = 2] = "READ_ONLY";
})(Permission || (Permission = {}));
var employee = {
    name: "ACME Corporation",
    department: Department.INVENTING,
    permission: Permission.ADMIN
};
if (employee.department === Department.INVENTING) {
    console.log(employee.department);
}
