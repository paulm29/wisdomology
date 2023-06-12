import { CategoryReference } from '../../common/model/wisdomology';

export interface AdminState {
  categoryReferences: CategoryReference[];
}

export const initialAdminState: AdminState = {
  categoryReferences: []
};
