const getPainterResponse = (data) => ({ type: 'GET_PAINTER_RESPONSE', payload: data });

const getPainterResponseThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/response/${id}`,
    {
      credentials: 'include',

    },
  );
  const result = await response.json();
  dispatch(getPainterResponse(result));
};

export default getPainterResponseThunk;
