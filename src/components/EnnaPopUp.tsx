
function EnnaPopUp(props: {x:number, y:number}) {
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