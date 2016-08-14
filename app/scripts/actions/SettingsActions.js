import {createAction} from 'redux-actions';


export const UPDATE_CURRENT_SERVER = 'UPDATE_SERVER';
export const SAVE_SERVER_URL       = 'SAVE_SERVER_URL';
export const ADD_SERVER_HEADER     = 'ADD_SERVER_HEADER';
export const ADD_SERVER_COOKIE     = 'ADD_SERVER_COOKIE';
export const DELETE_SERVER_HEADER  = 'DELETE_SERVER_HEADER';
export const DELETE_SERVER_COOKIE  = 'DELETE_SERVER_COOKIE';
export const DELETE_SERVER         = 'DELETE_SERVER';

export const updateCurrentServerAction = createAction(UPDATE_CURRENT_SERVER);
export const saveServerUrlAction       = createAction(SAVE_SERVER_URL);
export const addServerHeaderAction     = createAction(ADD_SERVER_HEADER);
export const deleteServerHeaderAction  = createAction(DELETE_SERVER_HEADER);
export const addServerCookieAction     = createAction(ADD_SERVER_COOKIE);
export const deleteServerCookieAction  = createAction(DELETE_SERVER_COOKIE);
export const deleteServerAction        = createAction(DELETE_SERVER);


export function saveServerUrl(url) {
	return saveServerUrlAction({url})
}

export function addServerHeader(header) {
	return addServerHeaderAction({header})
}
export function deleteServerHeader(key) {
	return deleteServerHeaderAction({key})
}

export function addServerCookie(cookie) {
	return addServerCookieAction({cookie})
}
export function deleteServerCookie(key) {
	return deleteServerCookieAction({key})
}

export function updateCurrentServer(server) {
	return updateCurrentServerAction({server});
}

export function saveCurrentServer() {
	return saveCurrentServerAction();
}

export function deleteServer(index) {
	return deleteServerAction({index});
}