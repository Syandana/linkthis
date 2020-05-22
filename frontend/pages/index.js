import Head from 'next/head'
import Layout from "../components/layout"
import Footer from '../components/footer'

const Home = () => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="/styles/index.css" />
      <title>Linkit</title>
    </Head>
    <div className="container hero">
      <div className="row h-100">
        <div className="col text-center align-self-center">
          <h1 className="display-4">The Only Link You’ll Ever Need</h1>
          <p className="lead">Connect audiences to all of your content with just one link</p>
          <a href="#" className="btn btn-lg btn-primary">Get started</a>
        </div>
      </div>
    </div>

    <div className="container full">
      <div className="row h-100">
        <div className="col-lg-6 text-center align-self-center">

        </div>
        <div className="col-lg-6 align-self-center">
          <h2 className="">Use it anywhere</h2>
          <p className="lead">Take your Linkit wherever your audience is, to help them to discover all your important content.</p>
        </div>
      </div>
    </div>

    <div className="container full">
      <div className="row h-100">
        <div className="col-lg-6 align-self-center">
          <h2 className="">Link to everywhere</h2>
          <p className="lead">Linkit is the launchpad to your latest video, article, recipe, tour, store, website, social post - everywhere you are online.</p>
        </div>
        <div className="col-lg-6 align-self-center">
        </div>
      </div>
    </div>

    <div className="container full">
      <div className="row h-100">
        <div className="col-lg-6 align-self-center">

        </div>
        <div className="col-lg-6 align-self-center">
          <h2 className="">Easily managed</h2>
          <p className="lead">Creating a Linkit takes seconds. Use our simple drag-and-drop editor to effortlessly manage your content.</p>
        </div>
      </div>
    </div>

    <div className="container full">
      <div className="row h-100">
        <div className="col-lg-6 align-self-center">
          <h2 className="">Join the Linkit community</h2>
          <p className="lead">The world's biggest influencers, creators, publishers and brands use Linkit in their marketing strategy.</p>
        </div>
        <div className="col-lg-6 align-self-center">
        </div>
      </div>
    </div>

    <Footer/>

  </Layout>
)

export default Home