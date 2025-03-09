import css from "../Image/Image.module.css";

export default function Image({ imgUrl }) {
  return (
    <div className={css.imgContainer}>
      <img className={css.img} src={imgUrl} />
    </div>
  );
}
