import type { NextPage } from "next";
import Frame from "react-frame-component";

const Home: NextPage = () => {
  return (
    <Frame>
      <div>This div should be appended to the iframe document</div>
    </Frame>
  );
};

export default Home;
