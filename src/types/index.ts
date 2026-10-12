export type Screen = 'home' | 'catalog' | 'product' | 'checkout' | 'patron';

export interface Product {
  id: string;
  editionNo: string;
  category: string;
  categorySlug: 'horology' | 'circadian' | 'atmospheric' | 'barware';
  name: string;
  badge?: string;
  materialBadge?: string;
  price: number;
  description: string;
  atelier: string;
  shippingTime: string;
  imageUrl: string;
  gallery?: string[];
  rating?: number;
  reviewCount?: number;
  availableInAtelier: boolean;
  isArchiveEdition?: boolean;
  weight?: string;
  dimensions?: string;
  materials?: string[];
  specs?: {
    [key: string]: string;
  };
  editorial?: {
    kicker: string;
    title: string;
    description: string;
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    image: string;
    caption: string;
  };
  dispatches?: Array<{
    title: string;
    content: string;
  }>;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedTemp?: string;
  customInscription?: string;
}

export interface ConsignmentItem {
  name: string;
  edition: string;
  vaultCert: string;
  price: number;
  atelier: string;
  imageUrl: string;
}

export interface ConsignmentDossier {
  id: string;
  date: string;
  status: 'In Preparation' | 'Delivered & Installed' | 'Delivered' | 'In Transit';
  stage?: string;
  stageProgress?: number;
  estimatedArrival?: string;
  stageNote?: string;
  total: number;
  settlementMethod: string;
  destination: string;
  items: ConsignmentItem[];
  vaultRecordId?: string;
  isLiveCommission?: boolean;
}

export interface SavedArtefact {
  id: string;
  name: string;
  subtitle: string;
  atelier: string;
  editionNo: string;
  statusBadge: string;
  statusType: 'available' | 'waitlist' | 'custom';
  price: number;
  depositPrice?: number;
  imageUrl: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
}

export interface ResidencyProtocol {
  id: string;
  name: string;
  typeBadge: string;
  cadastre: string;
  address: string;
  isPrimary?: boolean;
  isVerified?: boolean;
  intercomCode?: string;
  intercomHours?: string;
  instructions: {
    title: string;
    description: string;
  }[];
  allocatedArtefacts: {
    name: string;
    edition: string;
  }[];
}
