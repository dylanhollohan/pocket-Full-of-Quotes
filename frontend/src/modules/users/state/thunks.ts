import axios, { AxiosResponse } from 'axios';
import { SignupRequestPayload, SignupSuccessPayload } from '../types';
import { signupSuccess, signupFail } from './actions';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api'
});

// signupRequest is the "thunk action creator"
export function signupRequest(payload: SignupRequestPayload) {
  // signupRequestThunk is the "thunk function"
  return async function signupRequestThunk(dispatch, getState) {
    try {
      // Note that Axios automatically serializes payload as JSON (stringify)
      const response: AxiosResponse<SignupSuccessPayload>  = await axiosInstance({
        method: 'post',
        url: '/auth/signup',
        withCredentials: true,
        data: payload
      });
      console.log(response);
      // @ts-ignore
      if (response.data.userId) {

        // @ts-ignore
        dispatch(signupSuccess({ userId: response.data.userId}));
      } else {
        // @ts-ignore
        dispatch(signupFail(response.errors))
        // use reducers to set error messages in global, and then clear them when a new signup request is made, or otherwise navigation is used.
      }
    } catch (error) {
      dispatch(signupFail({ message: "theres an error"}))
    }
  }
}