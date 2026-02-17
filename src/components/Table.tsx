import styles from '@/styles/components/Table.module.css'

interface TableRow {
  name: string
  value: string
}

interface TableProps {
  title: string
  rows: TableRow[]
  className?: string
}

export function Table({ title, rows }: TableProps) {
  return (
    <section className={styles.tableWrapper}>
      <h2>{title}</h2>
      <table>
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
    </section>
  )
}
