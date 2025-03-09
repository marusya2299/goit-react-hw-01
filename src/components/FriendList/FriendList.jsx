import FriendListItem from "../FriendListItem/FriendListItem";
import css from "../FriendList/FriendList.module.css";

export default function FriendList({ friends={} }){
    return(
        <ul className={css.list}>
            {friends.map(friend => (
                <li className={css.elList} key={friend.id}>
                    <FriendListItem 
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline} />
                </li>
            ))}
        </ul>
    )

}