import { useEffect, useState, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { getDate } from '@/common/utils/getDate';
import { postReview, updateReview } from '@/common/api/reviewApi';
import { getUserDB, updateUserDB } from '@/common/api/userApi';
import { uuidv4 } from '@firebase/util';
import { DetailList } from '@/recoil/atom/Detail';
import { getCities, updateCities } from '@/common/api/cityApi';

const useAddReview = (
  areacode: string,
  sigungucode: string,
  content: string,
  rating: number,
  image: string[],
  contentId: string,
  tag: string[],
  tags: string[],
  reset: () => void,
  closeModal: () => void,
) => {
  const list = useRecoilValue(DetailList);
  // 로그인 여부 확인
  const sessionKey = `firebase:authUser:${process.env.FIREBASE_API_KEY}:[DEFAULT]`;
  const userItem = sessionStorage.getItem(sessionKey);
  const uid = !!userItem ? JSON.parse(userItem).uid : '';

  // 시간
  const [date, time] = getDate();

  // 태그 카운팅
  const [newTags, setNewTags] = useState(list.tagCount);
  const [existingTags, setExistingTags] = useState(tag);

  useEffect(() => {
    if (!list.tagCount) {
      const newTag = [];
      for (let i = 0; i < tags.length; i++) {
        const tag = { name: tags[i], count: 0 };
        newTag.push(tag);
      }
      setNewTags(newTag);
    }
  }, [list]);

  const tagAdd = useCallback(() => {
    for (let i = 0; i < tag.length; i++) {
      const tags = newTags.map((x) => {
        if (x.name === tag[i]) {
          return { ...x, count: x.count + 1 };
        } else {
          return x;
        }
      });
      setNewTags(tags);
      setExistingTags(tag);
    }
  }, [tag]);

  const tagMinus = useCallback(() => {
    const removeTag = existingTags.filter((x) => !tag.includes(x));
    for (let i = 0; i < removeTag.length; i++) {
      const tags = newTags.map((x) => {
        if (x.name === removeTag[i]) {
          return { ...x, count: x.count - 1 };
        } else {
          return x;
        }
      });
      setNewTags(tags);
      setExistingTags(tag);
    }
  }, [tag]);

  useEffect(() => {
    if (existingTags.length < tag.length) {
      tagAdd();
    } else if (existingTags.length > tag.length) {
      tagMinus();
    }
  }, [tag]);

  // 리뷰 등록
  const addReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content) return alert('리뷰 내용을 입력해주세요.');
    if (!rating) return alert('별점을 등록해 주세요.');
    if (content.length > 500) return;

    const newReview = {
      rating,
      content,
      createdAt: `${date} ${time}`,
      id: uuidv4(),
      image,
      contentId,
      tag,
      uid,
      isDelete: 'N',
    };
    const newReviewData = {
      areacode,
      sigungucode,
      ratingCount: !!list.ratingCount ? list.ratingCount + 1 : 1,
      review: !!list.review ? [...list?.review, newReview] : [newReview],
      totalRating: !!list.totalRating ? list.totalRating + rating : rating,
      tagCount: newTags,
    };
    closeModal();
    // 첫 리뷰 일때 setDoc 두번째 리뷰부터 업데이트
    if (!list.review) await postReview(contentId, newReviewData);
    else await updateReview(contentId, newReviewData);

    // UserDB update
    const user = await getUserDB(uid);
    await updateUserDB(uid, {
      MyReview: !!user?.MyReview ? [...user?.MyReview, newReview] : [newReview],
    });

    const city = await getCities(areacode, sigungucode);
    if (!!city)
      await updateCities(city.engarea, {
        reviewCount: `${Number(city.reviewCount) + 1}`,
      });
    reset();
  };

  return addReview;
};

export default useAddReview;
