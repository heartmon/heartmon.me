import React from 'react';
//Props
//bookmark;

export default class BookmarkItem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.bookmark.title}</h3>
      </div>
    )
  }
}
