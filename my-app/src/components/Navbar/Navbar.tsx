import { PropsWithChildren } from "react";
import styled from "styled-components";

export type NavbarProps = {
  linkNames: { linkName: string; linkPath: string }[];
  itemCount: number;
};

const StyledNavbar = styled.div`
  background: lightgrey;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`;

const StyledLink = styled.a`
  color: grey;
  padding: 5px;
  background: white;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  border-radius: 5px;
  text-decoration: none;
  fonr-size: 13px;
`;

const Navbar: React.FC<PropsWithChildren<NavbarProps>> = ({
  linkNames,
  children,
}) => {
  return (
    <div>
      <StyledNavbar>
        <div>
          {linkNames.map((link, key) => (
            <StyledLink href={link.linkPath}>{link.linkName}</StyledLink>
          ))}
        </div>
        {children}
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
