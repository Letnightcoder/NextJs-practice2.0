export default async function Comment({ params }) {
  const { blogsId } = await params;
  return (
    <div>
      <h3>All comments on blog <b>{blogsId}</b></h3>
    </div>
  );
}
