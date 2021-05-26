import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        dados: [],
    }

    login = async () => {
      try {
        const response = await axios.post("https://projeto-integrador-4.herokuapp.com/auth/login", {
          email: "maria@gmail.com",
          password: "123456"
        });
        this.setState({ dados: response.data });
      } catch(e) {
        alert(e.response.data.message);
      }
    }

    logout = () => this.setState({ dados: [] });

    render() {
        const {dados} = this.state;

        return (
            <div>
              {
                dados.length === 0 ?
                  <div>
                    <h1>Efeitue login!</h1>
                    <button onClick={() => this.login()}>Login</button>
                  </div>
                : 
                  <div>
                    <h1>Olá usuário!!</h1>
                    <button onClick={() => this.logout()}>Logout</button>
                  </div>
              }
              
            </div>
        );
    };
};

export default App;