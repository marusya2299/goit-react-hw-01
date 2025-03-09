import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({avatar, name, isOnline}){
    return(
        <div>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={`${isOnline ? css.online : css.offline} ${css.status}`}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>

    )

}