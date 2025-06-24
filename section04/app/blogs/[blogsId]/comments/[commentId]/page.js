export default async function Comments({ params }) {
  const { blogsId , commentId } = await params;
  return (
    <div>
      <p>
        Comment No. {commentId} on blog <b>{blogsId}</b>
      </p>
    </div>
  );
}
