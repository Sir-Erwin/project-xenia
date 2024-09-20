import Image from "next/image";
import NavBar from "./navbar";
import EventMgmtForm from "./event_mgmt_form/event_mgmt_form"

export default function Home() {
  return (
    <div>
      <EventMgmtForm/>
    </div>
  );
}
