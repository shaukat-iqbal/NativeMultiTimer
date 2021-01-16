import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles'
const numberRegex = new RegExp('^[0-9]+$');
import {Header} from "../../Component/Header";


class AddTimer extends Component {
    constructor(props){
        super(props);
        const {timers,groupId} = props.route.params;
        this.state = {
            title: '',
            hours: '',
            minutes: '',
            seconds: '',
            timers:timers,
            groupId
        };
    }
    handleHours = (value) => {
        if (numberRegex.test(value) || value === '') {
            this.setState({hours: value});
        }
    };
    handleSeconds = (value) => {
        if ((numberRegex.test(value)&&parseInt(value)<60) || value === '') {
            this.setState({seconds: value});
        }
    };
    handleMinutes = (value) => {
        if ((numberRegex.test(value)&&parseInt(value)<60) || value === '') {
            this.setState({minutes: value});
        }
    };
    handleAddTimer = () => {
        let timers = [...this.state.timers];
        let {hours, minutes, seconds, title} = this.state;
        if (hours === '') {
            hours = 0;
        }
        if (minutes === '') {
            minutes = 0;
        }
        if (seconds === '') {
            seconds = 0;
        }
        if(title==='')
        {
            alert('Kindly add title of timer');
            return;
        }
        if(title.length>15)
        {
            alert('Only 15 characters are allowed');
            return;
        }
        if (!hours && !minutes && !seconds) {
            alert('Kindly Add duration');
            return;
        }

        let totalTime = (parseInt(hours) * 3600 * 1000) + (parseInt(minutes) * 60 * 1000) + (parseInt(seconds) * 1000);//in millis
        timers.push({
            id: parseInt(Math.random() * 100),
            title: title,
            startedAt:0,
            totalDuration: totalTime,
            remainingTime: totalTime,
            status: 'PAUSE',
            groupId:this.state.groupId
        });
        this.props.navigation.navigate('MainPage', {timers: timers})
    };
    handleCancel=()=>{
        this.props.navigation.navigate('MainPage')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header onGoToHome={this.handleCancel} onAddTimer={this.handleAddTimer} hideControls={true} title={'Add Timer'} />
                <View style={styles.modalView}>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                        <Text style={styles.inputLabel}>Title</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => this.setState({title: text})}
                            value={this.state.title}
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginVertical: 5}}>

                        <View style={{flex: 1}}>
                            <Text style={styles.inputLabel}>Hours</Text>
                            <TextInput
                                style={styles.numberInput}
                                keyboardType='numeric'
                                onChangeText={this.handleHours}
                                value={this.state.hours.toString()}
                            />
                        </View>
                        <View style={{flex: 0.2}}></View>
                        <View  style={{flex: 1}}>
                            <Text style={styles.inputLabel}>Minutes</Text>
                            <TextInput
                                style={styles.numberInput}
                                keyboardType='numeric'
                                onChangeText={this.handleMinutes}
                                value={this.state.minutes.toString()}
                            />
                        </View>
                        <View style={{flex: 0.2}}></View>
                        <View  style={{flex: 1}}>
                            <Text style={styles.inputLabel}>Seconds</Text>
                            <TextInput
                                style={styles.numberInput}
                                keyboardType='numeric'
                                onChangeText={this.handleSeconds}
                                value={this.state.seconds.toString()}
                            />
                        </View>

                    </View>

                </View>
            </View>

        );
    }
}


export default AddTimer;
