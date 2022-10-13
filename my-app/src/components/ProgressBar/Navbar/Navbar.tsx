import styled from "styled-components";

export type NavbarProps = {
  linkNames: { linkName: string; linkPath: string }[];
  buttonsAvailable: boolean;
};

const StyledNavbar = styled.div`
  background: grey;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  color: white;
  padding: 5px;
`;

const Navbar: React.FC<NavbarProps> = ({ linkNames, buttonsAvailable }) => {
  return (
    <div>
      <StyledNavbar>
        {linkNames.map((link, key) => (
          <StyledLink href={link.linkPath}>{link.linkName}</StyledLink>
        ))}
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
