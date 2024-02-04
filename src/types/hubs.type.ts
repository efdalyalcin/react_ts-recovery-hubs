type HubUnassignedRecoveryListT = {
  uuid: string;
  createdAt: string;
  state: string;
  unassignedQuantity: number;
  assignedQuantity: number;
  quantityUnit: string;
};

type LogoAndImageT = {
  uuid: string;
  directLink: string;
  thumbnailDirectLink: string;
  fileName: string;
  size: number;
};

export type HubT = {
  uuid: string;
  state: 'DEMO' | 'ACTIVE';
  category: string;
  stage: 'FULLY_ONBOARDED' | 'PILOT';
  name: string;
  displayName: string;
  slug: string;
  type: string;
  location: string;
  recoveredQuantity: number;
  recoveredQuantityUnit: string;
  totalRecoveredQuantity: number;
  collectionAndSortingParagraph: string;
  hubUnassignedRecoveryList: HubUnassignedRecoveryListT[];
  parentHubName: string | null; // Portfolio
  logo: LogoAndImageT;
  cardDescription: string;
  cardImage: LogoAndImageT;
  thankYouNote: string;
  portfolioAssignedQuantityPercentage: null | number;
  unassignedQuantityPercentage: null | number;
  unassignedQuantityTotal: null | number;
  assignable: boolean;
  formattedRecoveredQuantity: string;
  formattedTotalRecoveredQuantity: string;
};
