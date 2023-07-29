import axios from 'axios';
import queryString from 'query-string';
import { ListingInterface, ListingGetQueryInterface } from 'interfaces/listing';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getListings = async (query?: ListingGetQueryInterface): Promise<PaginatedInterface<ListingInterface>> => {
  const response = await axios.get('/api/listings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createListing = async (listing: ListingInterface) => {
  const response = await axios.post('/api/listings', listing);
  return response.data;
};

export const updateListingById = async (id: string, listing: ListingInterface) => {
  const response = await axios.put(`/api/listings/${id}`, listing);
  return response.data;
};

export const getListingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/listings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteListingById = async (id: string) => {
  const response = await axios.delete(`/api/listings/${id}`);
  return response.data;
};
