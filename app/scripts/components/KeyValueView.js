import React, {Component, PropTypes} from "react";
import {connect} from 'react-redux';
import styles from 'styles/components/KeyValueView.scss';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import lodash from 'lodash';


import {
	shouldComponentUpdate
} from "react-immutable-render-mixin";

class KeyValueView extends Component {
	static displayName = 'KeyValueView';
	static propTypes   = {
		addLabel     : PropTypes.string,
		keyLabel     : PropTypes.string,
		valueLabel   : PropTypes.string,
		keyValueMap  : PropTypes.object.isRequired,
		onDeleteKey  : PropTypes.func.isRequired,
		onAddKeyValue: PropTypes.func.isRequired
	};

	static defaultProps = {
		addLabel     : "Add",
		keyLabel     : "Name",
		valueLabel   : "Value",
		keyValueMap  : {},
		onDeleteKey  : function (key) {
		},
		onAddKeyValue: function (key, value) {
		}
	};

	state = {
		key  : "",
		value: ""
	};

	//shouldComponentUpdate = shouldComponentUpdate;

	onDeleteKeyPrivate = (key) => {
		return (key) => {
			this.props.onDeleteKey(key);
		}
	};

	onAddKeyValuePrivate = () => {
		this.props.onAddKeyValue(this.state.key, this.state.value);
		this.setState({key: "", value: ""});
	};

	renderHeaderTableRows = () => {
		return lodash.map(this.props.keyValueMap, (value, key) => {
			return (
				<ListItem key={`key-${key}`} primaryText={`${key} = ${value}`}
									rightIconButton={<IconButton onClick={this.onDeleteKeyPrivate(key)}><CloseIcon/></IconButton>}/>
			)
		});
	};

	renderHeaderTable = () => {
		return (
			<List>
				{this.renderHeaderTableRows()}
			</List>
		);
	};

	render() {
		return (
			<Paper zDepth={5} style={{width:"100%", height:"100%"}}>
				<div className={styles.toolbar}>
					<TextField
						floatingLabelText={this.props.keyLabel}
						floatingLabelFixed={true}
						onChange={(event, key) => this.setState({key})}
						value={this.state.key}
					/>
					<TextField
						floatingLabelText={this.props.valueLabel}
						floatingLabelFixed={true}
						onChange={(event, value) => this.setState({value})}
						style={{margin: "0 20px"}}
						value={this.state.value}
					/>
					<RaisedButton label={this.props.addLabel} onClick={this.onAddKeyValuePrivate} disabled={!this.state.key}/>
				</div>
				<div className={styles.headerTable}>
					{this.renderHeaderTable()}
				</div>
			</Paper>
		)
	}
}

export default KeyValueView;
