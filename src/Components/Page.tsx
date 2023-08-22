import StyledPage from "../StyleComponents/Page";
import { StagesProps } from "../TS Types/Types";

const Page: React.FC<StagesProps> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
