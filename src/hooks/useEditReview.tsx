import { useRecoilValue } from 'recoil';
import { updateReview } from '@/common/api/reviewApi';
import { getUserDB, updateUserDB } from '@/common/api/userApi';
import { DetailList } from '@/recoil/atom/Detail';
import { EachReview } from '@/types/DetailType';
import { reviewForm } from '@/common/utils/forms';

const useEditReview = (
  reviewId: string,
  rating: number,
  content: string,
  image: string[],
  reset: () => void,
  closeModal: () => void,
) => {
  const list = useRecoilValue(DetailList);
  const reviews = list.review;
  const review = !!reviews
    ? reviews.filter((review) => review.id === reviewId)[0]
    : reviewForm;

  const editReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = await getUserDB(review.uid);
    const myReviews = user?.MyReview;

    const ratingCount = list.ratingCount;
    const totalRating = list.totalRating - review.rating + rating;
    const newReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, rating, content, image };
      } else {
        return review;
      }
    });
    const newList = {
      ratingCount,
      review: newReviews,
      totalRating,
    };
    const newMyReviews = myReviews.map((review: EachReview) => {
      if (review.id === reviewId) {
        return { ...review, rating, content, image };
      } else {
        return review;
      }
    });

    closeModal();
    await updateReview(review.contentId, newList);
    await updateUserDB(review.uid, { ...user, MyReview: newMyReviews });
    reset();
  };

  return editReview;
};

export default useEditReview;