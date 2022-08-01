const getUserCards = (data) => ({ type: 'GET_USER_CARDS', payload: data });

const getUserCardsThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/card/${id}`,
    {
      credentials: 'include',
    },
  );
  const result = await response.json();
  dispatch(getUserCards(result));
};

export default getUserCardsThunk;
