import { GET_EVENTS } from './types';
import httpClient from '../../services/httpClient';

export const getEvents = () => {
    return async dispatch => {
        try{
            const events = await httpClient.get('/upcoming-events'); 
            const data = await events.data.upcoming_events;

            dispatch({
                type:GET_EVENTS,
                payload:data
            });
            
        }catch(e){  
            console.log(e);
        }
    }
};