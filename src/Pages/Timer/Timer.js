import React, {Component} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles'
import {parseMillisecondsIntoReadableTime} from '../../Functions';
import {Icon} from 'react-native-elements'
import {Button} from 'react-native-elements';
import LottieView from "lottie-react-native";

const statusTypes = {
    PAUSE: 'PAUSE',
    RUNNING: 'RUNNING',
    STOPPED: 'STOPPED',
    COMPLETED: 'COMPLETED'
}

class Timer extends Component {
    constructor(props) {
        super(props)
        this.timerRef = null;
        this.state = {
            timer: props.data,
        };
    }

    playTimer = (data) => {
        clearTimeout(this.timerRef)
        let timer = data || this.state.timer;
        if (timer.remainingTime < 1000) return;

        let d = new Date()
        timer.startedAt = d.getTime();
        timer.status = statusTypes.RUNNING;
        this.setState({timer})

        this.timerRef = setTimeout(this.handleTimeDecrement, 1000)
    }


    pauseTimer = () => {
        let timer = this.state.timer;
        timer.status = statusTypes.PAUSE;
        this.setState({timer})
        clearTimeout(this.timerRef);
    }


    handleDeleteTimer = () => {
        clearTimeout(this.timerRef);
        this.props.onDelete(this.state.timer);
    }

    handleToggleStatus = () => {
        let timer = this.state.timer;
        if (timer.status === statusTypes.PAUSE)
            this.playTimer();
        else if (timer.status === statusTypes.RUNNING)
            this.pauseTimer();
    }

    componentDidMount(): void {
        let {data} = this.props;
        if (data.status === statusTypes.RUNNING) {
            console.log('befor', data)
            let d = new Date();
            let elasspedTime = Math.floor(d.getTime() - parseInt(data.startedAt));

            if (data.remainingTime - elasspedTime > 0) {
                data.remainingTime = data.remainingTime - elasspedTime;
            } else {
                data.remainingTime = 0;
                data.status = statusTypes.COMPLETED;
            }
            console.log('after', data)

            this.playTimer(data)
            return;
        }
        this.setState({timer: data})
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        let {data} = nextProps;
        if (data.status === statusTypes.RUNNING ) {
            console.log('befor', data)
            let d = new Date();
            let elasspedTime = Math.floor(d.getTime() - parseInt(data.startedAt));

            if (data.remainingTime - elasspedTime > 0) {
                data.remainingTime = data.remainingTime - elasspedTime;
            } else {
                data.remainingTime = 0;
                data.status = statusTypes.COMPLETED;
            }
            console.log('after', data)

            this.playTimer(data)
            return;
        }
        this.setState({timer: data})
    }



    handleTimeDecrement = () => {

        this.setState(previousState => {
            let timer = {...previousState.timer};
            timer.remainingTime -= 1000;//as time is in milliseconds
            if (timer.remainingTime <= 0) {
                timer.status = statusTypes.COMPLETED;
                timer.remainingTime = 0;
                clearTimeout(this.timerRef)
            } else
                this.timerRef = setTimeout(this.handleTimeDecrement, 1000)
            return {timer}
        })

    }

    handleResetTimer = () => {
        let timer = this.state.timer;
        timer.remainingTime = timer.totalDuration;
        timer.status = statusTypes.PAUSE;
        clearTimeout(this.timerRef);
        this.setState({timer})
    }

    handleEditTimer = (timer) => {
        clearTimeout(this.timerRef)
        let d = new Date();
        timer.startedAt = d.getTime();
        this.props.onEdit(timer)
    }

    componentWillUnmount() {
        console.log("Timer unmounted")
        clearTimeout(this.timerRef);
        let {timer} = this.state;
        timer.startedAt = new Date().getTime();
        this.props.updateTImer(this.state.timer);
    }

    render() {
        let timer = this.state.timer;
        return (
            <View style={styles.timerOuterWrapper}>

                <View style={styles.card}>
                    <Pressable
                        style={{position: 'absolute', top: -7, right: -7}}
                        android_ripple={{color: 'cyan'}}
                        onPress={this.handleDeleteTimer}
                    >
                        <Text><Icon
                            size={12}
                            name='trash'
                            raised
                            color={'red'}
                            type='font-awesome'
                            reverse={true}
                        /></Text>
                    </Pressable>
                    <Pressable
                        style={{position: 'absolute', top: -7, left: -7}}
                        android_ripple={{color: 'cyan'}}
                        onPress={this.handleEditTimer}
                    >
                        <Text><Icon
                            size={12}
                            name='pencil'
                            raised
                            color={'#005A81'}
                            type='font-awesome'
                            reverse={true}
                        /></Text>
                    </Pressable>

                    <View style={{
                        alignItems: 'center',
                    }}>
                        <Text style={styles.timerTitle}>{timer.title}</Text>
                    </View>
                    <View style={
                        {
                            alignItems: 'center',
                        }
                    }>
                        <Text style={styles.time}>{parseMillisecondsIntoReadableTime(timer.remainingTime)}</Text>
                    </View>

                    <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', height: 40}}>
                        {timer.status !== statusTypes.COMPLETED &&

                        <Button
                            containerStyle={{flex: 1}}
                            buttonStyle={{backgroundColor: '#BB1F00'}}
                            onPress={this.handleToggleStatus}
                            icon={
                                <Icon
                                    size={15}
                                    color={'white'}
                                    name={timer.status === statusTypes.PAUSE ? 'play' : 'pause'}
                                    type='font-awesome'
                                />
                            }
                        />}
                        {timer.status === statusTypes.COMPLETED &&
                        <View style={[styles.animationBox, {flex: 1}]}>
                            <LottieView
                                source={require('../../assets/Animations/start.json')}
                                autoPlay
                                loop
                                style={styles.animation}
                            />
                        </View>
                        }
                        <Button
                            containerStyle={{marginLeft: 10}}
                            buttonStyle={{backgroundColor: '#4A4A4A'}}
                            onPress={this.handleResetTimer}
                            icon={
                                <Icon
                                    color={'white'}
                                    size={15}
                                    name={'undo'}
                                    type='font-awesome'
                                />
                            }
                        />

                    </View>

                </View>
            </View>
        );
    }
}


export default Timer;
