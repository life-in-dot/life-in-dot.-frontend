import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import styled from "styled-components";
import { TbUserCircle } from "react-icons/tb";

import loginState, { isLoggedInState } from "../../lib/recoil/auth";
import sidebarState from "../../lib/recoil/sidebar";

import useModal from "../../lib/hooks/useModal";

function AppHeader() {
  const { showModal } = useModal();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const loginData = useRecoilValue(loginState);
  const isSidebarOpen = useRecoilValue(sidebarState);

  const handleProfileClick = () => {
    showModal({
      modalType: "ProfileModal",
    });
  };

  const handleLoginClick = () => {
    showModal({
      modalType: "LoginModal",
    });
  };

  return (
    <Header sidebar={isSidebarOpen}>
      <InnerHeader sidebar={isSidebarOpen}>
        <Link to={"/"}>
          <Brand>
            <BrandImage src="/assets/life-in-dot.png" />
            <BrandTitle>life in dot.</BrandTitle>
          </Brand>
        </Link>
        <ImageBlock>
          {isLoggedIn ? (
            <UserProfilePic
              src={loginData.data.picture}
              onClick={handleProfileClick}
            />
          ) : (
            <UserImage onClick={handleLoginClick} />
          )}
        </ImageBlock>
      </InnerHeader>
    </Header>
  );
}

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  height: 70px;
  width: 100%;

  a {
    text-decoration: none;
    color: #2c3f3b;
  }
`;

const InnerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: ${props => (props.sidebar ? "0 1 56%" : "0 100%")};
  margin-left: 3%;
  margin-right: 3%;
  @media (max-width: 1024px) {
    flex: ${props => (props.sidebar ? "0 1 50%" : "0 100%")};
    margin-left: 10%;
    margin-right: 10%;
  }
  transition: all 200ms ease-in 0s;
  height: 100%;
  width: 100%;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BrandImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 15px;
  border-radius: 30px;
  box-shadow: 0 2px 10px 5px rgba(105, 201, 188, 0.4);
  border-radius: 100px;
`;

const BrandTitle = styled.div`
  font-size: 1.2em;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ImageBlock = styled.div`
  display: block;
  margin-right: 15px;
  border-radius: 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 35px;
`;

const UserProfilePic = styled.img`
  border-radius: 20px;
  height: 35px;
  width: 35px;
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.4);
  opacity: 0.8;
  cursor: pointer;
`;

const UserImage = styled(TbUserCircle)`
  height: 30px;
  width: 30px;
  opacity: 0.8;
  cursor: pointer;
`;

export default AppHeader;
