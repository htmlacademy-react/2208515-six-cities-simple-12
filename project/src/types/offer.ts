export type Host = {
  src: string;
  name: string;
  isPro: boolean;
};

export type Location = {
  lat: number;
  lng: number;
  zoom: number;
}

export type City = {
  location: Location;
  name: string;
}

export type Offer = {
  city: City;
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

export type ActiveOffer = Offer | null;
