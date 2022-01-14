function Story({ image, username }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={username}
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
