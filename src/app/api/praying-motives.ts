export interface PrayingMotive {
  url: string;
  motive: string;
  date: string;
}

export interface Response {
  count: number;
  next?: string;
  previous?: string;
  results?: PrayingMotive[];
}
