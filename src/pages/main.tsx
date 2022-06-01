import { Component } from "react";
import RepeatThis from "../components/Cronjob";
import EnnaPopUp from "../components/EnnaPopUp";
import SOUNDS from "../Sound";

function randomInt(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

interface MainStates {
    ennas: JSX.Element[];
    ennaCount: number;
}

class Main extends Component<{}, MainStates>{
    
    constructor(props:any){
        super(props);
        this.state = {
            ennas: [],
            ennaCount: localStorage.getItem("ennaCount") !== null ? Number(localStorage.getItem("ennaCount")) : 0
        };
        this.generateEnna = this.generateEnna.bind(this);
    }

    generateEnna(){
        console.log("showing enna");
        const ennas = this.state.ennas;
        const sound_idx = randomInt(0, SOUNDS.length);
        const noise = new Audio(SOUNDS[sound_idx]);
        ennas.push(<EnnaPopUp x={randomInt(0, window.innerWidth)} y={randomInt(0, window.innerHeight)}/>);
        noise.addEventListener("loadeddata", () => {
            noise.volume = 0.2
            noise.play();
            console.log(noise.duration);
            this.setState({
                ennas: ennas,
                ennaCount: this.state.ennaCount + 1
            }, () => {
                setTimeout(() => {
                    console.log("removing enna");
                    let ennas = this.state.ennas;
                    ennas.shift();
                    this.setState({
                        ennas: ennas
                    });
                }, noise.duration*1000);
            });
        });
    }

    render() {
        return (
            <div className="App" >
                <div className="App-header">
                    {this.state.ennaCount}
                    <button onClick={this.generateEnna}>Spawn Enna to swear at you</button>
                    <RepeatThis intervalms={500} fn={() => {
                        console.log("update localstorage, set ennaCount to", this.state.ennaCount);
                        localStorage.setItem("ennaCount", this.state.ennaCount.toString())
                    }}/>
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
