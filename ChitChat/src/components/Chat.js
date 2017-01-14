import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

class Chat extends React.Component {
  state = {
    messages: [],
  };
  render() {
    return (
      <GiftedChat
      messages={this.state.messages}
      onSend={(message) => {
        // send message to backend
        Backend.sendMessage(message)
      }}
      user={{
        _id: 1,
      }}
      />
    );
  }


componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}


Chat.defaultProps = {
  name: 'friend',
};
Chat.propTypes = {
  name: React.PropTypes.string,
};

export default Chat;
