import css from "../Tag/Tag.module.css";

export default function Location({ location }) {
  return (
    <p className={css.tag}>{location}</p>
  );
}
