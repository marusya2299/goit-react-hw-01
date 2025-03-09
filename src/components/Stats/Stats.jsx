import css from "../Stats/Stats.module.css";

export default function Stats({ stats = {} }) {
  const statsArray = [
    { id: "followers", label: "Followers", value: stats.followers || 0 },
    { id: "views", label: "Views", value: stats.views || 0 },
    { id: "likes", label: "Likes", value: stats.likes || 0 }
  ];

  return (
    <ul className={css.list}>
      {statsArray.map((item) => (
        <li className={css.elList} key={item.id}>
          <span className={css.label}>{item.label}</span>
          <span className={css.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
