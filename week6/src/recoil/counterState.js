import { atom, selector } from "recoil";

export const numberState = atom({
  key: "number",
  default: 0,
});

export const differenceState = atom({
  key: "difference",
  default: 1,
});

export const isEvenState = selector({
  key: "isEven",
  get: ({ get }) => {
    const number = get(numberState);
    return number % 2 == 0 ? true : false;
  },
});
