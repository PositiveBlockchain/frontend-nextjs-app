export type Project = {
  slug: string;
  project_name: string;
  active: string;
  website: string;
  categories_list: string[];
  main_category: string;
  sub_categories_list: string[];
  sdg_occurrences_list: string[];
  description_short_value_proposition_in_a_tweet: string;
  long_description: string;
  tags_keywords_list: string[];
  business_tagline: string;
  primary_headquarter_city: string;
  primary_headquarter_country: string;
  secondary_headquarter_city: string;
  secondary_headquarter_country: string;
  hq_region: string;
  hq_subregion: string;
  year_creation: string;
  founder_names_list?: string[];
  organization_type: string;
  twitter_url: string;
  facebook_url: string;
  linkedin_url: string;
  discord_url: string;
  video_url: string;
  white_paper_url: string;
  coin_market_cap_url: string;
  github_url: string;
  other_links_list?: string[];
  logo_url: string;
  token_ticker: string;
  blockchain_type: string;
  blockchain_technology: string;
  coinmarketcap_url?: string;
  github_link?: string;
  sponsors_partners_list?: string[];
  servicing_area?: string;
  servicing_region?: string;
  subregions_list?: string[];
  pb_partner_tag?: string;
};

export type ProjectDataSchema = {
  [data_key: string]: {
    headerTitle: string;
    columnIdx: number;
    type: "text" | "list" | "boolean" | "select";
    options?: string[];
  };
};

export interface CountryData {
  country: string;
  subregion: string;
  region: string;
  hemisphere: string;
}
