const PageTitle = ({ title, subtitle }) => {
  return (<>
  <h1>{title}</h1>
  <p className='tagline'>{subtitle}</p>
  </>)
}

export default PageTitle;