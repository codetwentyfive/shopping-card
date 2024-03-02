import { useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import SubProfile from "./SubProfile";
import SubProfile2 from "./Subprofile2";

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <h2>The profile visited is here:</h2>
      {name === "subprofile" ? (
        <SubProfile />
      ) : name === "subprofile2" ? (
        <SubProfile2 />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
