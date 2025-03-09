import css from "../Name/Name.module.css";

export default function Name({ name }) {
  return (
    <p className={css.username}>{name}</p>
  );
}
