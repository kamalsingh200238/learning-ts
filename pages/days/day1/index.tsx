import Head from "next/head";

export default function Day1() {

  class Human {
    talk() {
      return "Human talking\n"
    }
  }

  class SuperHuman extends Human {
    fly() {
      return "Flying....\n"
    }
  }

  const firstPerson = new Human();
  const secondPerson = new SuperHuman();

  console.log({firstPerson, secondPerson})

  console.log(
    "First Person Talk", firstPerson.talk(),
    "Second Person Talk", secondPerson.talk(),
    "Second Person Fly", secondPerson.fly(),    
  )

  // check if the protoype on class is equal to variable.__propto__ (spolier: it is true)
  console.log(firstPerson.__proto__ === Human.prototype)

  // add a function to class
  Human.prototype.walk = function () {
    return "walking.."
  }

  // try that function
  console.log(firstPerson.walk())

  return (
    <>
      <Head>
        <title>Classes and Inheritence</title>
      </Head>
      <div>Day1</div>
    </>
  );
}
