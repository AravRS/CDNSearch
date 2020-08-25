import { useReducer, useEffect } from "react";
import axios from "axios";

// const fixCors = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://api.cdnjs.com/libraries";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        loading: true,
        libs: [],
      };

    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        libs: action.payload.libs,
      };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        libs: [],
      };

    default:
      return state;
  }
}

export default function useFetchLibs(params) {
  const [state, dispatch] = useReducer(reducer, { libs: [], loading: true });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: {
          limit: 10,
          fields: "version,filename,description,fileType,homepage",
          ...params,
        },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { libs: res.data } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken.cancel();
    };
  }, [params]);

  return state;
}
