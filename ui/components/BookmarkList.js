import React from 'react';
import { BookmarkItem } from './';

//Props
//bookmarks;

export default class BookmarkList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.bookmarks.map(function(bookmark) {
          return (
            <li key={bookmark.id}>
              <BookmarkItem bookmark={bookmark} />
            </li>
          );
        })}
      </ul>
    )
  }
}
