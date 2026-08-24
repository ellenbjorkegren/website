export type Respondent = {
  id: number;
  age: string;
  gender: string;
  orientation: string;
  relationship: string;
  country: string;
  used12mo: string;
  situations: string[];
  mainReason: string;
  likelihood: string;
  brandsUsed: string[];
  whoBuys: string;
  whereBuyNow: string[];
  decisionFactors: string[];
  carryFreq: string;
  whyNotCarry: string[];
  homeFreq: string;
  whyNotHome: string[];
  missedMoment: string;
  whyMissed: string[];
  agreeCarryMore: string;
  agreeHomeMore: string;
  agreePayMore: string;
  whereWantBuy: string[];
  topChoice: string;
  topChoiceReasons: string[];
  topChoiceOtherText: string;
  topChoiceOtherTranslated: boolean;
  secondChoice: string;
  secondChoiceReasons: string[];
  secondChoiceOtherText: string;
  secondChoiceOtherTranslated: boolean;
  maxPrice: string;
  comment: string;
  commentTranslated: boolean;
};

export type Item = { label: string; value: number; pct: number };
export type DesignItem = Item & { letter: string; image: string };
export type Likert = { label: string; disagree: number; neutral: number; agree: number; n: number };
export type Quote = { text: string; tag: string; translated?: boolean };
export type DesignComment = Quote;

export type Filters = {
  gender: string | null; // null = all
  age: string | null; // null = all
};
