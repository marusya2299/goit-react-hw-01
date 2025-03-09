import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({items={}}){

    return(
        <table className={css.table}>
            <thead className={css.head}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.body}>
                {items.map(item =>(
                    <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
         </table>

    )

}