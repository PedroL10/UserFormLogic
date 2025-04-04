import UserForm from "@/components/forms/userForm";

const EditUserPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm mode="edit" userId={id} />
    </div>
  );
};

export default EditUserPage;
