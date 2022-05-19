import SOUNDS from "../Sound";

function EnnaPopUp(props: {x:number, y:number, sound_idx:number}) {
    console.log(props);
    SOUNDS[props.sound_idx].play();
    return (
        <div className="cantselect">
            <img src="Enna_Alouette_Portrait.webp" className="App-logo" alt="logo" style={{
                position: "fixed",
                top: props.y,
                right: props.x
            }}/>
        </div>
    );
}

export default EnnaPopUp;