import { initializePage, applyStyles } from '~/utils';
import { BaseLayout } from '~/ui/layouts'
import React from 'react'
import Chip from 'material-ui/Chip'
import { CardProject } from '~/ui/components';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import {pinkA400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';

import globalStyle from './styles.css';

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
    console.log(globalStyle);
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

          .hobbies-grid-item img {
            object-fit: cover;
            height: 100%;
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
          <nav className="navbar test navbar-white navbar-custom navbar-fixed-top font-title" role="navigation">
            <div className="navbar-header">
                <a className="navbar-brand page-scroll"  href="#page-top">
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
                <a className="navbar-brand page-scroll"  href="#page-top">
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
                    <div className="col-md-6 col-md-offset-6 intro-content">
                        <h1 className="font-title brand-heading"><span className="bold">HEART</span> KITTIPON</h1>
                        <p className="intro-text">Passionate full-stack developer</p>
                        <p className="intro-quote">"..........................."</p>
                        <div className="more-button">
                          <IconButton
                            iconStyle={styles.largeIcon}
                            style={styles.large}
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
                      <div className="section-title white font-title">About me</div>
                      <p>
                      Passionate developer who understand users & design and loves to learn new things with fast learning skill.
                      </p>
                      <div className="section-subtitle font-title">WHAT AM I CURRENTLY DOING?</div>
                      <p>
                      Now I am studying in the first year of the Master's degree in Interaction Design and Technologies at
                      Chalmers University of Technologies, Sweden.
                      Also, I am learning in Udacity's Associate Android Developer Fast Track program.
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
                      <Tab className="projects-tab" label="ALL PROJECTS" >
                        <div className="row projects-card-list-container">
                            <CardProject
                              title="heartmon.me"
                              subtitle="My portofio website"
                              imgSrc="static/projects/logo-heartmon.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="Popular Movies"
                              subtitle="Fund raising for kids"
                              imgSrc="static/projects/android-app-nologo.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="KidsBazaar"
                              subtitle="Fund raising for kids"
                              imgSrc="https://www.wired.com/wp-content/uploads/2015/08/beepapp-story.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="Settler of Catan"
                              subtitle="Interaction Design Project"
                              imgSrc="static/projects/cover-catan.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="Video (Methodology)"
                              subtitle="Interaction Design Project"
                              imgSrc="https://www.wired.com/wp-content/uploads/2015/08/beepapp-story.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="Hexalite"
                              subtitle="Interaction Design Group Project"
                              imgSrc="static/projects/logo-hexalite.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="Folkrice"
                              subtitle="Interaction Design Group Project"
                              imgSrc="static/projects/cover-folkrice.JPG"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="SendmeTutor"
                              subtitle="Interaction Design Group Project"
                              imgSrc="https://www.wired.com/wp-content/uploads/2015/08/beepapp-story.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="SB Design"
                              subtitle="Interaction Design Group Project"
                              imgSrc="static/projects/cover-sb.png"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="ArmyMax"
                              subtitle="Interaction Design Group Project"
                              imgSrc="https://www.wired.com/wp-content/uploads/2015/08/beepapp-story.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="VdoMax"
                              subtitle="Interaction Design Group Project"
                              imgSrc="https://www.wired.com/wp-content/uploads/2015/08/beepapp-story.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="Za-shi"
                              subtitle="Interaction Design Group Project"
                              imgSrc="static/projects/cover-zashi.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="Department of Highway, TH"
                              subtitle="Interaction Design Group Project"
                              imgSrc="https://www.wired.com/wp-content/uploads/2015/08/beepapp-story.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="Lucky Dummy"
                              subtitle="Interaction Design Group Project"
                              imgSrc="https://www.wired.com/wp-content/uploads/2015/08/beepapp-story.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="OISHI Delivery"
                              subtitle="Interaction Design Group Project"
                              imgSrc="static/projects/cover-oishi.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                            <CardProject
                              title="The Adventure of the Magician"
                              subtitle="XNA Game Project"
                              imgSrc="https://www.wired.com/wp-content/uploads/2015/08/beepapp-story.jpg"
                              tags={['ANDROID', 'DESIGN']}
                              year="2016"
                            >
                              Test
                            </CardProject>
                        </div>
                      </Tab>

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
                      <div className="section-title white font-title">Hobbies</div>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hobbies-grid">
                <div className="hobbies-grid-item img">
                  <img src="https://cdn.shopify.com/s/files/1/0721/9229/t/5/assets/slideshow_slide_2_image.jpg?12392668091460271758" />
                </div>
                <div className="hobbies-grid-item">
                  <div className="hobbies-grid-title font-title">PHOTOGRAPHY</div>
                  <p>I loves taking photo</p>
                </div>
                <div className="hobbies-grid-item">
                  <img src="https://cdn.shopify.com/s/files/1/0721/9229/t/5/assets/slideshow_slide_2_image.jpg?12392668091460271758" />
                </div>
                <div className="hobbies-grid-item">
                  <div className="hobbies-grid-title font-title">TRAVELLING</div>
                  <p>I love to travel.</p>
                </div>
                <div className="hobbies-grid-item">
                  <div className="hobbies-grid-title font-title">READINGS</div>
                  <p>

                  </p>
                </div>
                <div className="hobbies-grid-item">
                  <img src="https://cdn.shopify.com/s/files/1/0721/9229/t/5/assets/slideshow_slide_2_image.jpg?12392668091460271758" />
                </div>
                <div className="hobbies-grid-item">
                  <div className="hobbies-grid-title font-title">LEARNING SOMETHING NEW</div>
                  <p>
                  </p>
                </div>
                <div className="hobbies-grid-item">
                  <img src="https://cdn.shopify.com/s/files/1/0721/9229/t/5/assets/slideshow_slide_2_image.jpg?12392668091460271758" />
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
                  <div className="col-md-4 col-md-offset-2 contact-info">
                    <ul className="contact-list">
                      <li className="contact-list-item">
                        <div className="icon"><i className="fa fa-envelope-o"></i></div> <span>ch.kittipon@gmail.com</span>
                      </li>
                      <li className="contact-list-item">
                        <div className="icon"><i className="fa fa-mobile-phone"></i> </div><span>(+46)700-323118</span>
                      </li>
                      {/*<li className="contact-list-item">
                        <div className="icon">  <i className="fa fa-facebook-official"></i> </div><span>ch.kittipon@gmail.com</span>
                      </li>*/}
                      <li className="contact-list-item">
                        <div className="icon"><i className="fa fa-twitter"></i> </div><span><a className="link">@kokoro_murmur</a></span>
                      </li>
                      <li className="contact-list-item">
                        <div className="icon"><i className="fa fa-linkedin"></i></div> <span><a className="link">linkedin.com/kittipon-chaikittiwanich</a></span>
                      </li>
                      <li className="contact-list-item">
                      <div className="icon">  <i className="fa fa-instagram"></i></div> <span><a className="link">@heartmon</a></span>
                      </li>
                      <li className="contact-list-item">
                      <div className="icon">  <i className="fa fa-github"></i></div> <span><a className="link">github.com/heartmon</a></span>
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
export default applyStyles(globalStyle)(initializePage(Home));
