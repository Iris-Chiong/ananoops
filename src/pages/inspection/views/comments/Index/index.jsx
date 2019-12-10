import React, { Component, } from 'react';
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';

class Comments extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    const data = [
      {
        // actions: [<span key="comment-list-reply-to-0">回复</span>],
        author: '王一',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
          <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully and
                  efficiently.
          </p>
        ),
        datetime: (
          <Tooltip
            title={moment()
              .subtract(1, 'days')
              .format('YYYY-MM-DD HH:mm:ss')}
          >
            <span>
              {moment()
                .subtract(1, 'days')
                .fromNow()}
            </span>
          </Tooltip>
        ),
      },
      {
        //: [<span key="comment-list-reply-to-0">回复</span>],
        author: '王二',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
          <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully and
                  efficiently.
          </p>
        ),
        datetime: (
          <Tooltip
            title={moment()
              .subtract(2, 'days')
              .format('YYYY-MM-DD HH:mm:ss')}
          >
            <span>
              {moment()
                .subtract(2, 'days')
                .fromNow()}
            </span>
          </Tooltip>
        ),
      },
    ];
    return(
      <div>
        <List
          className="comment-list"
          header={`${data.length} replies`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <li>
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />,
      </div>
    );
  }
}
export default Comments;