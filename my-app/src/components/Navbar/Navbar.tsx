import styled from "styled-components";
import { ShoppingCartImage } from "./index";

export type NavbarProps = {
  linkNames: { linkName: string; linkPath: string }[];
  searchable: boolean;
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

const StyledSearchButton = styled.button`
  border-radius: 10px;
  font-size: 13px;
`;

const StyledSearchInput = styled.input`
  border-radius: 10px;
  font-size: 13px;
`;

const Navbar: React.FC<NavbarProps> = ({
  linkNames,
  searchable,
  itemCount,
}) => {
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
              <ItemCount>{itemCount}</ItemCount>
            </ShoppingCartSection>
            <StyledSearchInput type="text" placeholder="Search..." />
            <StyledSearchButton>Search</StyledSearchButton>
          </RightContainer>
        )}
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
