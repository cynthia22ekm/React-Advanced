import styled from "styled-components";
import { ShoppingCartImage } from "./index";

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
`;

const StyledLink = styled.a`
  color: white;
  padding: 5px;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const ShoppingCartSection = styled.div`
  margin-right: 10px;
  display: flex;
`;

const ShoppingCartButton = styled.button`
  border-radius: 50%;
`;

const ItemCount = styled.div`
  border-radius: 50%;
  background: red;
  margin-left: -5px;
  margin-top: 15px;
  height: 20px;
  width: 15px;
  display: flex; 
  align-items: center;
  justify-content: center;
  padding: 10px;
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
            <ShoppingCartSection>
              <ShoppingCartButton>
                <ShoppingCartImage />
              </ShoppingCartButton>
              <ItemCount>3</ItemCount>
            </ShoppingCartSection>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </RightContainer>
        )}
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
