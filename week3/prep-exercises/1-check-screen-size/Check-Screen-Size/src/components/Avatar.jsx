const Avatar = ({ person }) => {
  return (
    <div className="avatar">
      <div>Name: {person.name}</div>
      <div>Size: {person.size}</div>
    </div>
  );
};

export default Avatar;