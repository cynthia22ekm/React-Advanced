import styled from "styled-components";

export type NavbarProps = {
  linkNames: { linkName: string; linkPath: string }[];
  searchable: boolean;
};

const StyledNavbar = styled.div`
  background: grey;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-size: border-box;
`;

const StyledLink = styled.a`
  color: white;
  padding: 5px;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
  padding: 5px;
`;

const Navbar: React.FC<NavbarProps> = ({ linkNames, searchable }) => {
  return (
    <div>
      <StyledNavbar>
        <LeftContainer>
          {linkNames.map((link, key) => (
            <StyledLink href={link.linkPath}>{link.linkName}</StyledLink>
          ))}
        </LeftContainer>
        {searchable && (
          <RightContainer>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </RightContainer>
        )}
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
