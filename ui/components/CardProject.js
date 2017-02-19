import React from 'react';
// import ReactDOMServer from 'react-dom/server'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import {defaultTags} from '~/utils'
import { StyleSheetServer, StyleSheet, css } from 'aphrodite'
import { colors, spacing, viewport } from '~/styles/settings'
import Radium from 'radium'

import { mediaQueries } from '~/utils/styles'


// Style objects specific for CardProject
const customContentStyle = {
    // width: '90%',
    // maxWidth: 'none'
};

class CardProject extends React.Component {
  state = {
    open: false,
  };


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];


    const tags = this.props.tags || [];

    return (
      <div>
      <style jsx>{`
        .card {
          width: 248px;
          height: 496px;
          border: 1px solid #e4e4e4;
          background: white;
          color: #222222;
          margin-bottom: 32px;
          margin-right: 24px;
        }
        .card .title {
          line-height: 24px;
          font-size: 20px;
          font-weight: bold;
        }
        .card .subtitle {
          color: black;
          font-size: 16px;
          line-height: 20px;
        }
        .card .year {
          color: grey;
          margin-bottom: 16px;
        }
        .card .logo {
          margin: auto;
          height: 248px;
          text-align: center;
          border-bottom: 1px solid #dddddd;
        }
        .card .logo img {
          margin: auto;
          object-fit: cover;
          height: 100%;
        }
        .card-section-text {
          padding: 32px 32px;
          padding-right: 24px;
        }
        .card-section-text p {
          color: #222222;
        }

        @media (max-width: 624px) {
          .card {
            height: auto;
          }
          .card .logo {

          }
        }
      `}</style>

        <div className="card" onTouchTap={this.handleOpen}>
          <div >
            <div className="logo">
              <img src={this.props.imgSrc} />
            </div>
            <div className="card-section-text">
              <div className="title">{this.props.title}</div>
              <div className="subtitle">{this.props.subtitle}</div>
              <div className="year">{this.props.year}</div>
              <p>{this.props.desc}</p>
            </div>
          </div>
        {/*  <div className="tech">
            {
              tags.map(function(t){
                const tag = defaultTags[t]
                if(typeof(t)!='undefined') {
                  return (
                    <Chip><Avatar src={tag.logoSrc} />{tag.name}</Chip>
                  )
                }
              })
            }
          </div>*/}
        </div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle}
        >
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}


export default Radium(CardProject);
