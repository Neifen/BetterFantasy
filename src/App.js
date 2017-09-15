import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from  'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class App extends Component {

    constructor() {
        super();

        this.state = {
            players : []

        }
    }
    componentDidMount() {
        return fetch('http://api.fantasy.nfl.com/v1/players/stats?position=QB')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json()

            })
            .then((responseJson) => {
                console.log('I was triggered during componentDidMount'+responseJson);

                this.setState({
                    players: responseJson.players
                });
            });
    }


    render() {

        // const persons = Object.keys(this.state.players).map

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <MuiThemeProvider>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Pts</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                this.state.players.map((player) =>
                                    (<TableRow>
                                        <TableRowColumn>{player.id}</TableRowColumn>
                                        <TableRowColumn>{player.name}</TableRowColumn>
                                        <TableRowColumn>{player.name}</TableRowColumn>
                                    </TableRow>)
                                )
                            }

                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Randal White</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Steve Brown</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
