import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import SearchModal from './SearchModal';
import { auth } from '../../common/api/firebase';
import { onAuthStateChanged } from '@firebase/auth';
import useModal from '@/hooks/useModal';
import ScrollToTopBtn from '@/components/button/ScrollToTopBtn';
import { VscAccount } from 'react-icons/vsc';

const Header = () => {
  // 검색창 토글
  const [logoutText, setLogoutText] = useState(true);
  const [uid, setUid] = useState('');
  const navigate = useNavigate();

  // 모달 기능
  const [modal, openModal, closeModal, closeModalIfClickOutside] = useModal();

  const modalOpen = () => {
    openModal();
  };

  // 로그인 상태 체크 후 연결 페이지 설정
  const LoginOutHandler = () => {
    if (logoutText === false) {
      if (window.confirm('로그아웃 하시겠습니까?')) {
        auth.signOut();
        alert('로그아웃 되셨습니다.');
        navigate('/');
      }
      return;
    } else {
      navigate('login');
    }
  };

  // 로그인 상태 체크 후 텍스트 state 변경
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogoutText(false);
        setUid(user.uid);
      } else if (!user) {
        setLogoutText(true);
      }
    });
  }, []);

  return (
    <>
      {/* 기본 헤더 메뉴 */}
      <HeaderContainer>
        {modal && (
          <SearchModal
            closeModal={closeModal}
            closeModalIfClickOutside={closeModalIfClickOutside}
          />
        )}
        <Nav>
          <HeaderLogo>
            <img
              src={require('@/assets/Sharpa_block.jpg').default}
              style={{ width: 40, height: 40, marginTop: 20 }}
            />
          </HeaderLogo>
          <MenuSection onClick={() => closeModal()}>
            <NavBarLink to="/main">여행 시작하기</NavBarLink>
            <NavBarLink to="/citymap">지도로 이동하기</NavBarLink>
            <NavBarLink to="/planner/my/write">일정 만들기</NavBarLink>
            <NavBarLink to="my">마이페이지</NavBarLink>
          </MenuSection>
          <SearchIcon onClick={() => modalOpen()} />
          <LogInButton onClick={LoginOutHandler}>
            <div style={{ display: 'flex', alignItems: 'center', width: 95 }}>
              <img
                src={'https://img.icons8.com/windows/64/null/user.png'}
                style={{ width: 30, height: 30 }}
              />
              <LogoutText>{logoutText ? '로그인' : '로그아웃'}</LogoutText>
            </div>
          </LogInButton>

          <ScrollToTopBtn />
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #151515;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: sticky; */ // sticky로 하면 화면에 스크롤 생김
  position: fixed;
  top: 0;
  z-index: 999;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;

const HeaderLogo = styled.div`
  line-height: 50px;
`;

const MenuSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
  padding-right: 80px;
  width: 70%;
`;

const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: #151515;
  font-size: 0.8rem;
`;

// 검색 아이콘 & 로그인

const SearchIcon = styled(FaSearch)``;

// 로그인 버튼

const LogInButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 100px;
  background-color: #d0d0d0;
  color: #313131;
  font-size: 0.8rem;
  cursor: pointer;
`;

const LogoutText = styled.p``;
