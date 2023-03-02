import * as tag from './tags';

// 모달창 선택자
export const modalSelector = (
  type: string,
  reviewContent: string,
  reviewImg: string[],
  reviewRating: number,
  reviewTag: string[],
) => {
  switch (true) {
    case type === 'post':
      return {
        content: '',
        image: [],
        rating: 0,
        clicked: [false, false, false, false, false],
        tags: [],
      };
    case type === 'edit':
      return {
        content: reviewContent,
        image: reviewImg,
        rating: reviewRating,
        clicked: [false, false, false, false, false].map((_, i) =>
          i < reviewRating ? true : false,
        ),
        tags: reviewTag,
      };
    default:
      return {
        content: '',
        image: [],
        rating: 0,
        clicked: [false, false, false, false, false],
        tags: [],
      };
  }
};

export const registerSelector = (name: string, dupCheck: boolean) => {
  switch (true) {
    case name === 'email':
      return {
        title: 'E-Mail',
        info: '영문, 숫자로 이루어진 이메일을 입력해주세요.',
        warning: '※ 이메일 형식에 맞게 입력해주세요.',
        checkUse: dupCheck
          ? '사용가능한 이메일입니다.'
          : '중복된 이메일입니다.',
        tabIndex: 1,
      };
    case name === 'nickname':
      return {
        title: 'Nickname',
        info: '특수문자를 제외한 9글자 미만의 닉네임을 설정해 주세요.',
        warning: '※ 닉네임이 너무 길어요.',
        checkUse: dupCheck
          ? '사용가능한 닉네임입니다.'
          : '중복된 닉네임입니다.',
        tabIndex: 4,
      };
    default:
      return {
        title: '',
        info: '',
        warning: '',
        checkUse: '',
      };
  }
};

export const areaSelector = (areacode: string, sigungucode: string) => {
  const oneCity = ['1', '2', '3', '4', '5', '6', '7', '8', '39'];
  const Do = ['31', '32', '33', '34', '35', '36', '37', '38'];
  switch (true) {
    case oneCity.includes(areacode):
      return [areacode, ''];
    case Do.includes(areacode):
      return [areacode, sigungucode];
    default:
      return ['', ''];
  }
};

export const tagSelector = (categoryCode: string) => {
  const bigCategory = categoryCode.slice(0, 3);
  switch (true) {
    case bigCategory === 'A01' || categoryCode === 'A0202':
      return tag.nature;
    case categoryCode === 'A0201':
      return tag.history;
    case categoryCode === 'A0203':
      return tag.experience;
    case categoryCode === 'A0204':
      return tag.industry;
    case categoryCode === 'A0205':
      return tag.building;
    case categoryCode === 'A0206' || categoryCode === 'A0208':
      return tag.culture;
    case categoryCode === 'A0207':
      return tag.festival;
    case bigCategory === 'C01':
      return tag.course;
    case bigCategory === 'A03':
      return tag.leisure;
    case bigCategory === 'B02':
      return tag.accomodation;
    case bigCategory === 'A04':
      return tag.shoping;
    case bigCategory === 'A05':
      return tag.michelin;
    default:
      return []
  }
};
