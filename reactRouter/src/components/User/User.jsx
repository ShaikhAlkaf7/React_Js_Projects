import { useParams } from "react-router";
function User() {
  const { id } = useParams();
  return (
    <h1 className=" bg-blue-900 text-center text-3xl font-serif  p-5">
      User = {id}
    </h1>
  );
}
export default User;
