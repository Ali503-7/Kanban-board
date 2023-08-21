import React from "react";
import StyledPage from "../StyleComponents/Page";

interface PageProps {
  children: React.ReactNode; // Use React.ReactNode here
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
