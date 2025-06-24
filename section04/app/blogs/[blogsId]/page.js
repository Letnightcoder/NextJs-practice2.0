export default async function Blog({ params }) {
  // console.log(await params);
  const { blogsId } = await params;
  return (
    <div>
      <h3>BlogsId is {blogsId}</h3>
    </div>
  );
}

