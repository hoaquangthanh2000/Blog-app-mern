type Tprop = {
  openCreatePostModal: () => void;
};

export default function AddBlog(prop: Tprop) {
  return (
    <button
      className="bg-blue-600 rounded-[50%] w-12 h-12 flex justify-center float-right cursor-pointer hover:shadow-2xl hover:opacity-80"
      onClick={prop.openCreatePostModal}
    >
      <i className="fa-sharp fa-regular fa-plus leading-[48px]"></i>
    </button>
  );
}
