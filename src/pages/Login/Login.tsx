import LoginTab from '@/components/Login/LoginTab';
import RegisterTab from '@/components/Register/RegisterTab';
import { LoginState } from '@/recoil/atom/Login';
import { useRecoilState } from 'recoil';
import * as S from './style/LoginStyled';

const Login = () => {
  const [checkLogin, setCheck] = useRecoilState(LoginState);

  const toggleCheck = () => {
    setCheck(!checkLogin);
  };

  return (
    <>
      <S.LoginContainer>
        <S.LoginBox>
          <S.LoginHeader>
            <S.LoginHeaderBtn
              style={
                checkLogin
                  ? {
                      color: 'black',
                      borderBottom: '3px solid black',
                    }
                  : { cursor: 'pointer' }
              }
              onClick={() => toggleCheck()}
              disabled={checkLogin ? true : false}
            >
              Log in
            </S.LoginHeaderBtn>
            <S.LoginHeaderBtn
              style={
                !checkLogin
                  ? {
                      color: 'black',
                      borderBottom: '3px solid black',
                    }
                  : { cursor: 'pointer' }
              }
              onClick={() => toggleCheck()}
              disabled={checkLogin ? false : true}
            >
              Register
            </S.LoginHeaderBtn>
          </S.LoginHeader>
          {checkLogin ? <LoginTab /> : <RegisterTab />}
        </S.LoginBox>
      </S.LoginContainer>
    </>
  );
};

export default Login;
