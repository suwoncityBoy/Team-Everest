import { ModalProps } from '@/types/StyledType';
import styled from 'styled-components';

export const ReviewSection = styled.section`
  width: 100%;
`;

export const ReviewContainer = styled.div`
  width: 100%;
`;

export const LoadMoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LoadMore = styled.button`
  width: 10rem;
  height: 5rem;
  margin: auto;
`;

export const Review = styled.div`
  display: flex;
  width: 80%;
  min-height: 275px;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid #a1c2f3;
  border-radius: 30px;
  gap: 1rem;
`;

export const Profile = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const ReviewContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const ReviewImage = styled.img`
  width: 10rem;
  height: 6rem;
`;

export const ReviewSpace = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
`;

export const ReviewContent = styled.div`
  min-height: 70px;
  font-size: 22px;
`;

export const ReviewImageBox = styled.div`
  display: flex;
  margin: auto 0;
  gap: 1rem;
`;

export const ReviewCreatedAt = styled.span`
  color: gray;
  font-size: 14px;
`;

export const ReviewNickname = styled.span`
  cursor: pointer;
  font-size: 28px;
  color: #535353;
  &:hover {
    color: lightgray;
  }
`;

export const ReviewBtnBox = styled.div`
  gap: 1rem;
  & svg {
    cursor: pointer;
  }
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: rgba(0 0 0/60%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalBox = styled.form<ModalProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: black;
  background-color: white;
  border-radius: 1rem;
  gap: ${(props) => (!!props.gap ? props.gap : '1rem')};
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding: 1rem 0 0.5rem;
  border-bottom: 1px solid lightgray;
`;

export const StarBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  & svg {
    color: #666666;
    cursor: pointer;
  }
  & svg:hover {
    color: #0034b9;
  }
  .blueStar {
    color: #0034b9;
  }
`;

export const ReviewForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 1rem auto 0;
  & svg {
    cursor: pointer;
    left: 0;
    bottom: 0;
  }
`;

export const ImageInput = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 0 1rem;
  padding: 0.5rem;
  gap: 1rem;
`;

export const InputArea = styled.textarea`
  width: 90%;
  height: 180px;
  background-color: lightgray;
  padding: 1rem;
  border: none;
  border-radius: 20px;
  resize: none;
`;

export const InputFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 94.5%;
  padding: 0.5rem 0;
  background-color: white;
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 6rem;
  background-color: white;
  margin: 0 auto;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalImage = styled.img`
  width: 10rem;
  height: 6rem;
  margin: 0 1rem 0 0;
`;

export const DeleteTitle = styled.h2`
  font-size: 1.5rem;
`;

export const DeleteBtnBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const DeleteBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 3rem;
  border-radius: 30px;
  background-color: ${(props) => props.color};
`;

export const ReviewName = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
`;

export const ReviewLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 285px;
  height: 100%;
  gap: 1rem;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 1.5rem 0;
`;

export const ReviewModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 27px;
  margin: 1rem 0 0;
`;

export const ReviewModalBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  margin: 1rem 0;
`;

export const ReviewBtn = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 30px;
  color: white;
  background-color: #3f46ff;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ReviewAddr = styled.span`
  color: lightgray;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
`;

export const StarTitle = styled.span`
  font-size: 20px;
`;
export const StarInfo = styled.span`
  font-size: 20px;
  color: #202020;
`;
export const StarRating = styled.span`
  font-size: 3rem;
`;
export const ReviewTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  background-color: #0034b9;
  border-radius: 30px;
`;
export const ReviewTagsBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
