import { initializePage } from '../utils';
import { BaseLayout } from '../ui/layouts'
import React from 'react'
import Chip from 'material-ui/Chip'
import { CardProject } from '../ui/components';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import {pinkA400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';

// import globalStyle from './styles.css';

class Home extends React.Component {
  componentDidMount() {
      jQuery(document).ready(function(){
        // grab an element
        const elementClassName = "navbar-white";
        const elementClassNameScroll = 'navbar-dark';

        const topNavElement = jQuery('.'+elementClassName);
        const scrollNavElement = jQuery('.'+elementClassNameScroll);
        let currentElement = topNavElement;

        // var myElement = jQuery('.'+elementClassName);//document.querySelector(elementName);
        var myElement = document.querySelector(".navbar-white");
        // console.log(myElement.get()[0]);
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement, {
          onNotTop  : function() {
            console.log('nottop');
            topNavElement.addClass('hidden');
            scrollNavElement.removeClass('hidden');
            currentElement = scrollNavElement;
          },
          onTop : function() {
            console.log('top');
            scrollNavElement.addClass('hidden');
            topNavElement.removeClass('hidden');
            currentElement = topNavElement;
          },
          onUnpin : function() {
            console.log('unpin');
            scrollNavElement.addClass('hidden');
            topNavElement.addClass('hidden');
          },
          onPin : function() {
            console.log('pin');
            currentElement.removeClass('hidden');
          },
        });
        // initialise
        headroom.init();
      });
  }

  render () {
    const styles = {
      projectsTabs: {
        inkBarStyle: {
        },
        tabItemContainerStyle: {
          backgroundColor: 'none',
          borderBottom: '3px solid #222949',
          paddingBottom: '4px'
        }
      },
      contacts: {
        textField: {
          color: 'white'
        },
        floatingLabelStyle: {
          color: '#F50057'
        },
        hintStyle: {
          color: '#222949'
        },
        underlineFocusStyle: {
          borderColor: pinkA400
        },
        underlineStyle: {
          borderColor: '#222949'
        }
      },
      large: {
        width: 120,
        height: 120,
        padding: 30,
      },
      largeIcon: {
         width: 60,
         height: 60,
       },
    };

   return (
       <BaseLayout>
       <style jsx>{`
          @media (min-width: 767px) {
            .content-section {
                padding-top: 100px;
                padding-bottom: 150px;
            }
          }
          .intro-bg {
            background-color #fafafa;
            background-image: url('static/main/doubleexposure.jpg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position-y: 3vh;
            height: 100%;
          }
          @media (min-width: 768px) {
            .intro {
                height: 100vh;
                padding: 0;
            }
          }
          @media (max-width: 768px) {
            .intro-bg {
              background: none;
            }
            .main-section {
              height: auto;
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            .intro-content {
              padding-left: 45%;
            }
          }
          .intro {
            padding-top: 32px;
            background-color: #fafafa;
          }
          .about-section {
            background: #191e34
          }
            .about-section .container-fluid {
              height: 100%;
            }
          .about-portrait {
            height: 100%;
            background-image: url(static/about/portrait.jpeg);
            background-position-y: 45%;
            background-position-x: 50px;
            background-size: cover;
            background-repeat: no-repeat;
            margin-right: -1rem;
          }
          .about-bg {
            height: 100%;
            background-color: #191e34;
            background-image: linear-gradient(to bottom, rgba(5, 9, 30, 0.7) 0%, rgba(5, 9, 30, 0.7) 100%), url(static/about/bg.jpeg);
            background-blend-mode: overlay;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .projects-section {
            background: #111524;
            height: auto;
          }
          .projects-bg {
            height: 100%;
          }
          .projects-content {
            padding-top: 128px;
            padding-bottom: 40px;
          }
            .projects-content > p {
              padding-right: 100px;
            }

          .projects-card-list-container {
            padding-top: 32px;
            display: flex;
            justify-content: center;
          }

          .hobbies-section {
            height: auto;
            padding-bottom: 156px;
          }

          .hobbies-content {
            padding-top: 128px;
            text-align: center;
          }

          .hobbies-grid  {
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
            margin: auto;
            background: #111111;
            color: white;
          }

          .hobbies-grid-item {
            max-width: 370px;
            height: 370px;
            width: 25%;
            overflow: hidden;
          }
            @media (max-width: 768px) {
              .hobbies-grid-item {
                width: 100%;
              }
            }

            @media (min-width: 767px) and (max-width: 992px) {
              .hobbies-grid-item {
                width: 50%;
              }
            }

          .hobbies-grid-item img {
            object-fit: cover;
          }

          .hobbies-grid-title {
            font-size: 18px;
            padding: 48px; 24px;
            padding-top: 64px;
            padding-bottom: 24px;
            font-weight: bold;
            letter-spacing: 2px;
          }

            .hobbies-grid-item p {
              color: white;
              padding: 0px 48px;
            }

          .contact-section {
            background: #191e34;
          }

          .contact-content {
            text-align: center;
            padding-top: 128px;
          }

            .contact-content .section-title {
              margin-bottom: 72px;
            }

          .contact-list {
            list-style: none;
            margin: 0px;
          }

          .contact-list-item {
            display: flex;
            font-weight: 400;
          }

            .contact-list-item .icon {
              font-size: 30px;
              text-align: center;
              width: 48px;
              height: 48px;
              margin-right: 16px;
            }

            .contact-list-item span {
              align-self: center;
            }

          .hline {
            width: 1px;
            background: #222949;
            height: 100%;
            position: absolute;
            right: 0px;
            top: 0px;
          }

          .contact-info {
            position: relative;
          }

          .contact-form {
            padding-left: 32px;
          }



        `}</style>
       <div className="body" id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
          <nav className=" navbar test navbar-white navbar-custom navbar-fixed-top font-title" role="navigation">
            <div className="navbar-header">
                <a className="hidden-xs navbar-brand page-scroll"  href="#page-top">
                  <span className="light">heartmon.me</span>
                </a>
            </div>

            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                      <a className="page-scroll" href="#about">About me</a>
                  </li>
                  <li  className="nav-item">
                      <a className="page-scroll" href="#projects">Projects</a>
                  </li>
                  <li  className="nav-item">
                      <a className="page-scroll" href="#interest">Hobbies</a>
                  </li>
                  <li  className="nav-item">
                      <a className="page-scroll" href="#contact">Contact</a>
                  </li>
                </ul>
            </div>
          </nav>

          <nav className="navbar test navbar-dark hidden navbar-custom navbar-fixed-top font-title" role="navigation">
            <div className="navbar-header">
                <a className="hidden-xs navbar-brand page-scroll"  href="#page-top">
                  <span className="light">heartmon.me</span>
                </a>
            </div>

            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                      <a className="page-scroll" href="#about">About me</a>
                  </li>
                  <li  className="nav-item">
                      <a className="page-scroll" href="#projects">Projects</a>
                  </li>
                  <li  className="nav-item">
                      <a className="page-scroll" href="#interest">Hobbies</a>
                  </li>
                  <li  className="nav-item">
                      <a className="page-scroll" href="#contact">Contact</a>
                  </li>
                </ul>
            </div>
          </nav>

          <header className="intro">
            <div className="intro-bg">
              <div className="intro-body">
              <div className="wrap container-fluid">
                <div className="row middle-md">
                    <div className="col-md-6 col-md-offset-6 col-sm-offset-5 intro-content">
                        <h1 className="font-title brand-heading"><span className="bold">HEART</span> KITTIPON</h1>
                        <p className="intro-text">Passionate full-stack developer</p>
                        <p className="intro-quote"></p>
                        <div className="more-button">
                          <IconButton
                            iconStyle={styles.largeIcon}
                            style={styles.large}
                            href="#about"
                            className="page-scroll"
                          >
                            <NavigationExpandMore color={pinkA400} />
                          </IconButton>
                        </div>
                        {/*<a href="#about" className="btn btn-circle page-scroll">
                            <i className="fa fa-angle-double-down animated"></i>
                        </a>*/}
                    </div>
                </div>
              </div>
              </div>
            </div>
          </header>

          <section id="about" className="about-section main-section">
            <div className="about-bg">
            <div className="wrap container-fluid">
              <div className="row">
                  <div className="col-md-6">
                    <div className="about-content">
                      <div className="section-title font-title">About me</div>
                      <p>
                      Passionate developer who understand users & design and loves to learn new things with fast learning skill.
                      </p>
                      <div className="section-subtitle white font-title">WHAT AM I CURRENTLY DOING?</div>
                      <p>
                      Now I am studying in the second year of the Master's degree in Interaction Design and Technologies at
                      Chalmers University of Technology, Sweden.
                      Also, I am learning in Udacity's Associate Android Developer Fast Track program.
                      </p>
                      <div className="section-subtitle white font-title">WHAT AM I INTERESTED?</div>
                      <p>
                      As now I am studying and will be graduated in Summer 2018, so I am looking for summer internship and/or the full-time position after graduated
                      in either code or design.
                      From my experiences, my most expert skillset is as a frontend developer.
                      I am interested in web development, mobile development, game development and user experience.
                      </p>

                    </div>
                  </div>
                  <div className="col-md-6 about-portrait-container">
                    <div className="about-portrait">
                    </div>
                  </div>
              </div>
            </div>
            </div>
          </section>


            <section id="projects" className="projects-section main-section dark">
              <div className="projects-bg">
                <div className="wrap container-fluid">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                      <div className="projects-content">
                        <div className="section-title white font-title">Projects</div>
                        <p>
                        Be a part of over 15 projects including development & design. Various types of applications were implemented.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-10 col-md-offset-1">
                    <Tabs className="projects-tabs" tabItemContainerStyle={styles.projectsTabs.tabItemContainerStyle} inkBarStyle={styles.projectsTabs.inkBarStyle}>
                      <Tab className="projects-tab" label="DESIGN & DEVELOP" >
                        <div className="row projects-card-list-container">

                        <CardProject
                          title="Ericsson package core portal"
                          subtitle=""
                          imgSrc="static/projects/cover-ericsson.jpg"
                          tags={['WEB', 'DESIGN']}
                          year="2017 (Currently develop)"
                          desc="Project at Ericsson as a part-time job"
                        >
                        <div className="project-dialog-content">
                          <div className="row">
                            <div className="col-md-12">
                              <div  className="project-intro">
                                <h4>About the project</h4>
                                <p>
                                  Briefly, the project is to design and implement the internal website for package core node displaying information, visualization, booking and administration.
                                  I work as an full-stack developer creating a backend api and integrating with frontend part.
                                </p>
                              </div>
                              <div className="tags">
                                <ul>
                                  <li><Chip>Javascript</Chip></li>
                                  <li><Chip>NodeJS</Chip></li>
                                  <li><Chip>Web development</Chip></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        </CardProject>
                        
                         <CardProject
                            title="Instamusic"
                            subtitle="Spotify devX Project"
                            imgSrc="static/projects/cover-instamusic.jpg"
                            tags={['WEB', 'DESIGN']}
                            year="2017"
                            desc="Project in Spotify devX event @ Stockholm 17-19 Nov 2017"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <h4>About the project</h4>
                                  <p>
                                    The idea of the event is to make use of Spotify API to create something innovative and fun.
                                    My project is called Instamusic - tag the music for your picture.
                                    Instead of posting only picture or music, we thought that it would be nice to express your mood of your picture
                                    with the special hashtag that can play the music by clicking on it!.
                                    The value of hashtag will be sent to Spotify API to select the songs for users.
                                  </p>
                                  <h4>What I contribute to and learn</h4>
                                  <p>
                                    I tried to lead and guide how to start and organize the code as we decided to go on with frontend part first and I was the main frontend developer
                                    in the team. We shared knowledge to each other as the aim of the event.
                                    As the result, apart from the product itself, I learned how to organize the work in order to create minimum viable product within a very short time;
                                    to develop product in an agile way by incrementally adding features. The product started with just only frontend part and after this part was done, we
                                    decided to implement backend part with sentiment analysis, but we didn't manage to finish. However, at least we had an workable product to present at the end.
                                  </p>
                                </div>
                                <div className="img">
                                  <img src="static/projects/content-instamusic1.jpg" />
                                  <div className="text-center">Example of the image post with special hashtag</div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Javascript</Chip></li>
                                    <li><Chip>ReactJS</Chip></li>
                                    <li><Chip>Web development</Chip></li>
                                    <li><Chip>Glitch</Chip></li>
                                    <li><Chip>Firebase</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>

                         <CardProject
                            title="Farmkampen"
                            subtitle="IxD Project"
                            imgSrc="static/projects/cover-ixdproject.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2017"
                            desc="Project in Interaction Design and Techologies"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <iframe src="https://player.vimeo.com/video/239357144" width="640" height="349" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                  <h4>About the project</h4>
                                  <p>
                                    It was the result of 'Project in Interaction Design' course. I and my group member developed an interactive system called Farmkampen.
                                    The theme of this project was Universeum () to design and develop the product with the aim of children's transformative experience and partipatory design that 
                                    will help the children learn about environment, rainforest, ocean, science, health or techlonogy in the long term.
                                    We decided to create 'Farmkampen' with critical design in mind. The product consists of tablet game and the one big screen to show the information.
                                    Briefly, the aim of the iPad game is to cut down the tree and plant the crops in order to produce the hamburgers as much as possible, 
                                    however we twisted at the end by letting the children seeing the big picture from the screen behind the tablet how much they contribute in destroying the rainforest and how many animals are let homeless.
                                    We intent to show the result of argiculture that affects the rainforest and wanted to teach the children about Tregedy of Common.
                                    <br/><br/>
                                    <a href="http://idxpo.se/current/farmkampen/" target="_blank">Link to information website</a>
                                  </p>
                                  <h4>What I contributed and learned</h4>
                                  <p>
                                    Apart from idea generation and writing report, my main part was to develop tablet game with Unity. Also, help a bit with the api development in NodeJS for receiving and updating data from the game.
                                    I learned a lot in the project, for example, to apply the knowledge and skill from the first year of study to the real project with real stakeholders.
                                    I also improved in teamwork and how to plan the work within time constraints.
                                  </p>
                                </div>
                                <div className="img">
                                  <img src="static/projects/content-ixdproject1.jpg" />
                                  <div className="text-center">The tablet game and the big screen at the exhibition day</div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>User Interface Design</Chip></li>
                                    <li><Chip>Unity</Chip></li>
                                    <li><Chip>Critical Design</Chip></li>
                                    <li><Chip>Web development</Chip></li>
                                    <li><Chip>NodeJS</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>

                          <CardProject
                            title="EVNT"
                            subtitle="Mobile Computing Project"
                            imgSrc="static/projects/cover-evnt.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2017"
                            desc="Android app. for increase and simplify the interaction between lecturer and attendees"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <h4>About the project</h4>
                                  <p>
                                    This was a group project in Mobile Computing course at Chalmers.
                                    The project was about design and develop a mobile application within the theme of activity-centered and co-located interaction within the library.
                                    Our idea was to increase the interaction between the lecturer and the attendees at library's events and lectures that could happen, for example, to follow up
                                    after the lecture was ended, to increase the opportunity of attendees who have questions to the lecturer.
                                    The result was an android application that two roles of users which are Lecturer and Attendees can interact with each other by chat and poll. 
                                    The example usage scenario was first Lecturer creates the room which will see the room id at the top right corner. Then any attendees 
                                    can join the room by entering the room id and click join. In the room together, everyone can chat and discuss about the lecture and 
                                    Lecturer can create poll for Attendees to answer on.
                                    <br/><br/>
                                    We also planned to add more functionalities of posting questions and uploading learning's materials in the room in the future version.
                                    <br/><br/>
                                    <a className="link" href="https://github.com/Kvist1/Evnt" target="_blank">Gitjub project</a>
                                  </p>
                                  <h4>What I contributed and learned</h4>
                                  <p>
                                    I worked as android developer to develop the app with my other two friends while the other two worked on design. Because we were all quite new with android development, we learned quite a lot
                                    by practically doing. We tried different ways of using ListView, RecyclerView and Fragment in order to achieve what we designed for. 
                                    I also learned how to use Firebase from my friend including real-time database and firebase datastore which was very easy to start with. 
                                    Moreover, I got an experience in applying the knowledge of design method and process in the real project (e.g. ideation - brainstorming, interview with the staff at library, visit the real place).
                                  </p>
                                </div>
                                <div className="img">
                                  <img src="static/projects/content-evnt1.jpg" />
                                  <div className="text-center">Example of screenshots</div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Android</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                    <li><Chip>Firebase</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>

                          <CardProject
                              title="UX Project"
                              subtitle="Farmcation"
                              imgSrc="static/projects/cover-farmcation.jpg"
                              tags={['DESIGN']}
                              year="2017"
                              desc="Individual project in Design for User Experience course"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <h4>About the project</h4>
                                    <p>
                                      This individual project was in Design for User Experience course; to come up with idea and design the digital product that invoke 
                                      one emotion of users and related with one of two themes - Critical Design and Spatial and Temporal design.
                                      My project was in the theme of Spatial and Temporal design invoking the playfulness emotion.
                                      The idea was location-based game like Pokemon Go. but doing a farm instead of catching Pokemon. Bascially, players will 
                                      go to the particular location and create their own farm. They will need to comeback to the same location again in hours or days in order to water, grow, havest 
                                      their plants. There will be a social event that make use of space and time to incorparate players to play and solve the quest together.
                                    </p>
                                    <h4>What I contributed and learned</h4>
                                    <p>
                                      I learned how difficult to come up with ideas individually compared to work in group. I got experience in design the game and how to 
                                      manage the scope of the project to suit with limited time and to incorperate related literatures in the whole design process.
                                    </p>
                                  </div>
                                  <div className="img">
                                    <img src="static/projects/content-farmcation1.jpg" />
                                    <div className="text-center">Mockup example</div>
                                  </div>
                                  <div className="img">
                                    <img src="static/projects/content-farmcation2.jpg" />
                                    <div className="text-center">Mockup example</div>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>User Experience Design</Chip></li>
                                      <li><Chip>User Interface Design</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            
                            <CardProject
                              title="Mappy"
                              subtitle="Game Project"
                              imgSrc="static/projects/cover-mappy.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2017"
                              desc="Re-creation of 90s arcade game - Mappy - using C++ and SDL2 library."
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ry232MaTN5Y" frameborder="0" allowfullscreen></iframe>
                                  </div>
                                  <div  className="project-intro">
                                    <p>
                                      Individual project for Game Engine Architecture course. Re-creting the 90s arcade game called Mappy using C++ and SDL2 library.
                                      The focus of the project is to create playable game with nice game architecture.
                                      I apply Update pattern, Observer pattern, De-coupling pattern and object pool to the implemenation of this game.
                                      For the graphic, I reuse the sprites found from the internet.
                                      <br/>  <br/>
                                      One of the challenge part for me is about collision detection and response especially with the tile map. What I did to solve that is drawing state diagram eleborately
                                      and think about what need to check in each entity state and implement from the bottom-up.
                                      <br/><br/>
                                      <a className="link" href="https://github.com/heartmon/MappySDL/" target="_blank">Github project</a>
                                    </p>
                                  </div>
                                  <div className="img">
                                    <img src="static/projects/content-mappy2.jpg" />
                                    <div className="text-center">Current code structure of the project</div>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>C++</Chip></li>
                                      <li><Chip>SDL2</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="heartmon.me"
                              subtitle="My portofio website"
                              imgSrc="static/projects/logo-heartmon.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2017"
                              desc=""
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      It is the time to express my profile so I create my own website.
                                      <br/><br/>
                                      For the design part, I designed using Sketch from the scratch motivated by the design from Pinterest.
                                      For the development part, because it is considered my hobby project so I try to learn and try new things.
                                      I have developed using, for example, <a className="link" href="https://github.com/zeit/next.js/" target="_blank">NextJS</a> as a
                                      framework for server-rendered React application.
                                      <br/><br/>
                                      However, there is quite many stuffs to improve which I will constantly update this website.
                                    </p>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Hobby project</Chip></li>
                                      <li><Chip>JavaScript</Chip></li>
                                      <li><Chip>NextJS</Chip></li>
                                      <li><Chip>ReactJS</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="Popular Movies"
                              subtitle="Udacity course's project"
                              imgSrc="static/projects/android-app-nologo.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2017"
                              desc="Application showing list of movies and the detail of each movie"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-movie.jpg" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      The project is from Udacity Associate Android Developer Fast Track course. Although the complexity of the application is quite easy.
                                      However, I tried to study more about Android Architecture and applied to the project implementation.
                                      I make use of MVP Architecture with Dagger 2, Retrofit, RxJava, Butter Knife in the project.
                                      <br />
                                      <a target="_blank" className="link" href="https://github.com/heartmon/PopularMovies">github.com/heartmon/PopularMovies</a>
                                    </p>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Study project</Chip></li>
                                      <li><Chip>Android</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="Kidsbazaar"
                              imgSrc="static/projects/cover-kidsbazaar.jpg"
                              tags={['FRONTEND', 'DESIGN']}
                              year="2017"
                              desc="Fundraising web for children"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div  className="my-work">
                                  <h4>About the project</h4>
                                  <p>
                                    This startup project is a website that aims for the school/group of children to help them with the fundraising to get the money for their activities.
                                    Briefly, 'responsible adults' will create the team, the 'kids' will join and they will sell the product to the 'supporters' resulting in earning the 
                                    money from every product they sold.
                                    <br/>
                                    The website is now launched. <a target="_blank" className="link" href="https://www.kidsbazaar.uk">https://www.kidsbazaar.uk</a>                                      
                                  </p>
                                  <h4>What I contributed and learn</h4>
                                  <p>I am a Frontend developer converting designs from designer into the html/css template and connecting frontend side to
                                    backend web services (using AngularJS as main frontend framework).
                                    I communicate remotely with designer and backend developer by Trello and Zeplin.</p>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Freelance project</Chip></li>
                                      <li><Chip>Javascript</Chip></li>
                                      <li><Chip>AngularJS</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="Settler of Catan"
                              subtitle="Interaction Design Project"
                              imgSrc="static/projects/cover-catan.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                              desc="Design popular paper-based board game into digital version"
                            >
                              <div className="project-dialog-content">
                                <div className="img">
                                  <img src="static/projects/content-catan.jpg" />
                                </div>
                                <div  className="project-intro">
                                  <p>
                                  A group project of Graphical Interface course. We had to design the user interface and think about
                                  the interaction from paper-based board game to digital version using both phone and tablet.
                                  The game is called the Settler of Catan
                                  </p>
                                </div>
                                <div  className="my-work">
                                  <h4 className="font-title text-uppercase">My work</h4>
                                  <p>
                                  I and my group did a lot of work related to design process, for example, brainstorming, explore ideas,
                                  sketching, paper prototyping and user testing.
                                  Most of practical work is create the user interface design for tablet. I chose Sketch as a main design tool for this.
                                  </p>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Design</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </CardProject>
                            <CardProject
                              title="Video presentation"
                              subtitle="Interaction Design Project"
                              imgSrc="static/projects/cover-video.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                              desc="Present our ideas in 1 minute video"
                            >
                            <div className="project-dialog-content">
                              <div className="img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/5gqOMWQprT4" frameborder="0" allowfullscreen></iframe>
                              </div>
                              <div  className="project-intro">
                                <p>
                                This video is related to the group project of the course named Interaction Design Methodology.
                                The project was about to develop and present ideas using learned design methods for chosen parts in the autonomous car
                                , which is going to be more users in the future.
                                For my group, the part of the car that we chose was Infortainment System.
                                </p>
                              </div>
                              <div  className="my-work">
                                <h4 className="font-title text-uppercase">My work</h4>
                                <p>
                                The reason that I chose this into my portofio is that mostly I took the responsibility for the video.
                                I did the hand-drawing, recording using iPhone and Hyperlapse application and editing using iMovie.
                                </p>
                              </div>
                              <div className="tags">
                                <ul>
                                  <li><Chip>Design</Chip></li>
                                </ul>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="Hexalite"
                              subtitle="Roadside Assistance"
                              imgSrc="static/projects/logo-hexalite.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2015-2016"
                              desc="System to support users and insurance agency when their car is broken down"
                            >
                              <div className="project-dialog-content">
                                <div className="img">
                                  <img src="static/projects/content-hexalite2.jpg" />
                                </div>
                                <div  className="project-intro">
                                  <p>
                                  The project is about creating a system to support one of insurance products.
                                  The main application flow is that system receives case from clients, then manually or automatically
                                  assigns drivers who are going to help them. Each particular case is tracked and recorded in the system for generating a report later.
                                  </p>
                                </div>
                                <div  className="my-work">
                                  <h4 className="font-title text-uppercase">My work</h4>
                                  <p>
                                  What I work are mainly designing and developing web application for providers of agency. The web application provides
                                  dashboard to show the number of cases (broken car) sent to the system and provides map application for moderator to manage each particular case.
                                  Provider will need to assign the truck to go help customer and track the status of each case.
                                  <br/>
                                  In addition, I had a chance to learn about JAVA Spring frameowrk - how the code is structured, dependency injection and some (I think) interesting libraries (e.g. Camel)
                                  <br/>
                                  Also, I have to develop a mobile-first web application for customer users for sending the car breakdown location.
                                  <br/><br/>
                                  The most challenge for this project is how to design the code architecture to promote modularity and reusability as there are the same projects but in different countries with slightly different in features.
                                  <br/>  <br/>
                                  Mobile-first web application: <a class="link" target="_blank" href="https://www.allianzyolda.com">www.allianzyolda.com</a>. This one is developed for Turkey.
                                  </p>
                                </div>
                                <div className="img">
                                  <img src="static/projects/content-hexalite.jpg" />
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Full-time project</Chip></li>
                                    <li><Chip>JavaScript</Chip></li>
                                    <li><Chip>AngularJS</Chip></li>
                                    <li><Chip>Ionic</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                    <li><Chip>Google Map API</Chip></li>
                                    <li><Chip>Gulp</Chip></li>
                                    <li><Chip>Webpack</Chip></li>
                                    <li><Chip>JAVA Spring framework</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </CardProject>
                            <CardProject
                              title="Folkrice"
                              subtitle="Startup for farmer"
                              imgSrc="static/projects/cover-folkrice.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2015"
                              desc="Help new generation farmers to distribute their products online"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="85%" src="static/projects/content-folkrice.jpg" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      The aim of folkrice is to help and improve the potential of farmers in Thailand using the recent technologies and platforms
                                      to make the distribution easier and more products can be sold as the main problem is farmers do not know about marketing and are forced to sell their products at low price by intermediate merchants.
                                      <br/>
                                      <a className="link" href="https://www.folkrice.com/" target="_blank">www.folkrice.com</a>
                                    </p>
                                  </div>
                                  <div  className="my-work">
                                    <h4 className="font-title text-uppercase">My work</h4>
                                    <p>
                                    I started wodking in the project at quite early stage. Therefore, what I did was proof of concept and to collect some data from farmers and are no logner used at the monment.
                                    <br/><br/>
                                    I created a web application for farmers to input their data and create their profile. The application connected with their
                                    facebook page and instagram so that when they upload new posts or pictures, those will appear to their profile in folkrice automatically.
                                    The profile also shows the story and manufacturure of particular farmer publicly to let customers know about their farm.
                                    <br/><br/>
                                    I created a web application called Map Shout as a prove of concept to see how location-based map chat system could work when farmers can chat and promote their product
                                    based on location and others (customers) would be seen where it was and the direction from their current position to the farmers places.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="85%" src="static/projects/content-folkrice2.jpg" />
                                  </div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Freelance project</Chip></li>
                                    <li><Chip>JavaScript</Chip></li>
                                    <li><Chip>MongoDB</Chip></li>
                                    <li><Chip>ExpreeJS</Chip></li>
                                    <li><Chip>AngularJS</Chip></li>
                                    <li><Chip>NodeJS</Chip></li>
                                    <li><Chip>SocketIO</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="SendmeTutor"
                              subtitle="Private tutor matching"
                              imgSrc="static/projects/cover-smt.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2015"
                              desc="Student and teacher will be easier to find each other on this website"
                            >
                            <div className="project-dialog-content">
                              <div className="img">
                                <img src="static/projects/content-smt.JPG" />
                              </div>
                              <div  className="project-intro">
                                <p>
                                In Thailand, students are very competitive. They have to study hard in order to get the university and program that they want.
                                Therefore, the idea of this project is to create a web application as a portal to map between student and teacher as a private tutor.
                                This can be individual or group of students.
                                The simple flow of this web is that students post what subject they want to learn and choose preferences (e.g. gender of teacher, where they are
                                comfortable to study - library or their home). Then registered teachers can search/filter the posts which can also be seen in the map.
                                Then there will be a mapping system that students can choose their prefered teacher.
                                <br/>
                                <a className="link" href="www.sendmetutor.com" target="_blank">www.sendmetutor.com</a>
                                </p>
                              </div>
                              <div  className="my-work">
                                <h4 className="font-title text-uppercase">My work</h4>
                                <p>
                                I was responsible as a full-stack developer for developing the whole web application in both backend and frontend sides.
                                The design was originally from the customer, so I just convert the static design into html/css templates.
                                Backend was mainly using Ruby on Rails. The framework for frontend side in this project is AngularJS.
                                </p>
                              </div>
                              <div className="tags">
                                <ul>
                                  <li><Chip>Freelance project</Chip></li>
                                  <li><Chip>JavaScript</Chip></li>
                                  <li><Chip>Ruby on Rails</Chip></li>
                                  <li><Chip>AngularJS</Chip></li>
                                </ul>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="SB ISMS"
                              subtitle="Management system"
                              imgSrc="static/projects/cover-sb.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2014"
                              desc="Ssystem that makes the communication between customer, sales and interior easier."
                            >
                            <div className="project-dialog-content">
                              <div className="img">
                                <img src="static/projects/content-sb.jpg" />
                              </div>
                              <div  className="project-intro">
                                <p>
                                SB is a big furniture company in Thailand.
                                The project as a whole is the system that makes the communication between customer, sales and interior easier.
                                Also, to help people and time management easier.
                                Customer can reserve time via application before they are going to furniture store.
                                Sales can use their application to keep track to what products customer choose and link with interior to work with simultaneously.
                                </p>
                                <p>
                                  <a className="link" href="https://appsto.re/th/vADx4.i" target="_blank">SB ISMS app on App store</a>
                                </p>
                              </div>
                              <div  className="my-work">
                                <h4 className="font-title text-uppercase">My work</h4>
                                <p>
                                I was responsible as main developer. I involved with many parts of the process and the system:
                                <ul>
                                  <li>Database design</li>
                                  <li>API Design</li>
                                  <li>iPad application development</li>
                                  <li>Notification system with Amazon SNS using NodeJS and real-time messaging using Socket.io</li>
                                </ul>
                                </p>
                              </div>
                              <div className="tags">
                                <ul>
                                  <li><Chip>Full-time project</Chip></li>
                                  <li><Chip>JavaScript</Chip></li>
                                  <li><Chip>PHP</Chip></li>
                                  <li><Chip>Code igniter</Chip></li>
                                  <li><Chip>iOS</Chip></li>
                                  <li><Chip>KnockoutJS</Chip></li>
                                  <li><Chip>NodeJS</Chip></li>
                                </ul>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="ArmyMax"
                              subtitle="Chat application"
                              imgSrc="static/projects/cover-armymax.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2014"
                              desc="An internal-used application for group communication using WebRTC"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="85%" src="static/projects/content-army.jpg" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      An internal-used application for group communication. The features are including create chat room, chat system,
                                      invite people, video/audio call and screen sharing.

                                    </p>
                                  </div>
                                  <div  className="my-work">
                                    <h4 className="font-title text-uppercase">My work</h4>
                                    <p>
                                    I was responsible for designing and implementing this web application that will be injected into an Android application by using Cross Walk.
                                    Main technology stack is WebRTC library used for enable peer-to-peer communication. Also, socketio and websocket are used for
                                    providing seamlessly real-time communication handling.
                                    <br/><br/>
                                    It also was a challenging project because it was my new experience on WebRTC and peer-to-peer communication.
                                    </p>
                                  </div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Freelance project</Chip></li>
                                    <li><Chip>JavaScript</Chip></li>
                                    <li><Chip>WebRTC</Chip></li>
                                    <li><Chip>Socket.io</Chip></li>
                                    <li><Chip>Redis</Chip></li>
                                    <li><Chip>Parse</Chip></li>
                                    <li><Chip>NodeJS</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="VdoMax"
                              subtitle="Live social network"
                              imgSrc="static/projects/cover-vdomax.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2013"
                              desc="Social network emphasized on live-streaming"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="45%" src="static/projects/cover-vdomax.jpg" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      The project is a live-streaming social network. At that time live-streaming was not mainstream and popular. That was why
                                      the owner of this project wanted to create this. The idea was quite similar to live-streaming and subscription nowadays.
                                      Viewers can subscribe, vote or give a gift to live-streamer such as game caster or DJ.
                                      <br/>
                                    </p>
                                  </div>
                                  <div  className="my-work">
                                    <h4 className="font-title text-uppercase">My work</h4>
                                    <p>
                                    My main work as a developer was to implement chat component for the application. It was quite challenge for me as it was my first time
                                    of NodeJS and Websocket concept, but it was very valuable experience. I also learned a lot in how to make use of open-source library/code or
                                    bolierplate code so that you do not have to reinvent the wheel.
                                    <br />
                                    <br />
                                    In addition, I also was responsible for designing and implementing an admin panel for administrator to track and see
                                    the statistical data of the transaction in the application (e.g. how much they earn from top-up money this week).

                                    <br />
                                      <br />
                                    <div className="img">
                                      <img width="80%" src="static/projects/content-vdomax1.jpg" />
                                    </div>
                                    Lastly, I also had a chance to design a new version of the user interface although it was not used.
                                    <br />
                                      <br />
                                    <div className="img">
                                      <img width="80%" src="static/projects/content-vdomax2.jpg" />
                                    </div>
                                    </p>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Freelance project</Chip></li>
                                      <li><Chip>PHP</Chip></li>
                                      <li><Chip>JavaScript</Chip></li>
                                      <li><Chip>Design</Chip></li>
                                      <li><Chip>NodeJS</Chip></li>
                                      <li><Chip>Socket.io</Chip></li>
                                      <li><Chip>Redis</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="Za-shi"
                              subtitle="Japanese on-demand"
                              imgSrc="static/projects/cover-zashi.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2012"
                              desc="Are you tired to go to school? You can learn Japanese at home anytime you want"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-zashi.jpg" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                    The project is about creating website and application for my brother Japanese school.
                                    The applications are mainly about e-learning. Students can learn the course that they register anywhere and anytime via the applications.
                                    Also, they can post the questions to teachers and do some exercise.
                                    </p>
                                    <p>
                                    <br/>
                                    <a className="link" href="https://appsto.re/th/qkTQQ.i" target="_blank">Sensation app on App store</a>
                                    </p>
                                  </div>
                                  <div  className="my-work">
                                    <h4 className="font-title text-uppercase">My work</h4>
                                    <p>
                                    My work was responsible mostly for designing iPhone, iPad and web application and cooperated with the developer.
                                    </p>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="img">
                                      <img width="80%" src="static/projects/content-zashi2.jpg" />
                                    </div>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Freelance project</Chip></li>
                                      <li><Chip>Design</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="Department of Highways, TH"
                              subtitle=""
                              imgSrc="static/projects/cover-exat.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2012 / 2014"
                              desc="Information visualisation of roads' conditions"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="100%" src="static/projects/cover-exat.png" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      The project is GIS application for monitoring the conditions of the road (for example, roughness, rutting, texture).
                                      This application is kind of interactive information visualization application.
                                      Users can filter and choose what types of data they want to see in which roads and distance.
                                      The information then is displayed in the map, graph, table and images that are connected together correspondingly.
                                      Users can interact with the data by selecting or highlighting, zoom-in and zoomout (using slider) or export to PDF.
                                      This is also one of my very first freelance projects during my Bachelor degree.
                                      The project started in 2012 and added some data improvement and management in 2014.
                                      <br/>
                                      <a className="link" href="http://trec.in.th/motorway/" target="_blank">http://trec.in.th/motorway/</a>

                                    </p>
                                  </div>
                                  <div  className="my-work">
                                    <h4 className="font-title text-uppercase">My work</h4>
                                    <p>
                                    My work was responsible for the whole web application from user interface design, front-end implementation and backend webservice.

                                    The main technologies used are PHP and Javascript(and jQuery) at that time.
                                    Use open
                                    Mainly, use Javascript and jQuery at that time
                                    Create PHP script for data import from CSV files to update the data by administrator.

                                    except the gathering of data.

                                    </p>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="img">
                                      <img src="static/projects/content-exat2.png" />
                                    </div>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Freelance project</Chip></li>
                                      <li><Chip>PHP</Chip></li>
                                      <li><Chip>JavaScript</Chip></li>
                                      <li><Chip>OpenLayer</Chip></li>
                                      <li><Chip>Flot.js</Chip></li>
                                      <li><Chip>PostgreSQL</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="Lucky Dummy"
                              subtitle="Startup Project"
                              imgSrc="static/projects/cover-dummy.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              desc="Multiplayer dummy card game"
                              year="2014"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-dummy.png" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      This project was the first startup project. The project happened during I worked as full-time job after I was graduated.
                                      I remembered the feeling when we first released the game on Facebook and excitedly waited for invited users to test our games. It was funny that it had a lot of bugs and of course resulting in bad impression.
                                      Although we did not totally go that far before we stopped doing this, but I learnt a lot from this; planning, teamwork, dedication, passion and how exciting it was when your game is going to public.
                                      I think dedication and motiviation is very important in order to keep the project continue and succeed.
                                      This project was also the starting point to my iOS developer skill as according to the plan, I would have to implement an iOS version of the game.
                                    </p>
                                  </div>
                                  <div  className="my-work">
                                    <h4 className="font-title text-uppercase">My work</h4>
                                    <p>
                                    My work at that time was to design the user interface of the game (except the character design, we hired other to draw it). I designed buttons, icons, forms and organize all of them to get these interfaces.
                                    I also one of two developers to implement Flash version of the game (using ActionScript 3 at that time) and released the game on Facebook.
                                    In addition, I was responsible to implement iOS application connecting to Java server and used websocket to enable real-time communication for multiplayer.
                                    Unfortunately, what I did for iOS application was just a prove of concept, not the whole completed game.
                                    </p>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="img">
                                      <img width="80%" src="static/projects/content-dummy2.png" />
                                    </div>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Freetime project</Chip></li>
                                      <li><Chip>iOS</Chip></li>
                                      <li><Chip>Design</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="OISHI Delivery"
                              subtitle="Online food ordering"
                              imgSrc="static/projects/cover-oishi.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2011"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-oishi.jpg" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      The project is to design and develop mobile and tablet application to provide users more channels to order the food (other than via telephone).
                                      There consisted of 3 parts which are mobile application, web for admin to manage data and webservice.
                                      This project was one of very first projects that I started doing other than projects from studying.
                                    </p>
                                  </div>
                                  <div  className="my-work">
                                    <h4 className="font-title text-uppercase">My work</h4>
                                    <p>
                                    My work of this project was to design the user interface for the application, implemented website for administrator and implemented webservice for mobile application.
                                    </p>
                                  </div>
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-oishi2.jpg" />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Freelance project</Chip></li>
                                      <li><Chip>PHP</Chip></li>
                                      <li><Chip>Joomla</Chip></li>
                                      <li><Chip>Design</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                            <CardProject
                              title="The Adventure of the Magician"
                              subtitle="XNA Game Project"
                              imgSrc="static/projects/cover-adv.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2011"
                              desc="A fun and dedicated project of making my own game"
                            >
                            <div className="project-dialog-content">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="img">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JAoT0BYHKX0" frameborder="0" allowfullscreen></iframe>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div  className="project-intro">
                                    <p>
                                      This is the video of gameplay of my game called 'The Adventure of the Magician'. It was a project when I was a third
                                      year student of my Bachelor degree. The project was to develop game using Microsoft XNA library (C#). It was an individual project
                                      so I did all every parts of the project by my own (including character drawing). The overall game was inspired by Ragnarok Battle Online.
                                    </p>
                                  </div>
                                  <div className="tags">
                                    <ul>
                                      <li><Chip>Study project</Chip></li>
                                      <li><Chip>XNA</Chip></li>
                                      <li><Chip>C#</Chip></li>
                                      <li><Chip>Design</Chip></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </CardProject>
                        </div>
                      </Tab>
                      {/* <Tab className="projects-tab" label="DESIGN" >
                        <div className="row projects-card-list-container">
                          <CardProject
                            title="heartmon.me"
                            subtitle="My portofio website"
                            imgSrc="static/projects/logo-heartmon.png"
                            tags={['ANDROID', 'DESIGN']}
                            year="2017 (Currently develop)"
                            desc=""
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    It is the time to express my profile so I create my own website.
                                    <br/><br/>
                                    For the design part, I designed using Sketch from the scratch motivated by the design from Pinterest.
                                    For the development part, because it is considered my hobby project so I try to learn and try new things.
                                    I have developed using, for example, <a className="link" href="https://github.com/zeit/next.js/" target="_blank">NextJS</a> as a
                                    framework for server-rendered React application.
                                    <br/><br/>
                                    However, there is quite many stuffs to improve which I will constantly update this website.
                                  </p>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Hobby project</Chip></li>
                                    <li><Chip>JavaScript</Chip></li>
                                    <li><Chip>NextJS</Chip></li>
                                    <li><Chip>ReactJS</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="Settler of Catan"
                            subtitle="Interaction Design Project"
                            imgSrc="static/projects/cover-catan.png"
                            tags={['ANDROID', 'DESIGN']}
                            year="2016"
                            desc="Design popular paper-based board game into digital version"
                          >
                            <div className="project-dialog-content">
                              <div className="img">
                                <img src="static/projects/content-catan.jpg" />
                              </div>
                              <div  className="project-intro">
                                <p>
                                A group project of Graphical Interface course. We had to design the user interface and think about
                                the interaction from paper-based board game to digital version using both phone and tablet.
                                The game is called the Settler of Catan
                                </p>
                              </div>
                              <div  className="my-work">
                                <h4 className="font-title text-uppercase">My work</h4>
                                <p>
                                I and my group did a lot of work related to design process, for example, brainstorming, explore ideas,
                                sketching, paper prototyping and user testing.
                                Most of practical work is create the user interface design for tablet. I chose Sketch as a main design tool for this.
                                </p>
                              </div>
                              <div className="tags">
                                <ul>
                                  <li><Chip>Design</Chip></li>
                                </ul>
                              </div>
                            </div>
                          </CardProject>
                          <CardProject
                            title="Video presentation"
                            subtitle="Interaction Design Project"
                            imgSrc="static/projects/cover-video.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2016"
                            desc="Present our ideas in 1 minute video"
                          >
                          <div className="project-dialog-content">
                            <div className="img">
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/5gqOMWQprT4" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div  className="project-intro">
                              <p>
                              This video is related to the group project of the course named Interaction Design Methodology.
                              The project was about to develop and present ideas using learned design methods for chosen parts in the autonomous car
                              , which is going to be more users in the future.
                              For my group, the part of the car that we chose was Infortainment System.
                              </p>
                            </div>
                            <div  className="my-work">
                              <h4 className="font-title text-uppercase">My work</h4>
                              <p>
                              The reason that I chose this into my portofio is that mostly I took the responsibility for the video.
                              I did the hand-drawing, recording using iPhone and Hyperlapse application and editing using iMovie.
                              </p>
                            </div>
                            <div className="tags">
                              <ul>
                                <li><Chip>Design</Chip></li>
                              </ul>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="Hexalite"
                            subtitle="Roadside Assistance"
                            imgSrc="static/projects/logo-hexalite.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2015-2016"
                            desc="System to support users and insurance agency when their car is broken down"
                          >
                            <div className="project-dialog-content">
                              <div className="img">
                                <img src="static/projects/content-hexalite2.jpg" />
                              </div>
                              <div  className="project-intro">
                                <p>
                                The project is about creating a system to support one of insurance products.
                                The main application flow is that system receives case from clients, then manually or automatically
                                assigns drivers who are going to help them. Each particular case is tracked and recorded in the system for generating a report later.
                                </p>
                              </div>
                              <div  className="my-work">
                                <h4 className="font-title text-uppercase">My work</h4>
                                <p>
                                What I work are mainly designing and developing web application for providers of agency. The web application provides
                                dashboard to show the number of cases (broken car) sent to the system and provides map application for moderator to manage each particular case.
                                Provider will need to assign the truck to go help customer and track the status of each case.
                                <br/>
                                In addition, I had a chance to learn about JAVA Spring frameowrk - how the code is structured, dependency injection and some (I think) interesting libraries (e.g. Camel)
                                <br/>
                                Also, I have to develop a mobile-first web application for customer users for sending the car breakdown location.
                                <br/><br/>
                                The most challenge for this project is how to design the code architecture to promote modularity and reusability as there are the same projects but in different countries with slightly different in features.
                                <br/>  <br/>
                                Mobile-first web application: <a class="link" target="_blank" href="https://www.allianzyolda.com">www.allianzyolda.com</a>. This one is developed for Turkey.
                                </p>
                              </div>
                              <div className="img">
                                <img src="static/projects/content-hexalite.jpg" />
                              </div>
                              <div className="tags">
                                <ul>
                                  <li><Chip>Full-time project</Chip></li>
                                  <li><Chip>JavaScript</Chip></li>
                                  <li><Chip>AngularJS</Chip></li>
                                  <li><Chip>Ionic</Chip></li>
                                  <li><Chip>Design</Chip></li>
                                  <li><Chip>Google Map API</Chip></li>
                                  <li><Chip>Gulp</Chip></li>
                                  <li><Chip>Webpack</Chip></li>
                                  <li><Chip>JAVA Spring framework</Chip></li>
                                </ul>
                              </div>
                            </div>
                          </CardProject>
                          <CardProject
                            title="VdoMax"
                            subtitle="Live social network"
                            imgSrc="static/projects/cover-vdomax.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2013"
                            desc="Social network emphasized on live-streaming"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="img">
                                  <img width="45%" src="static/projects/cover-vdomax.jpg" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    The project is a live-streaming social network. At that time live-streaming was not mainstream and popular. That was why
                                    the owner of this project wanted to create this. The idea was quite similar to live-streaming and subscription nowadays.
                                    Viewers can subscribe, vote or give a gift to live-streamer such as game caster or DJ.
                                    <br/>
                                  </p>
                                </div>
                                <div  className="my-work">
                                  <h4 className="font-title text-uppercase">My work</h4>
                                  <p>
                                  My main work as a developer was to implement chat component for the application. It was quite challenge for me as it was my first time
                                  of NodeJS and Websocket concept, but it was very valuable experience. I also learned a lot in how to make use of open-source library/code or
                                  bolierplate code so that you do not have to reinvent the wheel.
                                  <br />
                                  <br />
                                  In addition, I also was responsible for designing and implementing an admin panel for administrator to track and see
                                  the statistical data of the transaction in the application (e.g. how much they earn from top-up money this week).

                                  <br />
                                    <br />
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-vdomax1.jpg" />
                                  </div>
                                  Lastly, I also had a chance to design a new version of the user interface although it was not used.
                                  <br />
                                    <br />
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-vdomax2.jpg" />
                                  </div>
                                  </p>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Freelance project</Chip></li>
                                    <li><Chip>PHP</Chip></li>
                                    <li><Chip>JavaScript</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                    <li><Chip>NodeJS</Chip></li>
                                    <li><Chip>Socket.io</Chip></li>
                                    <li><Chip>Redis</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="Za-shi"
                            subtitle="Japanese on-demand"
                            imgSrc="static/projects/cover-zashi.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2012"
                            desc="Are you tired to go to school? You can learn Japanese at home anytime you want"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="img">
                                  <img width="80%" src="static/projects/content-zashi.jpg" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                  The project is about creating website and application for my brother Japanese school.
                                  The applications are mainly about e-learning. Students can learn the course that they register anywhere and anytime via the applications.
                                  Also, they can post the questions to teachers and do some exercise.
                                  </p>
                                  <p>
                                  <br/>
                                  <a className="link" href="https://appsto.re/th/qkTQQ.i" target="_blank">Sensation app on App store</a>
                                  </p>
                                </div>
                                <div  className="my-work">
                                  <h4 className="font-title text-uppercase">My work</h4>
                                  <p>
                                  My work was responsible mostly for designing iPhone, iPad and web application and cooperated with the developer.
                                  </p>
                                </div>
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-zashi2.jpg" />
                                  </div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Freelance project</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="Department of Highways, TH"
                            subtitle=""
                            imgSrc="static/projects/cover-exat.png"
                            tags={['ANDROID', 'DESIGN']}
                            year="2012 / 2014"
                            desc="Information visualisation of roads' conditions"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="img">
                                  <img width="100%" src="static/projects/cover-exat.png" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    The project is GIS application for monitoring the conditions of the road (for example, roughness, rutting, texture).
                                    This application is kind of interactive information visualization application.
                                    Users can filter and choose what types of data they want to see in which roads and distance.
                                    The information then is displayed in the map, graph, table and images that are connected together correspondingly.
                                    Users can interact with the data by selecting or highlighting, zoom-in and zoomout (using slider) or export to PDF.
                                    This is also one of my very first freelance projects during my Bachelor degree.
                                    The project started in 2012 and added some data improvement and management in 2014.
                                    <br/>
                                    <a className="link" href="http://trec.in.th/motorway/" target="_blank">http://trec.in.th/motorway/</a>

                                  </p>
                                </div>
                                <div  className="my-work">
                                  <h4 className="font-title text-uppercase">My work</h4>
                                  <p>
                                  My work was responsible for the whole web application from user interface design, front-end implementation and backend webservice.

                                  The main technologies used are PHP and Javascript(and jQuery) at that time.
                                  Use open
                                  Mainly, use Javascript and jQuery at that time
                                  Create PHP script for data import from CSV files to update the data by administrator.

                                  except the gathering of data.

                                  </p>
                                </div>
                                <div className="col-md-12">
                                  <div className="img">
                                    <img src="static/projects/content-exat2.png" />
                                  </div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Freelance project</Chip></li>
                                    <li><Chip>PHP</Chip></li>
                                    <li><Chip>JavaScript</Chip></li>
                                    <li><Chip>OpenLayer</Chip></li>
                                    <li><Chip>Flot.js</Chip></li>
                                    <li><Chip>PostgreSQL</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="Lucky Dummy"
                            subtitle="Startup Project"
                            imgSrc="static/projects/cover-dummy.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            desc="Multiplayer dummy card game"
                            year="2014"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="img">
                                  <img width="80%" src="static/projects/content-dummy.png" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    This project was the first startup project. The project happened during I worked as full-time job after I was graduated.
                                    I remembered the feeling when we first released the game in facebook and excitedly waited for invited users to test our games. It was funny that it had a lot of bugs and of course resulting in bad impression.
                                    Although we did not totally go that far before we stopped doing this, but I learnt a lot from this; planning, teamwork, dedication, passion and how exciting it was when your game is going to public.
                                    I think dedication and motiviation is very important in order to keep the project continue and succeed.
                                    This project was also the starting point to my iOS developer skill as according to the plan, I would have to implement an iOS version of the game.
                                  </p>
                                </div>
                                <div  className="my-work">
                                  <h4 className="font-title text-uppercase">My work</h4>
                                  <p>
                                  My work at that time was to design the user interface of the game (except the character design, we hired other to draw it). I designed buttons, icons, forms and organize all of them to get these interfaces.
                                  I also one of two developers to implement Flash version of the game (using ActionScript 3 at that time) and released the game on Facebook.
                                  In addition, I was responsible to implement iOS application connecting to Java server and used websocket to enable real-time communication for multiplayer.
                                  Unfortunately, what I did for iOS application was just a prove of concept, not the whole completed game.
                                  </p>
                                </div>
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-dummy2.png" />
                                  </div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Freetime project</Chip></li>
                                    <li><Chip>iOS</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="OISHI Delivery"
                            subtitle="Online food ordering"
                            imgSrc="static/projects/cover-oishi.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2011"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="img">
                                  <img width="80%" src="static/projects/content-oishi.jpg" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    The project is to design and develop mobile and tablet application to provide users more channels to order the food (other than via telephone).
                                    There consisted of 3 parts which are mobile application, web for admin to manage data and webservice.
                                    This project was one of very first projects that I started doing other than projects from studying.
                                  </p>
                                </div>
                                <div  className="my-work">
                                  <h4 className="font-title text-uppercase">My work</h4>
                                  <p>
                                  My work of this project was to design the user interface for the application, implemented website for administrator and implemented webservice for mobile application.
                                  </p>
                                </div>
                                <div className="img">
                                  <img width="80%" src="static/projects/content-oishi2.jpg" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Freelance project</Chip></li>
                                    <li><Chip>PHP</Chip></li>
                                    <li><Chip>Joomla</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="The Adventure of the Magician"
                            subtitle="XNA Game Project"
                            imgSrc="static/projects/cover-adv.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2011"
                            desc="A fun and dedicated project of making my own game"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="img">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/JAoT0BYHKX0" frameborder="0" allowfullscreen></iframe>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    This is the video of gameplay of my game called 'The Adventure of the Magician'. It was a project when I was a third
                                    year student of my Bachelor degree. The project was to develop game using Microsoft XNA library (C#). It was an individual project
                                    so I did all every parts of the project by my own (including character drawing). The overall game was inspired by Ragnarok Battle Online.
                                  </p>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Study project</Chip></li>
                                    <li><Chip>XNA</Chip></li>
                                    <li><Chip>C#</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                        </div>
                      </Tab> */}

                      {/* <Tab className="projects-tab" label="GAME">
                        <div className="row projects-card-list-container">
                          <CardProject
                            title="Mappy"
                            subtitle="Game Project"
                            imgSrc="static/projects/cover-mappy.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2017 (Currently develop)"
                            desc="Re-creation of 90s arcade game - Mappy - using C++ and SDL2 library."
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    Individual project for Game Engine Architecture course. Re-creting the 90s arcade game called Mappy using C++ and SDL2 library.
                                    The focus of the project is to create playable game with nice game architecture.
                                    I apply Update pattern, Observer pattern and De-coupling pattern to the implemenation of this game.
                                    For the graphic, I reuse the sprites found from the internet.
                                    <br/>  <br/>
                                    One of the challenge part for me is about collision detection and response especially with the tile map. What I did to solve that is drawing state diagram eleborately
                                    and think about what need to check in each entity state and implement from the bottom-up.
                                    <br/>
                                    I also plan to try applying Box2D library if I have time before the deadline of the project.
                                    <br/><br/>
                                    The project is now in development process. More elaborated code will be updated.
                                    <br/>
                                    <a className="link" href="https://github.com/heartmon/MappySDL/" target="_blank">Gitjub project</a>
                                  </p>
                                </div>
                                <div className="img">
                                  <img src="static/projects/content-mappy2.jpg" />
                                  <div className="text-center">Current code structure of the project</div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>C++</Chip></li>
                                    <li><Chip>SDL2</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="Settler of Catan"
                            subtitle="Interaction Design Project"
                            imgSrc="static/projects/cover-catan.png"
                            tags={['ANDROID', 'DESIGN']}
                            year="2016"
                            desc="Design popular paper-based board game into digital version"
                          >
                            <div className="project-dialog-content">
                              <div className="img">
                                <img src="static/projects/content-catan.jpg" />
                              </div>
                              <div  className="project-intro">
                                <p>
                                A group project of Graphical Interface course. We had to design the user interface and think about
                                the interaction from paper-based board game to digital version using both phone and tablet.
                                The game is called the Settler of Catan
                                </p>
                              </div>
                              <div  className="my-work">
                                <h4 className="font-title text-uppercase">My work</h4>
                                <p>
                                I and my group did a lot of work related to design process, for example, brainstorming, explore ideas,
                                sketching, paper prototyping and user testing.
                                Most of practical work is create the user interface design for tablet. I chose Sketch as a main design tool for this.
                                </p>
                              </div>
                              <div className="tags">
                                <ul>
                                  <li><Chip>Design</Chip></li>
                                </ul>
                              </div>
                            </div>
                          </CardProject>
                          <CardProject
                            title="Lucky Dummy"
                            subtitle="Startup Project"
                            imgSrc="static/projects/cover-dummy.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            desc="Multiplayer dummy card game"
                            year="2014"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="img">
                                  <img width="80%" src="static/projects/content-dummy.png" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    This project was the first startup project. The project happened during I worked as full-time job after I was graduated.
                                    I remembered the feeling when we first released the game in facebook and excitedly waited for invited users to test our games. It was funny that it had a lot of bugs and of course resulting in bad impression.
                                    Although we did not totally go that far before we stopped doing this, but I learnt a lot from this; planning, teamwork, dedication, passion and how exciting it was when your game is going to public.
                                    I think dedication and motiviation is very important in order to keep the project continue and succeed.
                                    This project was also the starting point to my iOS developer skill as according to the plan, I would have to implement an iOS version of the game.
                                  </p>
                                </div>
                                <div  className="my-work">
                                  <h4 className="font-title text-uppercase">My work</h4>
                                  <p>
                                  My work at that time was to design the user interface of the game (except the character design, we hired other to draw it). I designed buttons, icons, forms and organize all of them to get these interfaces.
                                  I also one of two developers to implement Flash version of the game (using ActionScript 3 at that time) and released the game on Facebook.
                                  In addition, I was responsible to implement iOS application connecting to Java server and used websocket to enable real-time communication for multiplayer.
                                  Unfortunately, what I did for iOS application was just a prove of concept, not the whole completed game.
                                  </p>
                                </div>
                                <div className="col-md-12">
                                  <div className="img">
                                    <img width="80%" src="static/projects/content-dummy2.png" />
                                  </div>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Freetime project</Chip></li>
                                    <li><Chip>iOS</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                          <CardProject
                            title="The Adventure of the Magician"
                            subtitle="XNA Game Project"
                            imgSrc="static/projects/cover-adv.jpg"
                            tags={['ANDROID', 'DESIGN']}
                            year="2011"
                            desc="A fun and dedicated project of making my own game"
                          >
                          <div className="project-dialog-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="img">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/JAoT0BYHKX0" frameborder="0" allowfullscreen></iframe>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div  className="project-intro">
                                  <p>
                                    This is the video of gameplay of my game called 'The Adventure of the Magician'. It was a project when I was a third
                                    year student of my Bachelor degree. The project was to develop game using Microsoft XNA library (C#). It was an individual project
                                    so I did all every parts of the project by my own (including character drawing). The overall game was inspired by Ragnarok Battle Online.
                                  </p>
                                </div>
                                <div className="tags">
                                  <ul>
                                    <li><Chip>Study project</Chip></li>
                                    <li><Chip>XNA</Chip></li>
                                    <li><Chip>C#</Chip></li>
                                    <li><Chip>Design</Chip></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          </CardProject>
                        </div>
                      </Tab> */}

  </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          <section id="interest" className="hobbies-section main-section light">
            <div className="hobbies-bg">
              <div className="wrap container-fluid">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="hobbies-content">
                      <div className="section-title font-title">Hobbies</div>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hobbies-grid">
                <div className="hobbies-grid-item img">
                  <img src="static/hobbies/photography.JPG" />
                </div>
                <div className="hobbies-grid-item">
                  <div className="hobbies-grid-title font-title">PHOTOGRAPHY</div>
                  <p>
                  I love taking photo.
                  <br/>
                  Your brain cannot hold all of the memories, one day you will put those into the deepest part.
                  <br />
                  Photos will always make you remember those valuable time again.
                  </p>
                </div>
                <div className="hobbies-grid-item">
                  <img src="static/hobbies/travel.JPG" />
                </div>
                <div className="hobbies-grid-item">
                  <div className="hobbies-grid-title font-title">TRAVELLING</div>
                  <p>I love to travel. <br/>I dream once in my life I would travel around the world.
                  I like to go trekking toward the top of high mountains. I like the feeling of being there after pass through a tough path.
                  </p>
                </div>
                <div className="hobbies-grid-item">
                  <div className="hobbies-grid-title font-title">READINGS</div>
                  <p>
                    I would like to know how far I am behind the new technology.
                    <br/>
                    Reading is the thing that help me catch up. Medium is my favorite one.
                  </p>
                </div>
                <div className="hobbies-grid-item">
                  <img src="static/hobbies/read2.jpg" height="100%" />
                </div>
                <div className="hobbies-grid-item">
                  <div className="hobbies-grid-title font-title">LEARNING SOMETHING</div>
                  <p>
                  I usually think about what I would have done when I was child.
                  <br/>
                  And I do not want to wait anymore.
                  Therefore, now I am learning to play ukulele when I have free time.
                  </p>
                </div>
                <div className="hobbies-grid-item">
                  <img src="static/hobbies/learning.JPG" />
                </div>
              </div>
            </div>
          </section>


          {/*}<section id="interest" className="content-section text-center">
              <div className="download-section">
                  <div className="container">
                      <div className="col-lg-8 col-lg-offset-2">
                          <h2>Download Grayscale</h2>
                          <p>You can download Grayscale for free on the preview page at Start Bootstrap.</p>
                          <a href="http://startbootstrap.com/template-overviews/grayscale/" className="btn btn-default btn-lg">Visit Download Page</a>
                      </div>
                  </div>
              </div>
          </section>*/}


          <section id="contact" className="contact-section main-section">
            <div className="contact-bg">
              <div className="wrap container-fluid">
                <div className="row">
                  <div className="col-md-12 contact-content">
                    <div className="section-title white font-title">Contact</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-4 col-md-offset-2 contact-info">
                    <ul className="contact-list">
                      <li className="contact-list-item">
                        <div className="icon"><i className="fa fa-envelope-o"></i></div><span><a className="link" target="_blank" href="mailto:ch.kittipon@gmail.com">ch.kittipon@gmail.com</a></span>
                      </li>
                      <li className="contact-list-item">
                        <div className="icon"><i className="fa fa-mobile-phone"></i> </div><span>(+46)700-323118</span>
                      </li>
                      {/*<li className="contact-list-item">
                        <div className="icon">  <i className="fa fa-facebook-official"></i> </div><span>ch.kittipon@gmail.com</span>
                      </li>*/}
                      <li className="contact-list-item">
                        <div className="icon"><i className="fa fa-twitter"></i> </div><span><a className="link" target="_blank" href="https://twitter.com/kokoro_murmur">@kokoro_murmur</a></span>
                      </li>
                      <li className="contact-list-item">
                        <div className="icon"><i className="fa fa-linkedin"></i></div> <span><a className="link" target="_blank" href="https://www.linkedin.com/in/kittipon-chaikittiwanich">linkedin.com/kittipon-chaikittiwanich</a></span>
                      </li>
                      <li className="contact-list-item">
                      <div className="icon">  <i className="fa fa-instagram"></i></div> <span><a className="link" target="_blank" href="https://www.instagram.com/heartmon">@heartmon</a></span>
                      </li>
                      <li className="contact-list-item">
                      <div className="icon">  <i className="fa fa-github"></i></div> <span><a className="link" target="_blank" href="https://www.github.com/heartmon">github.com/heartmon</a></span>
                      </li>
                    </ul>
                    <div className="hline"></div>
                  </div>
                  <div className="col-md-4 contact-form">
                    {/*<h4 className="bold">Send me a message.</h4>
                    <form>
                      <TextField
                          floatingLabelText="Subject"
                          fullWidth={true}
                          inputStyle={styles.contacts.textField}
                          floatingLabelStyle={styles.contacts.floatingLabelStyle}
                          hintStyle={styles.contacts.hintStyle}
                          underlineStyle={styles.contacts.underlineStyle}
                          underlineFocusStyle={styles.contacts.underlineFocusStyle}
                        />
                        <TextField
                          floatingLabelText="Message"
                          multiLine={true}
                          rows={2}
                          fullWidth={true}
                          inputStyle={styles.contacts.textField}
                          textareaStyle={styles.contacts.textField}
                          floatingLabelStyle={styles.contacts.floatingLabelStyle}
                          hintStyle={styles.contacts.hintStyle}
                          underlineStyle={styles.contacts.underlineStyle}
                          underlineFocusStyle={styles.contacts.underlineFocusStyle}
                        />
                      </form>
                      <div className="text-center">
                        <RaisedButton label="Submit" secondary={true} fullWidth={true} />
                      </div>
                      */}
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
          <script src="static/vendor/jquery/jquery.js"></script>
          <script src="static/vendor/bootstrap/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
          <script src="static/grayscale.min.js"></script>
          <script src="https://unpkg.com/headroom.js@0.9.3"></script>

       </BaseLayout>
     );
   }
}

// className Home extends
// const Home = () => (
//     <BaseLayout>
//         I bims de home page.
//     </BaseLayout>
// );
//
export default initializePage(Home);
