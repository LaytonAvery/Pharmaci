import { Disclosure } from "@headlessui/react";

function MyDisclosure() {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
        Click here!
        <Disclosure.Panel className="text-white-500">
          <b>Is medication education available?</b>
          <br></br>
          Yes! You can purchase a session with your pharmaciist for $1,000 USD.
          <br></br>
          <b>Can I use my insurance?</b>
          <br></br>
          No! This pharmaci is ca$h only. Unless you have dogecoin.
          <br></br>
          <b>What are the side effects of fictional medications?</b>
          <br></br>
          Like actual medications, fictional medications have various side
          effects. These include hallucinations, upset stomach, and cardiac
          arrest.
        </Disclosure.Panel>
      </Disclosure.Button>
    </Disclosure>
  );
}
export default MyDisclosure;
