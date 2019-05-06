import { GET_SPOTLIGHT } from './types';
import httpClient from '../../services/httpClient';

export const getSpotlight = () => {
    return async dispatch => {
        try {
            const response = await httpClient.get('/spotlight-event');
            const spotlight = await response.data;

            dispatch({
                type:GET_SPOTLIGHT,
                payload:spotlight.spotlight_event
            });
        }
        catch (e) {
            console.log(e);
        }
    };
}