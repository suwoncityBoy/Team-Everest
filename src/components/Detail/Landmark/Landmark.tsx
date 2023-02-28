import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import useDefault from '@/hooks/useDefault';
import { Item } from '@/types/DetailType';
import * as S from './style/LandmarkStyled';
import { addWishList, popWishList } from '@/components/MyPlan/MyPlannerHandler';

interface Props {
  landmark: Item;
  wishList: Item[];
}

const Landmark = ({ landmark, wishList }: Props) => {
  const navigate = useNavigate();

  // 로그인 여부 확인
  const sessionKey = `firebase:authUser:${process.env.FIREBASE_API_KEY}:[DEFAULT]`;
  const userItem = sessionStorage.getItem(sessionKey);
  const uid = !!userItem ? JSON.parse(userItem).uid : '';

  // 이미지
  const defaults = useDefault();
  const { defaultImage } = defaults();
  const img = !!landmark.firstimage ? landmark.firstimage : defaultImage;

  // 북마크 여부만 확인
  const [bookMark, setBookMark] = useState(false);

  const handlerWishList = () => {
    if (
      window.confirm(`북마크에 ${!bookMark ? '추가' : '취소'} 하시겠습니까?`)
    ) {
      if (!bookMark) {
        // 추가()
        addWishList(wishList, landmark, uid);
      } else {
        //삭제
        popWishList(wishList, landmark, uid);
      }
      setBookMark(!bookMark);
    } else {
      alert('취소하셨습니다');
    }
  };

  useEffect(() => {
    const isGet = wishList?.filter(
      (wishItem: any) => wishItem.contentid === landmark?.contentid,
    ).length;

    !!isGet ? setBookMark(true) : setBookMark(false);
  }, [wishList]);

  return (
    <S.LandmarkBox>
      <S.LandmarkImg
        src={img}
        onClick={() => {
          navigate(`/detail/${landmark.contentid}`);
        }}
      />
      <S.LandmarkInfo>
        <S.LandmarkBookmarkBox
          style={{ visibility: !!uid ? 'visible' : 'hidden' }}
        >
          <S.LandmarkBookmarkBack>
            <FaRegBookmark
              onClick={() => handlerWishList()}
              style={{
                display: bookMark ? 'none' : 'flex',
              }}
            />
            <FaBookmark
              onClick={() => handlerWishList()}
              style={{
                display: bookMark ? 'flex' : 'none',
              }}
              color="red"
            />
          </S.LandmarkBookmarkBack>
        </S.LandmarkBookmarkBox>
        <S.LandmarkTitle
          onClick={() => {
            navigate(`/detail/${landmark.contentid}`);
          }}
        >
          {landmark.title}
        </S.LandmarkTitle>
      </S.LandmarkInfo>
    </S.LandmarkBox>
  );
};

export default Landmark;
