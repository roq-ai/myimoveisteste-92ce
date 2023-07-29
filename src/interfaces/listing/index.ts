import { AgencyInterface } from 'interfaces/agency';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ListingInterface {
  id?: string;
  title: string;
  description?: string;
  price: number;
  agency_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  agency?: AgencyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ListingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  agency_id?: string;
  user_id?: string;
}
