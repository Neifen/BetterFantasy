import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class PlayerSearch extends Component {

    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        const url = 'http://localhost:3030';
        fetch(url)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json()

            })
            .then((responseJson) => {
                this.setState({
                    players: responseJson
                });
            });
    }

    /**
     * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
     * and limits the number of results displayed using the `maxSearchResults` property.
     */
    render() {
        const dataSourceConfig = {
            text: 'name',
            value: 'name'
        };

        return (
            <div>
                <AutoComplete
                    floatingLabelText="Search for a player"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={this.state.players}
                    dataSourceConfig={dataSourceConfig}
                    maxSearchResults={5}
                />
            </div>
        );
    }

}

export default PlayerSearch;