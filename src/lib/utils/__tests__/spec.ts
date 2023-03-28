import { extractFiltersFromProjectData } from "..";
import projectData from "../../../sampleData/projectData.json";

describe("extractFiltersFromProjectData", () => {
  const filters = extractFiltersFromProjectData(projectData.data);
  it("should return categories", () => {
    expect(filters["main_category"]).toEqual([
      "Finance & insurance",
      "Climate & Environment",
      "Agriculture & Food",
      "Finance & Insurance",
      "Logistics & Traceability",
      "Identity & Ownership",
      "Health",
      "Aid & Philanthropy",
      "Digital content & Arts",
      "Transport & Infrastructure",
      "Energy",
      "Government & Democracy",
      "Education & Employment",
      "Products & Consumption",
      "Internet & Telco",
      "Government & democracy",
      "identity & Ownership",
      "Governement & Democracy,Education & Employment",
      "Education & Employment,",
      "Heath",
      "Identity & ownership",
      "products & consumption",
      "Government & Democarcy",
      "Government & Democracy,Education & Employment",
      "Finance & Insurance,Climate & Environment",
      "Climate & Environment,Government & Democracy",
    ]);
  });

  it("should return blockchainType", () => {
    expect(filters["blockchain_type"]).toEqual([
      "Public",
      "Not Known",
      "Private",
      "Not known",
      "Not known (inactive?)",
      "Hybrid",
      "Privé",
      "Depracated",
      "Public (inactive?)",
      "Depends on choice of blockchain",
      "No more blockchain",
      "ABANDONED BLOCKCHAIN PROJECT",
    ]);
  });

  it("should return blockchain_technology", () => {
    const arr = filters["blockchain_technology"];
    expect(arr).toEqual(
      // Too many
      expect.arrayContaining([
        "Gardens",
        "xDAI",
        "Ethereum",
        "Treum",
        "SmartCredit",
        "Smart Contract (EVE)",
        "Smart contract",
        "Sidechain",
        "Hyperledger",
        "SAP Blockchain Service",
        "Polygon",
        "Ehtereum",
        "Solana",
        "Bitcoin",
        "Lightning Network",
        "Gnosis chain",
        "Gnosis Chain",
        "Fuse",
        "FoodChain",
        "Chainlink",
        "Cosmos",
        "BNB Chain",
        "BNB",
        "Wave BL",
        "VINchain",
        "Vechain",
        "VeChain",
        "Tobalaba",
        "Tezos",
        "Cardano",
        "TEZOS",
        "Tendermint",
        "Telos",
        "TBC",
        "Stellar",
        "ethereum",
        "BSV",
      ])
    );
  });

  it("should return primary_headquarter_country", () => {
    const arr = filters["primary_headquarter_country"];
    expect(arr).toEqual(
      // Too many
      expect.arrayContaining([
        "Distributed",
        "Switzerland",
        "Fiji",
        "Australia",
        "United States",
        "Bengladesh",
        "Estonia",
        "India",
        "Singapore",
        "United Kingdom",
        "Germany",
        "Spain",
        "Israel",
        "Hungary",
        "Kenya",
        "Liechtenstein",
        "Malta",
        "Belgium",
        "France",
        "Ireland",
        "Sweden",
        "Canada",
        "Panama",
        "SIngapore",
        "South Africa",
        "Netherlands",
        "Czech Republic",
        "United Arab Emirates",
        "Luxembourg",
        "Gibraltar",
        "Argentina",
        "China",
        "Italy",
        "New Zealand",
        "Greece",
        "Denmark",
        "Hong Kong",
        "Finland",
        "Brazil",
        "Russia",
        "Ghana",
        "Croatia",
        "Norway",
        "Nigeria",
        "Malaysia",
        "Peru",
        "Portugal",
        "Tunisia",
        "Cayman Islands",
        "Lithuania",
        "Mexico",
        "Iceland",
        "Thailand",
        "Mauritius",
        "Pakistan",
        "Slovenia",
        "Afghanistan",
        "Ivory Coast",
        "Bermuda",
        "Andorra",
        "Austria",
        "Vanuatu",
        "South Korea",
        "Romania",
        "Chile",
        "Poland",
        "Sri Lanka",
        "Taiwan",
        "Laos",
        "Wales",
        "Japan",
        "Ethiopia",
        "Philippines",
        "Latvia",
        "Dominica",
        "Zimbabwe",
        "Seychelles",
        "Colombia",
        "Barbados",
        "Belarus",
        "Armenia",
        "Cuba",
        "Rwanda",
        "Turkey",
        "Serbia",
        "Ukraine",
        "Slovakia",
        "Congo, Republic of the",
        "Lebanon",
        "Bulgaria",
        "Uruguay",
        "Morocco",
      ])
    );
  });
});
