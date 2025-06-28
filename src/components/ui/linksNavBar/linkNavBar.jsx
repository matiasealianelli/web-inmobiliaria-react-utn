import "./linkNavBar.css"

export default   function LinkNav({ enlace, hrefLink }) {
    return (
      <a href={hrefLink} className="link-header">
        {enlace}
      </a>
    );
  }