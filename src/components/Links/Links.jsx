import classes from "./links.module.css";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "@svg";

function Links({
  data,
  font = "bangla",
  link = "#",
  text = "View all",
  page = false,
  fallback = "Not Available",
}) {
  const show = data.links.length > 0;
  return (
    <div className={classes.container + " " + classes[font]}>
      <h2 className={`${classes.heading} ${show ? "" : classes.fallback}`}>
        {show ? data.heading : fallback}
      </h2>
      {show && (
        <>
          <ul className={classes.items}>
            {data.links.map((item) => (
              <li key={JSON.stringify(item)}>
                <Link path={item.link} text={item.text} />
              </li>
            ))}
          </ul>
          {page && (
            <NavLink to={link} className={classes.action}>
              {text} <ArrowRight className={classes.svg} />
            </NavLink>
          )}
        </>
      )}
    </div>
  );
}

function Link({ path, text }) {
  if (path.includes("http")) {
    return (
      <a target="_blank" rel="noopener" href={path}>
        {text}
      </a>
    );
  }

  return <NavLink to={path}>{text}</NavLink>;
}

export default Links;
