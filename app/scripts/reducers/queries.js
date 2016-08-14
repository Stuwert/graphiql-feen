import {handleActions} from "redux-actions";
import {
	ADD_QUERY,
	UPDATE_CURRENT_QUERY,
	DELETE_QUERY,
	SAVE_CURRENT_QUERY
} from "actions/QueryActions";
import QueriesRecord from "records/QueriesRecord";
import QueryRecord from "records/QueryRecord";


const initialState = new QueriesRecord();

export default  handleActions({
	[ADD_QUERY]           : (state, action) => {
		return state.withMutations(newState => {
			return newState.setIn(["queries"], newState.queries.unshift(new QueryRecord({
				name     : action.payload.query.name,
				query    : action.payload.query.query,
				variables: action.payload.query.variables
			})));
		});
	},
	[SAVE_CURRENT_QUERY]  : (state) => {
		return state.withMutations(newState => {
			return newState.setIn(["queries"], newState.queries.unshift(state.currentQuery));
		});
	},
	[UPDATE_CURRENT_QUERY]: (state, action) => {
		const name      = !action.payload.hasOwnProperty("name") ? state.currentQuery.name : action.payload.name;
		const query     = !action.payload.hasOwnProperty("query") ? state.currentQuery.query : action.payload.query;
		const variables = !action.payload.hasOwnProperty("variables") ? state.currentQuery.variables : action.payload.variables;
		return state.set("currentQuery", new QueryRecord({
				name,
				query,
				variables
			}
		));
	},
	[DELETE_QUERY]        : (state, action) => {
		return state.withMutations(newState => {
			return newState.setIn(["queries"], newState.queries.delete(action.payload.index));
		});
	}
}, initialState);
