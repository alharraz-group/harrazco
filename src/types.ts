export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface TrustMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string; // Lucide icon identifier
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  serviceType: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved';
  createdAt: string;
}
