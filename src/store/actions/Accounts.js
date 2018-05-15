import * as actionTypes from '../actions/actionTypes';

export const addAccountInit = () => {
  return {
    type: actionTypes.ADD_ACCOUNT_INIT
  };
};

export const addAccountSubmit = submitted => {
  return {
    type: actionTypes.ADD_ACCOUNT_SUBMIT,
    submitted
  };
};

export const deleteAccount = id => {
  return {
    type: actionTypes.DELETE_ACCOUNT,
    id
  };
};

export const editAccountInit = id => {
  return {
    type: actionTypes.EDIT_ACCOUNT_INIT,
    id
  };
};

export const editAccountSubmit = submitted => {
  return {
    type: actionTypes.EDIT_ACCOUNT_SUBMIT,
    submitted
  };
};
