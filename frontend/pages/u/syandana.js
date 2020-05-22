import Head from 'next/head'
import Layout from "../../components/layout"
import data from '../../lib/data/syandana.json'

const Syandana = () => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="/styles/index.css" />
      <title>{data.username} | LinkIt</title>
    </Head>
    <div className="container syandana mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-white">
          <div className="row">
            <div className="col">
              <img src={data.image} className="rounded-circle mb-2" height="96" />
              <h1 className="h4">{data.username}</h1>
              <p>{data.caption}</p>
              <ul className="list-unstyled mt-4">
                {data.links.map(x => (
                  <li className="my-3">
                    <a href={x.link} className="text-white h1">{x.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container text-center fixed-bottom mb-4">
      <div className="row">
        <div className="col">
          <a href="/" className="text-white font-weight-bold lead">LinkIt</a>
        </div>
      </div>
    </div>
    <style jsx global>{`
      body {
        background-color: #191919
      }
    `}</style>
  </Layout>
)

export default Syandana