import type { NextPage } from 'next'
import Page from '../components/Page'

const Home: NextPage = () => {
  return (
  <>
    <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">Download PDF</a>
    <Page>
      <h1>Generated PDF</h1>
      <p>As you can see you can scroll without issues and select text.</p>
    </Page>
    <Page>
      <h1>Page 2</h1>
      <p>As you can see you can scroll without issues and select text.</p>
    </Page>
  </>
  )
}

export default Home
