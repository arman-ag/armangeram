import React from 'react';
import { useSelector } from 'react-redux';
import InputSection from './InputSection';
import MessageReceive from './MessageReceive';
import MessageReply from './MessageReply';
import MessageSend from './MessageSend';
import { messagesType } from './types';

const ChatSection = () => {
  const messages: messagesType[] = useSelector((state: any) => state.message.message);
  const mounted: boolean = useSelector((state: any) => state.message.mounted);
  const choseType = <T extends messagesType, U extends number>(item: T, index: U) => {
    if (item.type === 'receive') {
      return <MessageReceive text={item.message} key={index} />;
    } else if (item.type === 'send') {
      return <MessageSend text={item.message} key={index} />;
    } else {
      return <MessageReply text={item} key={index} />;
    }
  };
  return (
    <div style={mounted ? { display: 'flex' } : { display: 'none' }} className="chat-section">
      <div className="chat-section-message">
        {messages.map((item, index) => choseType(item, index))}
      </div>
      <InputSection allMessages={messages} />
    </div>
  );
};

export default ChatSection;
