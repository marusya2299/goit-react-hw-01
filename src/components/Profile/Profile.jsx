import Image from "../Image/Image";
import Name from "../Name/Name";
import Tag from "../Tag/Tag";
import Location from "../Location/Location";
import Stats from "../Stats/Stats";

import css from "../Profile/Profile.module.css";

export default function Profile({ imgUrl, name, tag, location, stats }) {
  return (
    <div className={css.container}>
      <Image imgUrl={imgUrl} />
      <Name name={name} />
      <Tag tag={tag} />
      <Location location={location} />
      <Stats stats={stats} />
    </div>
  );
}
