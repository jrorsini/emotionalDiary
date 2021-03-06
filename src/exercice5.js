import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { updateImportantPeople } from './store/actions/user';
import axios from 'axios';

class Exercice5 extends Component {
	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
		this.removeHandler = this.removeHandler.bind(this);
	}

	submitHandler(e) {
		e.preventDefault();
		let alreadyThere = false;
		const { dispatch } = this.props;
		const { importantPeople } = this.props.user;
		const { name, type } = e.target.elements;
		const importantPeopleObject = {
			name: name.value,
			type: type.value
		};

		name.value = '';

		importantPeople.map(e => {
			if (
				e.name + '' + e.type ===
				importantPeopleObject.name + '' + importantPeopleObject.type
			) {
				alreadyThere = true;
			}
		});
		if (!alreadyThere) {
			dispatch(
				updateImportantPeople(importantPeople.concat([importantPeopleObject]))
			);
			axios.post(
				'/update_important_people/',
				importantPeople.concat([importantPeopleObject])
			);
		}
	}

	removeHandler(name, type) {
		const importantPeople = this.props.user.importantPeople.filter(
			e => e.type + '' + e.name !== type + '' + name
		);
		this.props.dispatch(updateImportantPeople(importantPeople));
		axios.post('/update_important_people/', importantPeople);
	}

	render() {
		const { user } = this.props;
		return (
			<div>
				<p>Add the most important people to your life.</p>
				<form onSubmit={this.submitHandler}>
					<input type="text" name="name" placeholder="Person's name" />
					<select name="type" id="">
						<option value="life">life</option>
						<option value="work">work</option>
						<option value="family">family</option>
					</select>
					<input type="submit" value="Add" />
				</form>
				<ul>
					{user &&
						user.importantPeople.length !== 0 &&
						user.importantPeople.map((e, i) => (
							<li key={i}>
								<button onClick={() => this.removeHandler(e.name, e.type)}>
									remove
								</button>
								<button>edit</button>
								<b>{e.type}</b> - {e.name}
							</li>
						))}
				</ul>

				<p>
					Is your level of self-confidence stable or maybe dependent on external
					factors?
				</p>
				<p>
					Around which people do you feel the most confident and around which do
					you feel bad and worthless?
				</p>
				<p>How are you affected by your successes and failures?</p>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default hot(module)(connect(mapStateToProps)(Exercice5));
