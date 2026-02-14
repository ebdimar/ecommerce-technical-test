export default function ItemDetailPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Item ID: {params.id}</h1>
    </main>
  )
}
