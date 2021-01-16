import React, {Component} from 'react';
import {TimerList, GroupsList} from "../index";
import {View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timers:[],
            selectedGroup: {title: ''},
            groups: [],
            showGroups: true,
            groupId: null,
        }
    }
    async componentDidMount() {
        try {
            let groupsJson = await AsyncStorage.getItem('@multiTimer_groupsList')
            let timersJson = await AsyncStorage.getItem('@multiTimer_timersList')
            console.log(groupsJson,timersJson,'Timers groups.')
            if(timersJson)
            {
                timersJson=JSON.parse(timersJson);
                this.setState({timers:timersJson})

            }


            if(groupsJson)
            {
                groupsJson=JSON.parse(groupsJson);
                this.setState({groups:groupsJson})
            }


        } catch(e) {
            // error reading value
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        const {timers} = nextProps.route.params;
        if (timers)
            this.setState({timers})
    }

    componentWillUnmount(): void {
        AsyncStorage.setItem('@multiTimer_groupsList', JSON.stringify(this.state.groups))
        AsyncStorage.setItem('@multiTimer_timersList', JSON.stringify(this.state.timers))

    }

    showGroupList = () => {
        this.setState({showGroups: true})
    }
    hideGroupList = () => {
        this.setState({showGroups: false})
    }

    showTimersList = (group) => {

        this.setState({showGroups: false, groupId: group.id, selectedGroup: group})
    }

    handleUpdateTimer = (timer) => {
        let {timers} = this.state;
        let index = timers.findIndex(t => t.id === timer.id);
        if (index > -1) {
            timers[index] = {...timer}
        }
        this.setState({timer})
    }
    handleDeleteTimer = (timer) => {
        let {timers} = this.state;
        let index = timers.findIndex(t => t.id === timer.id);
        if (index > -1) {
            timers.splice(index, 1);
        }
        this.setState({timer})
    }
    handleAddGroup = () => {
        let id = parseInt(Math.random() * 100000);
        let newGroup = {id: id, title: 'Group ' + (this.state.groups.length + 1)};
        let groups = [...this.state.groups, newGroup];
        this.setState({groups})
    }

    updateGroupTitle = (id, title) => {
        let groups = [...this.state.groups];
        let group = groups.find(group => group.id === id);
        if (group)
            group.title = title;
        this.setState({groups})
    }
    handleDeleteGroup = (id) => {
        let groups = [...this.state.groups];
        let group = groups.findIndex(group => group.id === id);
        if (group>-1)
        {
            groups.splice(group,1)
            let timers=this.state.timers.filter(t=>t.groupId!==id);
            this.setState({groups,timers})
        }

    }

    render() {
        return (
            <View style={{flex: 1}}>
                {!this.state.showGroups &&
                <TimerList groupTitle={this.state.selectedGroup.title} onDeleteTimer={this.handleDeleteTimer}
                           onUpdateTimer={this.handleUpdateTimer} onShowGroups={this.showGroupList} {...this.props}
                           timers={this.state.timers} groupId={this.state.groupId}/>}
                <GroupsList {...this.props}
                            onAddGroup={this.handleAddGroup}
                            onEditGroup={this.updateGroupTitle}
                            onShowTimer={this.showTimersList}
                            onDeleteGroup={this.handleDeleteGroup}

                            groups={this.state.groups}
                            timers={this.state.timers}
                            show={this.state.showGroups}/>
            </View>
        );
    }
}

export default MainPage;
