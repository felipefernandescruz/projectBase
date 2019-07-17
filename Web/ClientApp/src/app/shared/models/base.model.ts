import * as moment from 'moment';

export class BaseModel {
  createdAt: string;
  deletedAt: string;
  updatedAt: string;

  constructor() {
    this.createdAt = '';
    this.deletedAt = '';
    this.updatedAt = '';
  }
}
