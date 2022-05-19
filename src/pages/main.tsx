import { Component } from "react";
import EnnaPopUp from "../components/EnnaPopUp";
import SOUNDS from "../Sound";

function randomInt(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

interface MainStates {
    ennas: JSX.Element[];
}

class Main extends Component<{}, MainStates>{
    
    constructor(props:any){
        super(props);
        this.state = {
            ennas: []
        };
    }

    generateEnna(){
        console.log("showing enna");
        const ennas = this.state.ennas;
        ennas.push(<EnnaPopUp x={randomInt(0, window.innerWidth)} y={randomInt(0, window.innerHeight)} sound_idx={randomInt(0, SOUNDS.length)}/>);
        this.setState({
            ennas: ennas
        });
        
        setTimeout(() => {
            console.log("removing enna");
            let ennas = this.state.ennas;
            ennas.shift();
            this.setState({
                ennas: ennas
            });
        }, 2000);
    }

    render() {
        return (
            <div className="App" onClick={() => this.generateEnna()}>
                <header className="App-header">
                    {this.state.ennas}
                </header>
                <a href="https://www.youtube.com/channel/UCR6qhsLpn62WVxCBK1dkLow">Enna's youtube channel</a>
                <a href="https://twitter.com/EnnaAlouette">Enna's twitter</a>
            </div>
        );
    }
}

export default Main;