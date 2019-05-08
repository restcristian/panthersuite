import { GET_EVENTS, GET_CONCERTS_EVENTS } from './types';
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

export const getConcertsEvents = () => {
    return async dispatch =>  {
        try {
            const events = await httpClient.get('/concerts-upcoming-events');
            const data = await events.data.concerts_upcoming_events;

            dispatch({
                type:GET_CONCERTS_EVENTS,
                payload:data
            });
        }
        catch(e){
            console.log(e);
        }
    }
};