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
        const sound_idx = randomInt(0, SOUNDS.length);
        ennas.push(<EnnaPopUp x={randomInt(0, window.innerWidth)} y={randomInt(0, window.innerHeight)} sound_idx={sound_idx}/>);
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
        }, SOUNDS[sound_idx].duration*1000);
    }

    render() {
        return (
            <div className="App" >
                <div className="App-header">
                    <button onClick={() => this.generateEnna()}>Spawn Enna to swear at you</button>
                </div>
                <div>
                    {this.state.ennas}
                </div>
                <a href="https://www.youtube.com/channel/UCR6qhsLpn62WVxCBK1dkLow">Enna's youtube channel</a><br />
                <a href="https://twitter.com/EnnaAlouette">Enna's twitter</a><br />
                <a href="https://github.com/ACitronella/enna-clicky">This github repo</a>
            </div>
        );
    }
}

export default Main;
