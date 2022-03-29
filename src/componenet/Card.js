export default function Card({ pic, msg, title }) {
  return (
    <div className="card" style={{ width: "20%" }}>
      <img src={pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{msg}</p>
        <a
          href="https://flxt.tmsimg.com/assets/p12486682_l_h9_aa.jpg"
          className="btn btn-primary"
          target="_blank"
        >
          Know More
        </a>
      </div>
    </div>
  );
}
