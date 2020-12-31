// we can use interfaces to define objects
// not a huge difference to using `type House = ...`, although we cannot extend `type` like we can with `interface`
// generally better to use interface for objects
interface House {
  address: string;
  // name is an optional property, using the `?`
  name?: string;
  type: string;
  windows: number;
  chimney: boolean;
}

interface Garage extends House {
  size: "single" | "double";
  standalone: boolean;
}

// fn takes arg details with House type, as defined in above interface
const printHouse = (details: House): void => {
  console.log(details);
};

// fn takes arg details with Garage type, as defined in above interface
const printGarage = (details: Garage): void => {
  console.log(details);
};

// ts throws error if myGarage does not contain all the properties in Garage and House
const myGarage: Garage = {
  address: "123 Main St",
  type: "Maisonette",
  windows: 3,
  chimney: true,
  size: "double",
  standalone: true,
};

// ts throws error if myHouse does not contain all the properties in House
const myHouse: House = {
  address: "123 Main St",
  type: "Maisonette",
  windows: 3,
  chimney: true,
};

// ts throws error if we try to pass in anything other than an object as defined in interface
printHouse(myHouse);

// ts throws error if we try to pass in anything other than an object as defined in interface
printGarage(myGarage);
