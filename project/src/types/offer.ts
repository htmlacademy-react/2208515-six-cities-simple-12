export type Host = {
  src: string;
  name: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  picture: string[];
  heading: string;
  description: string;
  isPremium: boolean;
  type: string;
  rating: number;
  countBedrooms: number;
  maxAdult: number;
  price: number;
  inside: string[];
  infoByHost: Host;
};

export type Offers = Offer[];
