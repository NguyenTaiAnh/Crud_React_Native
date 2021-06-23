import axios from "axios";

export const getUser = () => async (dispatch) => {
  const res = await axios.get(
    "https://60c1ee034f7e880017dc0d4f.mockapi.io/api/v1/User"
  );
  dispatch({
    type: "GET_USERS",
    payload: [...res.data],
  });
};


