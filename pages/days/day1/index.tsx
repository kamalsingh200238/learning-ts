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
    firstPerson.talk(),
    secondPerson.talk(),
    secondPerson.fly(),
  )
  return (
    <>
      <Head>
        <title>Classes and Inheritence</title>
      </Head>
      <div>Day1</div>
    </>
  );
}
