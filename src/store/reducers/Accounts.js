import uuid from 'uuid/v4';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
  accountList: [
    {
      id: 1,
      title: 'Cash',
      amount: 1000,
      currency: '$',
      icon: 'rich'
    },
    {
      id: 2,
      title: 'Cash2',
      amount: 1000000,
      currency: '€',
      icon: 'wallet'
    }
  ],
  editingAccountData: null
};

const addAccountInit = (state, action) => {
  return updateObject(state, { editingAccountData: null });
};

const addAccountSubmit = (state, action) => {
  const dataWithId = {
    ...action.submitted.data,
    id: uuid()
  };
  return updateObject(state, {
    accountList: [...state.accountList, dataWithId]
  });
};

const deleteAccount = (state, action) => {
  return updateObject(state, {
    accountList: state.accountList.filter(acc => acc.id !== action.id)
  });
};

const editAccountInit = (state, action) => {
  const data = state.accountList.filter(acc => acc.id === action.id);
  const index = state.accountList.findIndex(acc => acc.id === action.id);
  return updateObject(state, {
    editingAccountData: { data: data[0], index }
  });
};

const editAccountSubmit = (state, action) => {
  const accountList = [...state.accountList];
  accountList[action.submitted.index] = action.submitted.data;
  return updateObject(state, { accountList });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ACCOUNT_INIT:
      return addAccountInit(state, action);
    case actionTypes.ADD_ACCOUNT_SUBMIT:
      return addAccountSubmit(state, action);
    case actionTypes.DELETE_ACCOUNT:
      return deleteAccount(state, action);
    case actionTypes.EDIT_ACCOUNT_INIT:
      return editAccountInit(state, action);
    case actionTypes.EDIT_ACCOUNT_SUBMIT:
      return editAccountSubmit(state, action);
    default:
      return state;
  }
};

export default reducer;
