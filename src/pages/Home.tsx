import { HeaderTabs } from "../components/HeaderTabs/HeaderTabs";
import { User } from "firebase/auth";


// Define props for the Home component
export default function Home({ user }: { user: User }) {
  return (
    <div>
      <HeaderTabs user={user} />
    </div>
  );
}


