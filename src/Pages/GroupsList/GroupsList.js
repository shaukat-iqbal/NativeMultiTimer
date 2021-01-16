import React from 'react';
import {Header} from '../../Component/Header';
import {View, Pressable, Text, ScrollView, Modal} from 'react-native';
import styles from './styles'
import {Icon,Button} from "react-native-elements";
import {Group} from "../Group";
import AsyncStorage from "@react-native-async-storage/async-storage";

class GroupsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            timers:[]
        };

    }


    componentWillUnmount(): void {
        AsyncStorage.setItem('@multiTimer_groupsList', JSON.stringify(this.state.groups))
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        const {timers,groups} = nextProps;
        this.setState({timers,groups})
    }




    goToHome = () => {
        this.props.navigation.navigate('StartScreen')
    }




    render() {
        let {timers} = this.state;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.show}
                onRequestClose={() => {

                }}
            >
                <View style={{flex: 1}}>
                    <Header hideAddBtn={true}
                            onGoToHome={this.goToHome}
                            title={'Groups'}
                            onAddTimer={this.props.onAddGroup}/>
                    <ScrollView style={{flex: 1}}>
                        <View style={styles.mainWrapper}>
                            {this.state.groups.map((group,i) =>
                                <Group key={i}
                                       totalTimers={timers.filter(t=>t.groupId===group.id).length}
                                       updateGroupTitle={(title)=>this.props.onEditGroup(group.id,title)}
                                       onDelete={()=>this.props.onDeleteGroup(group.id)}
                                       onPress={()=>this.props.onShowTimer(group)}
                                       group={group}/>
                            )}
                            {!this.state.groups.length && <View style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
                                <View >
                                    <Text style={{flex:1,fontSize:16,marginBottom:10}}>No Group in list</Text>
                                    <Button onPress={this.props.onAddGroup} title={'Add Group '} />
                                </View>
                            </View>}

                        </View>
                    </ScrollView>
                </View>

            </Modal>


        );
    }
}

export default GroupsList;
