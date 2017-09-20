import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class PlayerSearch extends Component {


    constructor(){
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3030/';


        return fetch(url)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json()

            })
            .then((responseJson) => {
                console.log('I was triggered during componentDidMount'+responseJson);
                this.setState({
                    players: responseJson
                });
            });
    }

    /**
     * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
     * and limits the number of results displayed using the `maxSearchResults` property.
     */
    render(){
        return (
        <div>
            <AutoComplete
                floatingLabelText="Search for a player"
                filter={AutoComplete.fuzzyFilter}
                dataSource={this.state.players}
                maxSearchResults={5}
            />
        </div>
    );
    }

}
export default PlayerSearch;