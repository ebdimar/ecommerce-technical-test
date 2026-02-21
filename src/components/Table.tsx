import styles from '@/styles/components/Table.module.css'

interface TableRow {
  name: string
  value: string
}

interface TableProps {
  rows: TableRow[]
  className?: string
}

export function Table({ rows }: TableProps) {
  return (
    <table className={styles.tableWrapper}>
      <tbody>
        {rows.length >= 0 &&
          rows.map((spec) => (
            <tr key={spec.name}>
              <th>{spec.name}</th>
              <td>{spec.value}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
