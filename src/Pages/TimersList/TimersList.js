import React from 'react';
import {Timer} from './../Timer';
import {Header} from '../../Component/Header';
import {View,Text,  ScrollView} from 'react-native';
import styles from './styles'
import {Button} from "react-native-elements";
class TimersList extends React.Component {

    constructor(props){
        super(props);
        const {timers,groupId} = props;

        this.state = {
            timers,
            groupId,
            showGroupList:true
        };

    }
        componentWillUnmount(): void {
                console.log("Timer list unmount")
        }

    UNSAFE_componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {

        this.setState({timers:nextProps.timers,groupId:nextProps.groupId})
    }

    addTimer = () => {
        this.props.navigation.navigate('AddTimer', {timers: this.state.timers,groupId:this.state.groupId})
    };



    handleEditTimer=(timer)=>{
        this.props.navigation.navigate('EditTimer', {timer: timer,timers:this.state.timers})
    }


    render() {
        let timersList=[...this.state.timers];
        if(this.state.groupId)
             timersList=this.state.timers.filter(timer=>timer.groupId===this.state.groupId);
        return (
            <View style={{flex: 1}}>
                <Header  onGoToHome={this.props.onShowGroups}
                         title={'Timers'}
                         subTitle={"( "+this.props.groupTitle+" )"}
                         onAddTimer={this.addTimer}/>
                <ScrollView style={{flex: 1}}>
                <View style={styles.mainWrapper}>
                    {!timersList.length && <View style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
                        <View >
                            <Text style={{flex:1,fontSize:16,marginBottom:10}}>No Timer in the group</Text>
                            <Button onPress={this.addTimer} title={'Add Timer '} />
                        </View>
                    </View>}

                    {timersList.map(timer =>
                        <Timer key={timer.id} updateTImer={this.props.onUpdateTimer} onHandleTimeDecrement={this.handleTimeDecrement} key={timer.id} onEdit={()=>this.handleEditTimer(timer)} onDelete={this.props.onDeleteTimer} data={timer}/>)}
                </View>
              </ScrollView>

            </View>

        );
    }
}

export default TimersList;
