const GET_DATA = 'covid/GET_DATA';

const initialData = [];

const GetData = (payload) => ({
  type: GET_DATA,
  payload,
});

const DataReducer = (state = initialData, action = { type: 'action' }) => {
  switch (action.type) {
    case GET_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { GetData, DataReducer };
