import Link from 'next/link'
import Head from 'next/head'

const BaseLayout = ({ children, title = 'heartmon.me' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css" />
      <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css"  />
      <link href="static/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:400,700" rel="stylesheet" />

      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" type="text/css" />
      <link href='static/global.css' rel='stylesheet' type="text/css" />


    </Head>
    <header>
    </header>
    { children }
    <footer>
    </footer>
  </div>
);

export default BaseLayout

/*<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />*/
//       // <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
      // <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
      /*  // <link href='static/grid.css' rel='stylesheet' type="text/css" />*/
      /*  // <link href="static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />*/
//<link href='static/grayscale.min.css' rel='stylesheet' type="text/css" />
