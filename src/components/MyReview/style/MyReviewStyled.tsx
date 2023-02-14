import styled from 'styled-components';

export const MyReviewSection = styled.section`
  max-width: 1344px;
  margin: 3rem auto 0;
  padding: 0 0 1rem;
  border-radius: 20px;
`;
export const MyReviewTitle = styled.header`
  width: 100%;
  padding: 2rem;
  font-size: 2rem;
`;
export const MyReviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(388px, max-content));
  grid-gap: 1rem;
  justify-content: center;
  width: 100%;
`;
export const MyReviewNone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 460px;
`;
export const MyReview = styled.div`
  cursor: pointer;
  width: 388px;
  height: 420px;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
`;
export const MyReviewHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  font-size: 1.5rem;
`;
export const MyReviewProfile = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
export const MyReviewInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  gap: 1.5rem;
  margin-top: 2rem;
`;
export const MyReviewRatingBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
export const MyReviewContentBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 90%;
  height: 2rem;
  font-size: 1rem;
  padding: 1rem;
  word-break: break-all;
`;
export const MyImageBox = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0;
  width: 100%;
  overflow-x: scroll;
`;
