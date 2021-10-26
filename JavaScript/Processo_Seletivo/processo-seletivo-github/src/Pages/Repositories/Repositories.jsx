import { render } from "@testing-library/react";
import { Component } from "react";



class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaRepositorios :[],
            nomeUsuario :'',
        }
    };



    //OnChange vai disparar esa função
    atualizaNomeUsuario = async (event) => {

        console.log("Chamamos a função.")

        await this.setState({
        nomeUsuario: event.target.value
        })

        console.log(this.state.nomeUsuario);

    };


    ListarRepositorios = async (event) => {
        event.preventDefault()
        
        console.log("Chamando API")

        fetch('https://api.github.com/users/'+this.state.nomeUsuario+'/repos?per_page=10')

        .then(resposta => resposta.json())


         //Atualizar o state listaTipoEvento com os dados obtidos em formato json
        .then(dados => this.setState({listaRepositorios : dados}))

        .catch(erro => console.log(erro))
    }


  



    render() {
        return (
        <div>
            <main>
                <section>
                    <h1>Usuário</h1>
                    <form onSubmit={this.ListarRepositorios}>
                        <input type="text" onChange={this.atualizaNomeUsuario}  placeholder="Insira seu nome de usuário"/>
                        <button type="submit" disabled={this.state.nomeUsuario === '' ? 'nome' : ''}>Buscar</button>
                    </form>
                </section>
                <section>
                    <h2>Seus Repositórios</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Descrição</th>
                                <th>Data de Criação</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaRepositorios.map(
                                    (repositorio) => {
                                        return (
                                            <tr key ={repositorio.id}>
                                                <td>{repositorio.id}</td>
                                                <td>{repositorio.name}</td>
                                                <td>{repositorio.description}</td>
                                                <td>{repositorio.created_at}</td>
                                                <td>{repositorio.size}</td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
    }



}



export default Repositories;