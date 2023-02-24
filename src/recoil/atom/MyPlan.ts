import { dateToString } from '@/components/MyPlan/MyPlannerHandler';
import { Item } from '@/types/DetailType';
import React from 'react';
import { atom } from 'recoil';

export interface PlanType {
  name: string;
  startDate: {};
  endDate: {};
  schedule: { [key: string]: [] };
  contentId: 0;
  isDelete: false;

  bookmarkCount: 0;
}

export interface PickScheduleType {
  schedule: string;
  day: string;
}

//일정 데이터
export const NewPlanRecoil = atom({
  key: 'NewPlanRecoil',
  default: <PlanType>{
    name: '',
    startDate: {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
      yyyymmdd: dateToString(new Date()),
    },
    endDate: {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
      yyyymmdd: dateToString(new Date()),
    },
    schedule: {},
    isDelete: false,
    contentId: 0,
    bookmarkCount: 0,
  },
});

// 관광지 데이터
export const TourListRecoil = atom({
  key: 'TourList',
  default: <Item[]>[],
});

export const MyWishList = atom({
  key: 'MyWishList',
  default: <Item[]>[],
});

// 현재 관광지 추가 작업중인 일정 카드
export const PickScheduleRecoil = atom({
  key: 'PickScheduleRecoil',
  default: <PickScheduleType>{ schedule: '', day: '' },
});

// 지정할 시간,메모 데이터
export const MemoAndTime = atom({
  key: 'memoAndTime',
  default: { memo: '', when: { time: 60, hour: 1, minute: 0, amPm: 1 } },
});

// 작업할 이벤트 정보
export const WhichEvent = atom({
  key: 'WhichEvent',
  default: { date: '', index: 0, isOpen: false },
});

// 작업했던 전 이벤트
export const PreviousEvent = atom({
  key: 'previousEvent',
  default: [],
});

// 초기 좌표 데이터
export const InitLocation = atom({
  key: 'InitLocation',
  default: { x: 127.7, y: 36.2, level: 13 },
});

// 캘린더 열기/닫기 데이터
export const IsCalenderView = atom({
  key: 'IsCalenderView',
  default: false,
});

// 사이드 메뉴 열기/닫기 데이터
export const IsSidePageView = atom({
  key: 'IsSidePageView',
  default: false,
});

// 사이드 메뉴 열기/닫기 데이터
export const DropDownRef = atom({
  key: 'DropDownRef',
  default: <React.MutableRefObject<any>>{ current: {} },
});

// 사이드 메뉴 열기/닫기 데이터
export const Authority = atom({
  key: 'Authority',
  default: {
    write: true,
    view: true,
    update: true,
  },
});

// export const NewPlanRecoil = atom({
//   key: 'NewPlanRecoil',
//   default: <any>{},
//   effects: [
//     ({ setSelf }: any) => {
//       const newSchedule: any = {};
//       const initSchedule = dateToString(new Date());
//       newSchedule[initSchedule] = [];

//       setSelf({
//         name: '',
//         startDate: {
//           year: new Date().getFullYear(),
//           month: new Date().getMonth(),
//           date: new Date().getDate(),
//           yyyymmdd: dateToString(new Date()),
//         },
//         endDate: {
//           year: new Date().getFullYear(),
//           month: new Date().getMonth(),
//           date: new Date().getDate(),
//           yyyymmdd: dateToString(new Date()),
//         },
//         schedule: { ...newSchedule },
//         contentId: 0,
//         isDelete: false,
//         bookmarkCount: 0,
//       });
//     },
//   ],
// });
