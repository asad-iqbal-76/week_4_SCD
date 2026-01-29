function MyCard({ icon: Icon, heading, content, subheading }) {
  return (
    <div className="md:w-[300px] bg-white text-black w-screen p-6 rounded-xl shadow-lg text-center space-y-3">
      {Icon && <Icon className="text-3xl m-auto" />}

      <h2 className="font-bold">{heading}</h2>
      <p className="text-sm">{content}</p>
      <p className="text-sm font-semibold">{subheading}</p>
    </div>
  );
}

export default MyCard;
