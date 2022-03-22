import Head from 'next/head'
import Layout from '../components/layout'
import HomeSlider from '../components/homeSlider'
import FormComponent from '../components/form'
import ServiceComponent from '../components/service'
import MasterPlan from '../components/masterPlan'
import Section1 from '../components/section1'
import Banner from '../components/banner'
import Amenities from '../components/amenities'
import Section2 from '../components/section2'
import Models from '../components/models'
import Maps from '../components/maps'
import AboutUs from '../components/aboutUs'

export default function Home({
  homeSlider,
  homepage,
  services,
  models,
  global,
  amenities,
  partners,
}) {

  return (
    <Layout global={global} fluid>
      <Head>
        <title>Aqua Boulevard</title>
        <meta name="description" content="Aqua Boulevard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSlider homeSlider={homeSlider} lg={9} />
      <FormComponent lg={3} md={12} homepage={homepage} global={global} />
      <ServiceComponent lg={12} md={12} services={services} />
      <Section1 lg={12} homepage={homepage} />
      <Banner lg={12} homepage={homepage} global={global} />
      <Amenities lg={12} amenities={amenities} />
      <Section2 lg={12} homepage={homepage} />
      <Models lg={12} homepage={homepage} models={models} />
      <MasterPlan lg={12} md={12} homepage={homepage} amenities={amenities} />
      <AboutUs lg={12} partners={partners} global={global} />
      <Maps lg={12} global={global} homepage={homepage} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const url = 'https://aquacr-cms.herokuapp.com'

  const homeSliderResponse = await fetch(`${url}/home-sliders`)
  const homeSliderResponseJson = await homeSliderResponse.json()

  const homepageResponse = await fetch(`${url}/homepage`)
  const homepageResponseJson = await homepageResponse.json()

  const servicesResponse = await fetch(`${url}/services`)
  const servicesResponseJson = await servicesResponse.json()

  const modelsResponse = await fetch(`${url}/models`)
  const modelsResponseJson = await modelsResponse.json()

  const globalResponse = await fetch(`${url}/global`)
  const globalResponseJson = await globalResponse.json()

  const amenitiesResponse = await fetch(`${url}/amenities`)
  const amenitiesResponseJson = await amenitiesResponse.json()

  const partnersResponse = await fetch(`${url}/partners`)
  const partnersResponseJson = await partnersResponse.json()
  return {
    props: {
      homeSlider: homeSliderResponseJson,
      homepage: homepageResponseJson,
      services: servicesResponseJson,
      models: modelsResponseJson,
      global: globalResponseJson,
      amenities: amenitiesResponseJson,
      partners: partnersResponseJson,
    },
  }
}
