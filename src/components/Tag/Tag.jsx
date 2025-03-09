import css from "../Tag/Tag.module.css";

export default function Tag({ tag }) {
  return (
    <p className={css.tag}>@{tag}</p>
  );
}
