import { Component } from 'react';

interface ClockProps {
    intervalms: number; // interval in milliseconds
    fn: () => void;
}
interface ClockStates {
    currentCount: number;
}

class RepeatThis extends Component<ClockProps, ClockStates> {
    intervalId:NodeJS.Timer|undefined = undefined;
    constructor(props:any){
        super(props);
        this.state = {currentCount: 0};
    }
    timer() {
        this.props.fn();
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), this.props.intervalms);
    }
    componentWillUnmount(){
        this.props.fn();
        clearInterval(this.intervalId);
    }
    render() {
        return <></>;
    }
}

export default RepeatThis;