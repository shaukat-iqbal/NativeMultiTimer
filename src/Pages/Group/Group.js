import React, {Component} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {Icon,Badge} from 'react-native-elements'

class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formMode: 'ADD',
            title: props.group.title
        };
    }

    handleEdit = () => {
        this.setState({formMode: 'EDIT'})
    }

    handleTitleChange = (val) => {
        this.setState({title: val})
    }

    handleUpdate = () => {

        if(!this.state.title.trim())
        {
            alert('Please Add title of group')
            return;
        }
        this.setState({formMode: 'ADD'})
        this.props.updateGroupTitle(this.state.title);
    }
    componentWillUnmount(): void {
    this.handleUpdate()
    }

    render() {

        return (
            <Pressable
                onPress={this.props.onPress}
            >
                <View style={{
                    backgroundColor: '#0F698D',
                    padding: 5,
                    marginBottom: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    flexDirection: 'row',
                    flexGrow: 1,
                    borderRadius: 2
                }}>
                    {this.state.formMode !== 'EDIT' && <View style={{flexDirection:'row'}}>
                        <Text
                        style={{fontSize: 16, color: 'white',marginRight:10, fontWeight: 'bold'}}>{this.state.title}
                        </Text>
                        <Badge value={this.props.totalTimers} status="primary" />
                    </View>
                    }
                    {this.state.formMode === 'EDIT' && <View style={{flexDirection:'row',flex:1}}><TextInput
                        style={{padding:0,flex:1,borderBottomWidth:1}}
                        onBlur={this.handleUpdate}
                        onChangeText={this.handleTitleChange}
                        value={this.state.title}
                    /></View>}
                    <View style={{flexDirection:'row'}}>
                    <Pressable
                        android_ripple={{color: 'cyan'}}
                        onPress={this.props.onDelete}
                        style={{marginRight:10}}

                    >
                        <Text><Icon
                            size={10}
                            name='trash'
                            raised
                            color={'red'}
                            type='font-awesome'
                            reverse={true}
                        /></Text>
                    </Pressable>
                    <Pressable
                        android_ripple={{color: 'cyan'}}
                        onPress={this.state.formMode !== 'EDIT' ? this.handleEdit : this.handleUpdate}

                    >
                        <Text><Icon
                            size={10}
                            name={this.state.formMode === 'EDIT' ? 'check' : 'pencil'}
                            raised
                            color={'#005A81'}
                            type='font-awesome'
                            reverse={true}
                        /></Text>
                    </Pressable>
                    </View>
                </View>
            </Pressable>
        );
    }
}


export default Group;
