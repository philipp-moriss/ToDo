export type Card = {
  id: string;
  title: string;
  checked: boolean;
  order: number;
};

export type FilterType = 'Active' | 'Completed' | 'All';
